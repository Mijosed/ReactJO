import { Component } from '../../core/Component_old.js';
import { validateProps } from '../../utils/utils.js';

export class Anchor extends Component {
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
            props: { href: this.href, class: "text-blue-500 hover:underline" },
            children: [this.text]
        };
    }
}
