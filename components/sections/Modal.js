import { Component } from '../../core/Component.js';
import { ModalComponent } from '../common/ModalComponent.js';

export class ModalSection extends Component {
    render() {
        const modalComponent = new ModalComponent();
        return {
            tag: "section",
            props: { id: "modal", class: "modal-container" },
            children: [
                modalComponent.render()
            ]
        };
    }
}
