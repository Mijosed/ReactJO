import { Component } from '../core/Component.js';
import {
    HeaderHome,
    MapSection,
    Footer,
    HomeTitle,
    SportSection
} from '../components/Components.js';
import { validateProps } from '../utils/utils.js';
import { fetchData } from '../api/fetchData.js';

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

        this.state = {
            sports: [
                { id: "1", nom: "Athlétisme", description: "Compétitions d'athlétisme", image: "../assets/images/sports/athle.jpg" },
                { id: "2", nom: "Natation", description: "Compétitions de natation", image: "../assets/images/sports/natation.jpg" },
                { id: "3", nom: "Basketball", description: "Compétitions de basketball", image: "../assets/images/sports/basket.jpg" },
                { id: "4", nom: "Football", description: "Compétitions de football", image: "../assets/images/sports/foot.jpg" },
                { id: "5", nom: "Gymnastique", description: "Compétitions de gymnastique", image: "../assets/images/sports/gym.jpg" },
                { id: "6", nom: "Tennis", description: "Compétitions de tennis", image: "../assets/images/sports/tennis.jpg" },
                { id: "7", nom: "Boxe", description: "Compétitions de boxe", image: "../assets/images/sports/boxe.jpg" },
                { id: "8", nom: "Cyclisme", description: "Compétitions de cyclisme", image: "../assets/images/sports/cyclisme.jpg" }
            ]
        };

        this.headerHome = new HeaderHome();
        this.titleElementSites = new HomeTitle({ text: "Explorer les sites", couleur: "white", id: "sites", textColor: "black" });
        this.mapElement = new MapSection({ rerenderEvent: "initMap" });
        this.footerElement = new Footer();
        this.sportsSection = new SportSection({ id: "sports-section", sports: this.state.sports });

        document.addEventListener('DOMContentLoaded', () => {
            const mapContainer = document.getElementById('map');
            if (mapContainer) {
                const event = new CustomEvent('initMap', {});
                mapContainer.addEventListener('initMap', () => {
                    this.componentDidMount();
                });
                this.mapElement.setContainer(mapContainer);
                this.mapElement.getContainer().dispatchEvent(event);
            } else {
                console.error('Map container not found');
            }
        });
    }

    async componentDidMount() {
        console.log("Initialisation de la carte");
        const map = L.map('map', { gestureHandling: true }).setView([48.8566, 2.3522], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        try {
            const data = await fetchData();
            const olympicSites = data.results.map(site => ({
                coords: [site.point_geo.lat, site.point_geo.lon],
                name: site.nom_site
            }));

            olympicSites.forEach(site => {
                L.marker(site.coords).addTo(map)
                    .bindPopup(site.name)
                    .openPopup();
            });

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    map.setView([latitude, longitude], 12);

                    let customIcon = L.icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                    });

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

export default function renderHomePage() {
    const homePage = new HomePage({ title: "Home Page" });
    return homePage.renderDOM();
}
