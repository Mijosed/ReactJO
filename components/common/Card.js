import { Component } from "../../core/Component.js";
import { validateProps } from "../../utils/utils.js";

export class Card extends Component {
  #id;
  #nom;
  #description;
  #image;
  #gradientColor;

  constructor(props) {
    super(props);

    const propSchema = {
      type: "object",
      properties: {
        id: { type: "string" },
        nom: { type: "string" },
        description: { type: "string" },
        image: { type: "string" },
        gradientColor: { type: "string"}
      },
    };
    this.#id = props.id;
    this.#nom = props.nom;
    this.#description = props.description;
    this.#image = props.image;
    this.#gradientColor = props.gradientColor;
    validateProps(props, propSchema);
  }

  render() {
    return {
        tag: "div",
      props: { class: "rounded-lg overflow-hidden shadow-lg", dataCardId: "id" },
        children: [
            {
                tag: "div",
                props: { class: "relative h-48" },
                children: [
                    {
                        tag: "img",
                        props: { src: this.#image, alt: this.#nom, class: "w-full h-full object-cover" },
                    },
                    {
                        tag: "div",
                        props: {
                            class: "absolute inset-0 " + (this.#gradientColor === "blue" ? "bg-gradient-to-b-custom-blue" : "bg-gradient-to-b-custom-red"),
                        },
                    },
                    {
                        tag: "div",
                        props: { class: "absolute bottom-0 left-0 text-white text-3xl p-2" },
                        children: [this.#nom],
                    },
                ],
            },
            {
                tag: "div",
                props: { class: "p-4" },
                children: [
                    {
                        tag: "p",
                        props: { class: "text-gray-700 text-base" },
                        children: [this.#description],
                    },
                    {
                        tag: "a",
                        props: { href: `/sports?id=${this.#id}`, class: "text-blue-500 hover:underline float-right p-4" },
                        children: ["En savoir plus"],
                    },
                ],
            },
        ],
    };
}
}
