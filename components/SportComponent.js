import { Component } from '../core/Component.js';
import { CardComponent } from "./CardComponent.js";

export class SportComponent extends Component {
    render() {
        const cardComponent = new CardComponent("id", "nom", "description");
        return {
            tag: "div",
            props: {},
            children: [
                cardComponent.render()
            ]
        };
    }


}