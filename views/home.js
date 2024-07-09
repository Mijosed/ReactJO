import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import {
    LinkComponent,
    TextComponent,
    MainComponent,
    TitleComponent, FooterSection, MapSection
} from '../components/Components.js';

export class HomePage extends Component {
    render() {
        const eventLink = new LinkComponent({ href: "/event", text: "Evenements" });
        const spotLink = new LinkComponent({ href: "/spot", text: "Spots" });
        const TitleElement = new TitleComponent({ text: "Explorer les sites" });
        const mainElement = new MainComponent();
        const mapElement = new MapSection();
        const footerElement = new FooterSection();

        return {
            tag: "div",
            children: [
                mainElement.render(),
                TitleElement.render(),
                mapElement.render(),
                footerElement.render(),
            ]
        };
    }
}

export default function renderHomePage() {
    const homePage = new HomePage();
    return Render.createElement(homePage.render());
}
