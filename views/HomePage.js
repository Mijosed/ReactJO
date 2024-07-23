import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import {
    HeaderHome,
    Title,
    MapSection,
    Footer,
    SearchComponent,
    Card
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
        this.titleElement = new Title({ text: "Explorer les sites" });
        this.mapElement = new MapSection({ rerenderEvent: "initMap" });
        this.footerElement = new Footer();
        document.addEventListener('DOMContentLoaded', () => {
            debugger;
            const event = new CustomEvent('initMap', {  } );
            document.getElementById('map').addEventListener('initMap', () => {
                this.componentDidMount();
            });
            this.mapElement.setContainer(document.getElementById('map'));
            this.mapElement.getContainer().dispatchEvent(event);
        });
        this.sports = [
            { id: "1", nom: "Athlétisme", description: "Compétitions d'athlétisme", image: "../assets/images/sports/athle.jpg" },
            { id: "2", nom: "Natation", description: "Compétitions de natation", image: "../assets/images/sports/natation.jpg" },
            { id: "3", nom: "Basketball", description: "Compétitions de basketball", image: "../assets/images/sports/basket.jpg" },
            { id: "4", nom: "Football", description: "Compétitions de football", image: "../assets/images/sports/foot.jpg" },
            { id: "5", nom: "Gymnastique", description: "Compétitions de gymnastique", image: "../assets/images/sports/gym.jpg" },
            { id: "6", nom: "Tennis", description: "Compétitions de tennis", image: "../assets/images/sports/tennis.jpg" },
            { id: "7", nom: "Boxe", description: "Compétitions de boxe", image: "../assets/images/sports/boxe.jpg" },
            { id: "8", nom: "Cyclisme", description: "Compétitions de cyclisme", image: "../assets/images/sports/cyclisme.jpg" }
        ];
    }
    async componentDidMount() {
        // Initialisation de la carte Leaflet
        console.log("Initialisation de la carte");
        const map = L.map('map', {
  gestureHandling: true
}).setView([48.8566, 2.3522], 12); // Centré sur Paris avec un zoom de 12

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
                this.titleElement.render(),
                this.mapElement.render(),
                {
                    tag: "div",
                    props: { class: "grid grid-cols-4 gap-4 p-4 mx-20", id: "sports" },
                    children: this.sports.map(sport => {
                        const card = new Card(sport);
                        return card.render();
                    })
                },
                this.footerElement.render()
            ]
        };
    }
}

export default function renderHomePage() {
    const homePage = new HomePage({ title: "Home Page" });
    return Render.createElement(homePage.render());
}
