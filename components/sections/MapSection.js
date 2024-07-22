import { Component } from '../../core/Component.js';

export class MapSection extends Component {
    constructor(props ={}) {
        super(props);
    }
    render() {
        return {
            tag: "div",
            props: { id: "map", class: "w-full h-96 bg-gray-300" },
            children: [
                {
                    tag: "p",
                    props: { class: "text-center text-gray-700" },
                    children: ["Carte des sites des Jeux Olympiques (à intégrer avec Google Maps API)"]
                }
            ]
        };
    }
}
