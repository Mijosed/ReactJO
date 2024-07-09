import { Component } from '../core/Component.js';

export class MapComponent extends Component {
    render() {
        return {
            tag: "div",
            props: { id: "map", style: "width: 100%; height: 500px;" },
            children: []
        };
    }

    afterRender() {
        this.loadGoogleMapsAPI().then(() => {
            this.initMap();
        }).catch(error => {
            console.error("Google Maps API failed to load:", error);
        });
    }

    loadGoogleMapsAPI() {
        return new Promise((resolve, reject) => {
            if (window.google && window.google.maps) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD0coBK8D7HNEV12rmJvWTW7HxMItimP1E&callback=onGoogleMapsLoad`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);

            window.onGoogleMapsLoad = () => {
                resolve();
            };

            script.onerror = () => {
                reject(new Error("Failed to load the Google Maps API"));
            };
        });
    }

    initMap() {
        const mapElement = document.getElementById('map');
        const mapOptions = {
            center: { lat: 48.8566, lng: 2.3522 },
            zoom: 13
        };

        const map = new google.maps.Map(mapElement, mapOptions);

        const marker = new google.maps.Marker({
            position: { lat: 48.8566, lng: 2.3522 },
            map: map,
            title: 'Paris, France'
        });

        const infowindow = new google.maps.InfoWindow({
            content: 'Paris, France'
        });

        marker.addListener('click', function() {
            infowindow.open(map, this);
        });
    }

}


