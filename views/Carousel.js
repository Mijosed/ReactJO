import { validateProps } from "../utils/typeCheck.js";
import { Component } from "../core/Component.js";
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
    this.#imageState = {
      images: props.images,
      title: props.title,
    };
    this.#images = this.#imageState.images

  }

  render() {
    return {
      tag: "div",
      children: ["hello carrousel"],
    };
  }
}
