import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';

import {
    LinkComponent,
    TitleComponent, FooterSection, MapSection
} from '../components/Components.js';


export class EventPage extends Component {
    render() {

        const TitleElement = new TitleComponent({ text: "Event pages" });
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

export default function renderEventPage() {
    const eventPage = new EventPage();
    return Render.createElement(eventPage.render());
}
