import { Component } from "../../core/Component.js";
import { validateProps } from "../../utils/utils.js";

export class Card extends Component {
  #id;
  #nom;
  #description;
  #image;

  constructor(props) {
    super((props = { ...props, container: document.querySelector(`[data-cardId="${props.id}"]`) }));

    const propSchema = {
      type: "object",
      properties: {
        id: { type: "string" },
        nom: { type: "string" },
        description: { type: "string" },
        image: { type: "string" },
      },
    };
    this.#id = props.id;
    this.#nom = props.nom;
    this.#description = props.description;
    this.#image = props.image;
    validateProps(props, propSchema);
  }

  render() {
    return {
      tag: "div",
      props: { class: "rounded-lg overflow-hidden shadow-lg ", dataCardId: "id" },
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
              props: { class: "absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2" },
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
              props: { href: `/${this.#id}`, class: "text-blue-500 hover:underline float-right" },
              children: ["En savoir plus"],
            },
          ],
        },
      ],
    };
  }
}
