import { Component } from '../../core/Component.js';
import { validateProps } from '../../utils/utils.js';

export class Breadcrumb extends Component {
    constructor(props = {}) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                items: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            label: { type: 'string' },
                            href: { type: 'string' }
                        },
                        required: ['label', 'href']
                    }
                }
            },
            required: ['items']
        };
        validateProps(props, propSchema);

        this.items = props.items;
    }

    render() {
        return {
            tag: "nav",
            props: { class: " flex items-center text-sm text-gray-600 my-4 mx-40 mobil-margin" },
            children: this.items.map((item, index) => [
                {
                    tag: "a",
                    props: {
                        href: item.href,
                        class: "font-olympicSans hover:underline"
                    },
                    children: [item.label]
                },
                index < this.items.length - 1
                    ? {
                        tag: "span",
                        props: { class: "mx-2" },
                        children: [">"]
                    }
                    : null
            ]).flat().filter(Boolean) // Filter out null values
        };
    }
}
