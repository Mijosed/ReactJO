import { Component } from '../../../core/Component.js';
import { MenuBurger } from "../../Components.js";
import { validateProps } from '../../../utils/typeCheck.js';


export class HeaderSport extends Component {
    constructor(props = {}) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                title: { type: 'string' },
                subtitle: { type: 'string' },
                city: { type: 'string' },
                backgroundImage: { type: 'string' }
            }
        };
        validateProps(props, propSchema);

        this.title = props.title;
        this.subtitle = props.subtitle;
        this.city = props.city;

        this.backgroundImage = props.backgroundImage;

        this.menuBurger = new MenuBurger();

        // Bind the toggleMenu method
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(event) {
        if (event) event.preventDefault();
        this.menuBurger.toggleMenu();
        this.update(); // Ensure this method triggers a re-render
    }


    render() {
        return {
            tag: "header",
            props: { class: "relative w-full h-96 bg-cover bg-center background-image", style: `background-image: url('${this.backgroundImage}');` },
            children: [
                {
                    tag: "button",
                    props: { type: "button", id: "menu", style: "pointer-events: auto; position: relative; z-index: 1000;", onClick: this.toggleMenu },
                    children: [
                        {
                            tag: "img",
                            props: { src: "../../assets/images/icon-menu.svg", alt: "menu", class: "h-10 w-10 menu-mobil-height m-4", style: "margin: 10px;" }
                        }
                    ]
                },
                {
                    tag: "img",
                    props: { src: "/assets/images/Logo-colore.png", alt: "Logo", class: "h-22 w-22  absolute left-[80%] top-[5%]" }
                },
                {
                    tag: "img",
                    props: { src: "/assets/images/Logo.svg", alt: "Logo", class: "h-22 w-22 mb-[6%] logo-mobil-height" }
                },
                {
                    tag: "div",
                    props: { style: "padding-left:50px; padding-bottom: 25px;", class: "absolute inset-0 flex flex-col items-start justify-end bg-black bg-opacity-50" },
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
                                {
                                    tag: "p",
                                    props: { class: "text-lg text-gray-400" },
                                    children: [this.city]
                                }
                            ]

                        }
                    ]
                },
                this.menuBurger.render() // Ensure MenuBurger is rendered correctly
            ]
        };
    }
}
