import { Component } from '../../core/Component.js';

export class ModalComponent extends Component {
    render() {
        return {
            tag: "div",
            props: { class: "modal" },
            children: [
                {
                    tag: "div",
                    props: { class: "modal-content" },
                    children: [
                        {
                            tag: "span",
                            props: { class: "close" },
                            children: ["×"]
                        },
                        {
                            tag: "p",
                            props: {},
                            children: ["Some text in the Modal.."]
                        }
                    ]
                }
            ]
        };
    }
}
