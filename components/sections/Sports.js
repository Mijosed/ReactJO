import { Component } from '../../core/Component.js';
import { SportComponent } from '../common/SportComponent.js';

export class Sports extends Component {
    render() {
        const sportComponent = new SportComponent();
        return {
            tag: "section",
            props: { id: "sports", class: "sports-container" },
            children: [
                sportComponent.render(),
                sportComponent.render(),
                sportComponent.render(),
                sportComponent.render()
            ]
        };
    }
}
