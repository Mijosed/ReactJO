import { Component } from '../../core/Component.js';

export class GeolocalisationButton extends Component {
    constructor(props = {}) {
        super(props);
    }

    render() {
        return {
            tag : "img",
            props : {
                src : "../assets/icons/geolocalisation.svg",
                alt : "Geolocalisation button",
                class : "absolute bottom-8 right-8 w-14 h-14 z-50 cursor-pointer" ,
            },
            children : []
        };
    }
}
