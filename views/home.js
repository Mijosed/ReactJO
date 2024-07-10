import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import {
    LinkComponent,
    TextComponent,
    MainComponent,
    TitleComponent, FooterSection, MapSection, SportSection, SearchComponent, ModalSection
} from '../components/Components.js';

export class HomePage extends Component {
    render() {
        const eventLink = new LinkComponent({ href: "/event", text: "Evenements" });
        const spotLink = new LinkComponent({ href: "/spot", text: "Spots" });
        const TitleElement = new TitleComponent({ text: "Explorer les sites" });
        const mainElement = new MainComponent();
        const mapElement = new MapSection();
        const title2Element = new TitleComponent({ text: "Les différents sports présents lors des JO" });
        const searchElement = new SearchComponent();
        const sportElement = new SportSection();
        const footerElement = new FooterSection();
        //const modalElement = new ModalSection();


        return {
            tag: "div",
            children: [
                mainElement.render(),
                TitleElement.render(),
                mapElement.render(),
                title2Element.render(),
                searchElement.render(),
                sportElement.render(),
                footerElement.render(),
                //modalElement.render(),
            ]
        };
    }
}

export default function renderHomePage() {
    const homePage = new HomePage();
    return Render.createElement(homePage.render());
}






