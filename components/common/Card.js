import { Component } from '../../core/Component.js';
import { validateProps } from '../../utils/utils.js';

export class Card extends Component {
    constructor(props) {
        super(props);

        const propSchema = {
            type: 'object',
            properties: {
                id: { type: 'string' },
                nom: { type: 'string' },
                description: { type: 'string' },
                image: { type: 'string' }
            }
        };

        validateProps(props, propSchema);
    }

    render() {
        const { id, nom, description, image } = this.props;

        return {
            tag: "div",
            props: { class: "rounded-lg overflow-hidden shadow-lg" },
            children: [
                {
                    tag: "div",
                    props: { class: "relative h-48" },
                    children: [
                        {
                            tag: "img",
                            props: { src: image, alt: nom, class: "w-full h-full object-cover" }
                        },
                        {
                            tag: "div",
                            props: { class: "absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2" },
                            children: [nom]
                        }
                    ]
                },
                {
                    tag: "div",
                    props: { class: "p-4" },
                    children: [
                        {
                            tag: "p",
                            props: { class: "text-gray-700 text-base" },
                            children: [description]
                        },
                        {
                            tag: "a",
                            props: { href: `/${id}`, class: "text-blue-500 hover:underline float-right" },
                            children: ["En savoir plus"]
                        }
                    ]
                }
            ]
        };
    }
}
