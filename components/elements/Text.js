import { Component } from '../../core/Component.js';
import { validateProps } from '../../utils/utils.js';

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
        return {
            tag: "p",
            props: { class: "font-olympicSans simple-text marge-top marge-bloc mx-40 mb-10" },
            children: [this.text]
        };
    }
}
