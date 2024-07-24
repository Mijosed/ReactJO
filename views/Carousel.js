import { Component } from "../core/Component.js";
export class Carousel extends Component {
  #images;
  #currentIndex;


  constructor({ container, images = [] }) {
    super({ container });
    this.#images = images;
    this.#currentIndex = 0;
    this.initStructure(this.render());
  }
  showPreviousImage() {
    console.log("show previous image"); 
    this.#currentIndex = (this.#currentIndex - 1 + this.#images.length) % this.#images.length;
    const newProps = this.render();
    const event = new CustomEvent("rerender", {
      detail: {
        newProps,
      },
    });
    this.getContainer().dispatchEvent(event);
  }

  showNextImage() {
    console.log("show next image");
    this.#currentIndex = (this.#currentIndex + 1) % this.#images.length;
    const newProps = this.render();
    const event = new CustomEvent("rerender", {
      detail: {
        newProps,
      },
    });
    
    this.getContainer().dispatchEvent(event);
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
          children: [],
        },
        {
          tag: "h1",
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
