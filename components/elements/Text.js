import { Component } from '../../core/Component.js';

export class Text extends Component {
    constructor(props) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                text: { type: 'string' }
            }
        };
        validateProps(props, propSchema);
        this.text = props.text;
    }
    render() {
        const { text } = this.props;
        return {
            tag: "p",
            props: { class: "simple-text marge-top marge-bloc" },
            children: [text]
        };
    }
}
