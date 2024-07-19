import { Component } from '../../core/Component.js';

export class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            googleMapsLoaded: false,
        };
    }

    // Méthode pour charger le script Google Maps
    async loadGoogleMapsScript() {
        return new Promise((resolve, reject) => {
            if (window.google && window.google.maps) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
            script.async = true;
            script.defer = true;
            script.onload = () => {
                this.setState({ googleMapsLoaded: true });
                resolve();
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Méthode pour initialiser la carte
    initMap() {
        if (!this.state.googleMapsLoaded) return;

        const mapDiv = document.getElementById('map');
        if (!mapDiv) return;

        new google.maps.Map(mapDiv, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    }

    async componentDidMount() {
        await this.loadGoogleMapsScript();
        this.initMap();
    }

    render() {
        // Assurez-vous que le div a un id "map"
        return {
            tag: "div",
            props: { id: "map", style: "width: 100%; height: 500px;" },
            children: []
        };
    }
}
