import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';

import {
    LinkComponent,
    TitleComponent, FooterSection, MapSection
} from '../components/Components.js';


export class ErrorPage extends Component {
    render() {

        const TitleElement = new TitleComponent({ text: "Error pages" });
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

export default function renderErrorPage() {
    const errorPage = new ErrorPage();
    return Render.createElement(errorPage.render());
}
