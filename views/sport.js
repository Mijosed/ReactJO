import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';

import {
    LinkComponent,
    TitleComponent, FooterSection, MapSection
} from '../components/Components.js';


export class SpotPage extends Component {
    render() {

        const TitleElement = new TitleComponent({ text: "Spot pages" });
        const homeLink = new LinkComponent({ href: "/", text: "home" });
        return {
            tag: "div",
            children: [
                TitleElement.render(),
                homeLink.render(),
            ]
        };
    }
}

export default function renderSpotPage() {
    const spotPage = new SpotPage();
    return Render.createElement(spotPage.render());
}
