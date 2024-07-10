import { Component } from '../core/Component.js';

export class CardComponent extends Component {
    constructor(id, nom, description, tag) {
        super();
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.tag = tag;
    }

    render() {
        return {
            tag: "div",
            props: {
                class: "card"
            },
            children: [
                {
                    tag: "img",
                    props: {
                        src: `../assets/images/natation.png`,
                        //src: `../assets/images/${this.nom.toLowerCase()}.png`,
                        alt: "Card Image",
                        class: "card-img"
                    }
                },
                {
                    tag: "p",
                    props: { class: "title-value" },
                    children: [this.nom]
                },
                {
                    tag: "p",
                    props: {
                        class: "simple-text card-description"
                    },
                    children: [this.description]
                },
                {
                    tag: "a",
                    props: {
                        href: `/${this.tag}?id=${this.id}`,
                        class: "card-link simple-text"
                    },
                    children: ["En savoir plus"]
                }
            ]
        };
    }
}
