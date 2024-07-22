import { Component } from '../../core/Component.js';
import { validateProps } from '../../utils/utils.js';

export class Title extends Component {
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
            tag: "h1",
            props: { class: "text-3xl font-bold text-center my-4" },
            children: [this.text]
        };
    }
}
