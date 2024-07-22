import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';

import {
    LineComponent,
    TitleComponent, FooterSection, TextComponent
} from '../components/Components.js';
import { LocationBackground, DisciplineIcons, SpotSection } from '../components/LocationComponent.js';


export class LocationPage extends Component {
    render() {

        const locationElement = new LocationBackground();
        const textElement = new TextComponent({ class: "simple-text", text: "L’Arena Paris Sud fait partie de Paris Expo, centre d’exposition et de convention parmi les plus actifs d’Europe et le plus fréquenté de France. Paris Expo c’est une zone de 35 hectares, 228 000m² de halls d’exposition," });
        const titleElement = new TitleComponent({ text: "SPORTS" });
        const lineElement = new LineComponent();
        const disciplineElement = new DisciplineIcons();
        const SpotTitle = new TitleComponent({ text: "MEUILLEURS SPOTS" });
        const spotElement = new SpotSection();
        const footerElement = new FooterSection();
        return {
            tag: "div",
            children: [
                locationElement.render(),
                textElement.render(),
                titleElement.render(),
                lineElement.render(),
                disciplineElement.render(),
                SpotTitle.render(),
                lineElement.render(),
                spotElement.render(),
                footerElement.render(),

            ]
        };
    }
}

export default function renderLocationPage() {
    const locationPage = new LocationPage();
    return Render.createElement(locationPage.render());
}
