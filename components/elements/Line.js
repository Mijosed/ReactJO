import { Component } from '../../core/Component.js';

export class Line extends Component {
    render() {
        return {
            tag: "hr",
            props: { class: "custom-line" },
            children: []
        };
    }
}
