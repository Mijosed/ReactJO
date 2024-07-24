import { Component } from '../../core/Component_old.js';
import { validateProps } from '../../utils/utils.js';
import { Title } from '../Components.js';
export class TitleLine extends Component {
    constructor(props) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                title: { type: 'string' }
            }
        };
        validateProps(props, propSchema);
        this.title = props.title;
        this.titleElement = new Title({ text: this.title });
    }
    render() {
        return {
            tag: "div",
            props: { id: this.title, class: "mx-40 my-5" },
            children: [
                this.titleElement.render(),
                {
                    tag: "hr",
                    props: { class: "border-2 border-black" }
                }
            ]
        };
    }
}
