import { Component } from '../../core/Component.js';

export class Text extends Component {
    render() {
        const { text } = this.props;
        return {
            tag: "p",
            props: { class: "simple-text marge-top marge-bloc" },
            children: [text]
        };
    }
}
