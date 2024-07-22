import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import { FetchTestComponent } from '../components/FetchTestComponent.js';

export class TestPage extends Component {
    render() {
        const fetchTestElement = new FetchTestComponent();

        return {
            tag: "div",
            props: {},
            children: [
                fetchTestElement.render(),
            ]
        };
    }
}

export default function renderTestPage() {
    const testPage = new TestPage();
    return Render.createElement(testPage.render());
}
