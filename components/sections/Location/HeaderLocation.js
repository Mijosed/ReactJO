import { Component } from '../../../core/Component.js';
import { validateProps } from '../../../utils/typeCheck.js';

export class HeaderLocation extends Component {
    constructor(props = {}) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                title: { type: 'string' },
                subtitle: { type: 'string' },
                city: { type: 'string' }
            },
            required: ['title', 'subtitle', 'city']
        };
        try {
            validateProps(props, propSchema);
        } catch (error) {
            console.log("Invalid props for HeaderLocation:", props, error);
        }

        this.title = props.title;
        this.subtitle = props.subtitle;
        this.city = props.city;
    }

    render() {
        console.log("Rendering HeaderLocation with title:", this.title);
        return {
            tag: "header",
            props: { class: "relative w-full h-96 bg-cover bg-center background-image", style: "background-image: url('../../../assets/images/background-lieu.png');" },
            children: [
                /*{
                    tag: "button",
                    props: { type: "button", id: "menu", style: "pointer-events: auto; position: relative; z-index: 1000;", onClick: this.toggleMenu },
                    children: [
                        {
                            tag: "img",
                            props: { src: "../../assets/images/icon-menu.svg", alt: "menu", class: "h-10 w-10 menu-mobil-height m-4", style: "margin: 10px;" },
                            children: []

                        }
                    ]
                },*/
                {
                    tag: "div",
                    props: { style:"padding-left:50px; padding-bottom: 25px;",class: "absolute inset-0 flex flex-col items-start justify-end bg-black bg-opacity-50" },
                    children: [
                        {
                            tag: "img",
                            props: { src: "../../assets/images/Logo.svg", alt: "Logo", class: "h-22 w-22 mb-[6%] logo-mobil-height" },
                            children: []
                        },
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
                                {
                                    tag: "img",
                                    props: {
                                        src: "../assets/icons/position.svg",
                                        alt: "Position Icon",
                                        class: "w-6 h-6 mr-2"
                                    },
                                    children: []
                                },
                                {
                                    tag: "span",
                                    props: {class: "font-olympicSans text-lg"},
                                    children: [this.city]
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
}
