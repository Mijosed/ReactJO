import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';

import {
    LinkComponent,
    TitleComponent, ErrorComponent
} from '../components/Components.js';


export class ErrorPage extends Component {
    render() {
        const errorComponent = new ErrorComponent();
        return {
            tag: "div",
            children: [
                errorComponent.render(),
            ]
        };
    }
}

export default function renderErrorPage() {
    const errorPage = new ErrorPage();
    return Render.createElement(errorPage.render());
}
