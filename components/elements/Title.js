import { Component } from '../../core/Component.js';

export class Title extends Component {
    render() {
        const { text } = this.props;
        return {
            tag: "div",
            props: { class: "page-title" },
            children: [
                {
                    tag: "p", props: { class: "title-value" }, children: [text]
                }
            ]
        };
    }
}
