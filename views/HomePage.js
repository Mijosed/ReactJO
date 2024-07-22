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
    componentDidMount() {
        // Initialisation de la carte Leaflet
        console.log("init map dazdsdzds");
        debugger;
        const map = L.map('map').setView([48.8566, 2.3522], 12); // Centré sur Paris avec un zoom de 12

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const olympicSites = [
            { coords: [48.8566, 2.3522], name: 'Site 1' },
            { coords: [48.8570, 2.3490], name: 'Site 2' }
        ];

        olympicSites.forEach(site => {
            L.marker(site.coords).addTo(map)
                .bindPopup(site.name)
                .openPopup();
        });
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
