import { Component } from '../../core/Component.js';
import { validateProps } from '../../utils/typeCheck.js';

export class LinkComponent extends Component {
    constructor(props) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                href: { type: 'string' },
                text: { type: 'string' }
            }
        };
        validateProps(props, propSchema);
        this.href = props.href;
        this.text = props.text;
    }

    render() {
        return {
            tag: "a",
            props: { href: this.href },
            children: [this.text]
        };
    }
}
