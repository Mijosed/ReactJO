import { Component } from "../core/Component.js";
import { validateProps } from "../utils/typeCheck.js";

export class Carousel extends Component {
  #images;
  #currentIndex;
  #imageState;

  constructor(props) {
    super(props);
    const propSchema = {
      type: "object",
      properties: {
        images: { type: "array" },
        container: { type: "HTMLElement" },
      },
    };
    validateProps(props, propSchema);
    this.#currentIndex = 0;
    this.#images = props.images;
    this.#imageState = this.#images[this.#currentIndex];
    this.setRerenderEvent("rerender");
  }

  showPreviousImage() {
    this.#currentIndex = (this.#currentIndex - 1 + this.#images.length) % this.#images.length;
    this.dispatchImageChangedEvent();
  }

  showNextImage() {
    this.#currentIndex = (this.#currentIndex + 1) % this.#images.length;
    this.dispatchImageChangedEvent();
  }

  dispatchImageChangedEvent() {
    const newSrc = this.#images[this.#currentIndex];
    if (newSrc !== this.#imageState) {
      this.#imageState = newSrc;
      const event = new CustomEvent("rerender", { detail: { newSrc: this.#imageState } });
      this.getContainer().dispatchEvent(event);
    }
  }

  updateImageSrc(newSrc) {
    const imageContainer = this.getContainer().querySelector(".image-container img");
    if (imageContainer && imageContainer.src !== newSrc) {
      imageContainer.src = newSrc;
    }
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
            src: this.#images[this.#currentIndex],
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
