import { Component } from '../../../core/Component.js';
import { validateProps } from '../../../utils/typeCheck.js';

export class Card extends Component {
    constructor(props = {}) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                id: { type: 'string' },
                nom: { type: 'string' },
                description: { type: 'string' },
                image: { type: 'string' },
                lien: { type: 'string' },
            },
            required: ['id', 'nom', 'description', 'image', 'onClick']
        };
        
        validateProps(props, propSchema);
        this.props = props;
    }

    render() {
        return {
            tag: "div",
            props: { class: "rounded-lg shadow-lg overflow-hidden", onclick: this.props.onClick },
            children: [
                {
                    tag: "div",
                    props: { class: "relative" },
                    children: [
                        {
                            tag: "img",
                            props: {
                                src: this.props.image,
                                class: "w-full h-48 object-cover",
                                alt: this.props.nom
                            },
                            children: []
                        },
                        {
                            tag: "div",
                            props: { class: "absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2" },
                            children: [this.props.nom]
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
                            children: [this.props.description]
                        },
                        {
                            tag: "a",
                            props: {
                                class: "text-blue-500 hover:text-blue-700 text-sm",
                                href: this.props.lien
                            },
                            children: ["En savoir plus"]
                        }
                    ]
                }
            ]
        };
    }
}
