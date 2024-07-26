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
import { arraysEqual } from '../utils/arrayUtils.js';
import { fetchLieux } from '../api/fetchLieux.js';

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
            error: null,
            data: []
        };

        this.headerHome = new HeaderHome();
        this.titleElementSites = new HomeTitle({ text: "Explorer les sites", couleur: "white", id: "sites", textColor: "black" });
        this.mapElement = new MapSection({ id: "map-section", data: this.state.data, homePage: this });
        this.footerElement = new Footer();
        this.sportsSection = new SportSection({ id: "sports-section",homePage: this });

        this.componentDidMount();
    }
    
    async componentDidMount(dataSearch = []) {
        let data;

        try {
            data = dataSearch.length > 0 ? { results: dataSearch } : await fetchLieux();
        } catch (error) {
            this.setState({ error: "Erreur lors de la récupération des données : " + error.message });
            console.error("Erreur lors de la récupération des données:", error);
            return;
        }
        this.mapElement.SearchBar.setState({ items: data.results });
        this.mapElement.MapSearchMenu.place.setState({ items: data.results });
        if(!this.map)
        {
            this.initializeMap();
        }
        

            this.clearMarkers();
        

        this.addMarkers(data.results);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                this.map.setView([latitude, longitude], 12);
                this.addGeolocationMarker([latitude, longitude], data.results);
            });
        }

        if (dataSearch.length === 1) {
            this.focusSingleSite(data.results[0]);
        }
    }

    initializeMap() {
        this.map = L.map('map', { gestureHandling: true }).setView([48.8566, 2.3522], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    clearMarkers() {
        this.markers.forEach(marker => this.map.removeLayer(marker));
        this.markers = [];
    }

    addMarkers(sites) {
        const olympicSites = sites.map(site => ({
            coords: [site.point_geo.lat, site.point_geo.lon],
            name: site.nom_site
        }));

        olympicSites.forEach(site => {
            const marker = L.marker(site.coords).addTo(this.map).bindPopup(site.name).openPopup();
            marker.on('click', (event) => {
                this.mapElement.toggleMenu(event);
            });
            this.markers.push(marker);
        });
    }

    addGeolocationMarker(coords, sites) {
        const customIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });

        L.marker(coords, { icon: customIcon })
            .addTo(this.map)
            .bindPopup('Je suis géolocalisé(e) !')
            .openPopup();

        this.checkProximity(coords, sites);
    }

    focusSingleSite(site) {
        const coords = [site.point_geo.lat, site.point_geo.lon];
        this.map.setView(coords, 12);
        const singleMarker = L.marker(coords).addTo(this.map).bindPopup(site.nom_site).closePopup();
        singleMarker.on('click', (event) => {
            this.mapElement.toggleMenu(event);
        });
        this.markers.push(singleMarker);
    }

    checkProximity(userCoords, sites) {
        let closestSite = null;
        let minDistance = Infinity;

        sites.forEach(site => {
            const distance = this.getDistance(userCoords, [site.point_geo.lat, site.point_geo.lon]);
            if (distance < minDistance) {
                minDistance = distance;
                closestSite = site;
            }
        });

        if (closestSite && minDistance < 50) {
            this.sendNotification(closestSite.nom_site, minDistance);
        }
    }

    getDistance(coord1, coord2) {
        const R = 6371;
        const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
        const dLon = (coord2[1] - coord1[1]) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
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
            props : { id : this.props.id },
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
