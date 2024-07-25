import { Component } from '../../../core/Component.js';
import { validateProps } from '../../../utils/typeCheck.js';

export class HeaderSport extends Component {
    constructor(props = {}) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                title: { type: 'string' },
                subtitle: { type: 'string' },
                city: { type: 'string' }
            }
        };
        validateProps(props, propSchema);

        this.title = props.title;
        this.subtitle = props.subtitle;
        this.city = props.city;
    }

    render() {

        return {
            tag: "header",
            props: { class: "relative w-full h-96 bg-cover bg-center background-image", style: "background-image: url('../../../assets/images/background-sport.png');" },
            children: [
                {
                    tag: "div",
                    props: { style:"padding-left:50px; padding-bottom: 25px;", class: "absolute inset-0 flex flex-col items-start justify-end bg-black bg-opacity-50" },
                    children: [
                        {
                            tag: "h1",
                            props: { class: "text-9xl font-bold text-white" },
                            children: [this.title]
                        },
                        {
                            tag: "p",
                            props: { class: "font-olympicSans text-lg text-gray-400" },
                            children: [this.subtitle]
                        },
                        {
                            tag: "div",
                            props: { class: "flex items-center text-white" },
                            children: [

                            ]
                        }
                    ]
                }
            ]
        };
    }
}
