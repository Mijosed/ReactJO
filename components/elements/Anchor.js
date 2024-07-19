import { Component } from '../../core/Component.js';

export class Anchor extends Component {
    render() {
        const { href, text } = this.props;
        return {
            tag: "a",
            props: { href },
            children: [text]
        };
    }
}
