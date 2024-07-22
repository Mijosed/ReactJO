import { validateProps } from "../utils/typeCheck.js";
import { Component } from "../core/";
export class Carousel extends Component {
  #currentIndex;
  #imageState;
  #images;
  constructor(props) {
    super(props);
    const propSchema = {
      type: "object",
      properties: {
        images: { type: "array" },
        title: { type: "string" },
      },
    };
    validateProps(props, propSchema);
    this.#currentIndex = 0;
    this.#images = props.images;
    this.#imageState = {
      images: this.#images[this.#currentIndex],
      title: props.title,
    };
  }

  render() {
    return {
      tag: "div",
      props: {
        class: "image-container",
      },
      children: [
        {
          tag: "button",
          props: {
            class: "carousel-button",
            onClick: () => this.showPreviousImage(),
          },
          children: ["<"],
        },
        {
          tag: "img",
          props: {
            src: this.#images[this.currentIndex],
            alt: "carousel image",
          },
        },
        {
          tag: "button",
          props: {
            class: "carousel-button",
            onClick: () => this.showNextImage(),
          },
          children: [">"],
        },
      ],
    };
  }
}
