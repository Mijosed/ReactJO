import { Component } from '../core/Component.js';

/*export class CardComponent extends Component {
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
                        src: "../assets/images/natation.png",
                        alt: "Card Image",
                        class: "card-img"
                    }
                },
                {
                    tag: "p", props: {class: "title-value"}, children: ["Natation"]
                },
                {
                    tag: "p",
                    props: {
                        class: "simple-text card-description"
                    },
                    children: ["La naissance de la natation remonte à la préhistoire, mais il faut attendre le 19e siècle pour que sa pratique devienne compétitive....."]
                },
                {
                    tag: "a",
                    props: {
                        href: "/sport?id=",
                        class: "card-link simple-text"
                    },
                    children: ["En savoir plus"]
                }
            ]
        };
    }
}*/


export class CardComponent extends Component {
    constructor(id, nom, description) {
        super();
        this.id = id;
        this.nom = nom;
        this.description = description;
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
                        src: `../assets/images/${this.nom.toLowerCase()}.png`,
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
                        href: `/sport?id=${this.id}`,
                        class: "card-link simple-text"
                    },
                    children: ["En savoir plus"]
                }
            ]
        };
    }
}
