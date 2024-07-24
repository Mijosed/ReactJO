import { Component } from '../../core/Component.js';

export class Footer extends Component {
    constructor(props = {}) {
        super(props);
    }
    render() {
        return {
            tag: "footer",
            props: { class: "footer-container bg-black text-white" },
            children: [
                {
                    tag: "div",
                    props: { class: "align-footer" },
                    children: [
                        {
                            tag: "div", props: { class: "image-mascotte" }, children: [
                                { tag: "img", props: { src: "../assets/images/Logo.svg", alt: "logo", class: "logo-img" } }
                            ]
                        },
                        {
                            tag: "div", props: { class: "text-center" }, children: [
                                { tag: "p", props: { class: "simple-text" }, children: ["Explorer les Sites des JO"] },
                                { tag: "p", props: { class: "simple-text" }, children: ["Découvrir les Disciplines"] },
                                { tag: "p", props: { class: "simple-text" }, children: ["© 2024 ReactJo. Tous droits réservés"] }
                            ]
                        },
                        {
                            tag: "div", props: { class: "image-mascotte" }, children: [
                                { tag: "img", props: { src: "../assets/images/mascot.svg", alt: "logo", class: "logo-img" } }
                            ]
                        },
                    ]
                }
            ]
        };
    }
}
