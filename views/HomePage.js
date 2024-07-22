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
        this.mapElement = new MapSection();
        this.footerElement = new Footer();

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

    render() {
        return {
            tag: "div",
            children: [
                this.headerHome.render(),
                this.titleElement.render(),
                this.mapElement.render(),
                {
                    tag: "div",
                    props: { class: "grid grid-cols-4 gap-4 p-4 mx-20" },
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
