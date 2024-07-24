import { Component } from '../core/Component.js';
import {
    HeaderHome,
    MapSection,
    Footer,
    Card,
    HomeTitle,
    SportSection
} from '../components/Components.js';
import { validateProps } from '../utils/utils.js';
import {fetchData} from '../api/fetchData.js'

export class HomePage extends Component {
    constructor(props) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                title: { type: 'string' }
            }
        };
        validateProps(props, propSchema);

        this.headerHome = new HeaderHome();
        this.titleElementSites = new HomeTitle({ text: "Explorer les sites", couleur: "white", id: "sites", textColor: "black" });
        this.mapElement = new MapSection({ rerenderEvent: "initMap" });
        this.footerElement = new Footer();
        this.sportsSection = new SportSection();
        document.addEventListener('DOMContentLoaded', () => {
            const event = new CustomEvent('initMap', {  } );
            document.getElementById('map').addEventListener('initMap', () => {
                this.componentDidMount();
            });
            this.mapElement.setContainer(document.getElementById('map'));
            this.mapElement.getContainer().dispatchEvent(event);
        });
    }

    async componentDidMount() {
        // Initialisation de la carte Leaflet
        console.log("Initialisation de la carte");
        const map = L.map('map', {gestureHandling: true}).setView([48.8566, 2.3522], 12); // Centré sur Paris avec un zoom de 12

        // Ajout de la couche de tuiles OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        try {
            // Chargement des données depuis le fichier JSON
            const data = await fetchData();
            const olympicSites = data.results.map(site => ({
                coords: [site.point_geo.lat, site.point_geo.lon],
                name: site.nom_site
            }));

            // Ajout des marqueurs pour les sites olympiques
            olympicSites.forEach(site => {
                L.marker(site.coords).addTo(map)
                    .bindPopup(site.name)
                    .openPopup();
            });

            // Utilisation de l'API de géolocalisation pour centrer la carte sur la position de l'utilisateur
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    map.setView([latitude, longitude], 12);

                    // Icône personnalisée pour marquer la position de l'utilisateur
                    let customIcon = L.icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                    });

                    // Ajout du marqueur pour la position de l'utilisateur
                    L.marker([latitude, longitude], { icon: customIcon })
                        .addTo(map)
                        .bindPopup('Je suis géolocalisé(e) !')
                        .openPopup();
                });
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    }

    render() {
        return {
            tag: "div",
            children: [
                this.headerHome.render(),
                this.titleElementSites.render(),
                this.mapElement.render(),
                this.sportsSection.render(),
                this.footerElement.render()
            ]
        };
    }
}