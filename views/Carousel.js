import { Component } from "../core/Component.js";
export class Carousel extends Component {
  #images;
  #currentIndex;
  state = {
    imagesUrl: "",
  };

  constructor({ container, images = [] }) {
    super({ container });
    this.#images = images;
    this.#currentIndex = 0;
    this.initStructure(this.render());
    this.state.imagesUrl = this.#images[this.#currentIndex];
  }
  showPreviousImage() {
    this.#currentIndex = (this.#currentIndex - 1 + this.#images.length) % this.#images.length;
    const newProps = this.render();
    this.display(newProps);
  }

  showNextImage() {
    console.log("click");
    this.#currentIndex = (this.#currentIndex + 1) % this.#images.length;
  }

  display(newProps) {
    this.newStruture = newProps;
    super.shouldUpdate();
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
