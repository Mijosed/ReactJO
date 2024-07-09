import { Component } from '../core/Component.js';

export class HeaderComponent extends Component {
    render() {
        return {
            tag: "header",
            props: { class: "header-container" },
            children: [
                {
                    tag: "div",
                    props: {},
                    children: [
                        {
                            tag: "div", props: { class: "logo-container" }, children: [
                                { tag: "img", props: { src: "../assets/images/Logo.svg", alt: "logo", class: "logo-container" } },
                            ]
                        },
                        {
                            tag: "div", props: { class: "section-buttons" }, children: [
                                { tag: "button", props: { type: "button", class: "bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" }, children: ["Explorez les sites des JO"] },
                                { tag: "button", props: { type: "button", class: "bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" }, children: ["Découvrez les disciplines"] },
                            ]
                        },
                        {
                            tag: "div", props: { class: "simple-text" }, children: [
                                { tag: "p", props: { id: "disciplines" }, children: ["Vivez l'esprit des Jeux Olympiques Profitez d'une période exaltante remplie de sport et de passion."] }
                            ],
                        },

                    ]
                }
            ]
        };
    }
}
