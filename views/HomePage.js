import { Component } from '../core/Component.js';
import {
    HeaderHome,
    MapSection,
    Footer,
    HomeTitle,
    SportSection
} from '../components/Components.js';
import { validateProps } from '../utils/typeCheck.js';
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
        this.markers = []; 
        this.state = {
            sports: [],
            mapInitialized: true,
            error: null
        };

        this.headerHome = new HeaderHome();
        this.titleElementSites = new HomeTitle({ text: "Explorer les sites", couleur: "white", id: "sites", textColor: "black" });
        this.mapElement = new MapSection( {id : "map-section", state :{ data: [] },homePage: this});
        this.footerElement = new Footer();
        this.sportsSection = new SportSection({ id: "sports-section" });
        this.componentDidMount();
    }

    async componentDidMount(dataSearch = []) {
        let data;
        
        try {
            data = dataSearch.length > 0 ? { results: dataSearch } : await fetchData();
        } catch (error) {
            this.setState({ error: "Erreur lors de la récupération des données : " + error.message });
            console.error("Erreur lors de la récupération des données :", error);
            return;
        }

        // Initialiser la carte si ce n'est pas déjà fait
        if (!this.map) {
            this.map = L.map('map', { gestureHandling: true }).setView([48.8566, 2.3522], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);
        } else {
            // Si la carte est déjà initialisée, supprimer les marqueurs existants
            this.markers.forEach(marker => this.map.removeLayer(marker));
            this.markers = []; // Réinitialiser les marqueurs
        }

        const olympicSites = data.results.map(site => ({
            coords: [site.point_geo.lat, site.point_geo.lon],
            name: site.nom_site
        }));

        olympicSites.forEach(site => {
            const marker = L.marker(site.coords).addTo(this.map).bindPopup(site.name).openPopup();

            marker.on('click', (event) => {
                this.mapElement.toggleMenu(event);
            });

            this.markers.push(marker); // Stockage des marqueurs
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                this.map.setView([latitude, longitude], 12);

                const customIcon = L.icon({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                });

            
            


                L.marker([latitude, longitude], { icon: customIcon })
                    .addTo(this.map)
                    .bindPopup('Je suis géolocalisé(e) !')
                    .openPopup();

                this.checkProximity([latitude, longitude], olympicSites);
            });
        }

        if (dataSearch.length === 1) {
            const singleSite = olympicSites[0];
            this.map.setView(singleSite.coords, 12);
            const singleMarker = L.marker(singleSite.coords).addTo(this.map)
                .bindPopup(singleSite.name).closePopup();
                
                singleMarker.on('click', (event) => {
                    this.mapElement.toggleMenu(event);
                });
            this.markers.push(singleMarker);
        }

        this.mapElement.setState({ data: data.results });
        this.mapElement.SearchBar.setState({ items: data.results });
    }



    checkProximity(userCoords, sites) {
        let closestSite = null;
        let minDistance = Infinity;

        sites.forEach(site => {
            const distance = this.getDistance(userCoords, site.coords);
            if (distance < minDistance) {
                minDistance = distance;
                closestSite = site;
            }
        });

        if (closestSite && minDistance < 50) { 
            this.sendNotification(closestSite.name, minDistance);
        }
    }

    getDistance(coord1, coord2) {
        const R = 6371; 
        const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
        const dLon = (coord2[1] - coord1[1]) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c; 
    }

    sendNotification(siteName, distance) {
        const roundedDistance = Math.round(distance * 100) / 100; 
        const message = `Le site de compétition le plus proche est ${siteName}, situé à ${roundedDistance} km.`;
        if (Notification.permission === 'granted') {
            new Notification('Site de compétition à proximité', {
                body: message,
            });
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification('Site de compétition à proximité', {
                        body: message,
                    });
                }
            });
        }
    }

    render() {
        const { sports, mapInitialized, error } = this.state;

        if (error) {
            return {
                tag: "div",
                props: { class: "error-message" },
                children: [error]
            };
        }

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
