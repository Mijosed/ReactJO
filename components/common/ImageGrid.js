import { Component } from '../../core/Component_old.js';
import { validateProps } from '../../utils/utils.js';

export class ImageGrid extends Component {
    constructor(props = {}) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                images: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            src: { type: 'string' },
                            alt: { type: 'string' }
                        },
                        required: ['src', 'alt']
                    }
                }
            },
            required: ['images']
        };
        validateProps(props, propSchema);

        this.images = props.images;
    }

    render() {
        return {
            tag: "div",
            props: { class: "grid grid-cols-6 gap-4 p-4 mx-40" },
            children: this.images.map(image => ({
                tag: "div",
                props: { class: "overflow-hidden rounded-lg" },
                children: [
                    {
                        tag: "img",
                        props: {
                            src: image.src,
                            alt: image.alt,
                            class: "w-full h-full object-cover"
                        },
                        children: []
                    }
                ]
            }))
        };
    }
}
