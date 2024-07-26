import { Component } from '../../../core/Component.js';
import { validateProps } from '../../../utils/typeCheck.js';

export class Thumbnail extends Component {
    constructor(props = {}) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                id: { type: 'string' },
                title: { type: 'string' },
                image: { type: 'string' },
                onClick: { type: 'function' }
            },
            required: ['id', 'title', 'image', 'onClick']
        };

        validateProps(props, propSchema);
        this.props = props;
    }

    render() {
        return {
            tag: "div",
            props: {
                class: "relative rounded-lg shadow-lg overflow-hidden cursor-pointer w-full",
                onclick: this.props.onClick
            },
            children: [
                {
                    tag: "img",
                    props: {
                        src: this.props.image,
                        class: "w-full h-48 object-cover rounded-lg",
                        alt: this.props.title
                    },
                    children: []
                },
                {
                    tag: "div",
                    props: {
                        class: "absolute bottom-0 left-0 p-2 text-white",
                        style: "background: rgba(0, 0, 0, 0.5); width: 100%;"
                    },
                    children: [
                        {
                            tag: "span",
                            props: { class: "text-lg font-bold" },
                            children: [this.props.title]
                        }
                    ]
                }
            ]
        };
    }
}
