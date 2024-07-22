import { Component } from "../core/Component.js";
export class Carousel extends Component {
  #images;
  #currentIndex;
  #imageState;

  constructor({ container, images = [] }) {
    super({ container });
    this.#images = images;
    this.#currentIndex = 0;
    this.#imageState = this.#images[this.#currentIndex];
  }
  showPreviousImage() {
    console.log("click");

    this.#currentIndex = (this.#currentIndex - 1 + this.#images.length) % this.#images.length;
    this.dispatchImageChangedEvent();
  }

  showNextImage() {
    console.log("click");
    this.#currentIndex = (this.#currentIndex + 1) % this.#images.length;
    this.dispatchImageChangedEvent();
  }
  dispatchImageChangedEvent() {
    const newSrc = this.#images[this.#currentIndex];
    this.setRerenderEvent();
    if (newSrc !== this.#imageState) {
      this.#imageState = newSrc;
      const event = new CustomEvent("rerender", { detail: { newSrc: this.#imageState } });
      this.getContainer().dispatchEvent(event);
    }
  }
  setRerenderEvent() {
    super.setRerenderEvent(this.updateImageSrc);
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