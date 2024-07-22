import { Render } from "./Render.js";

export class Component {
  #container;
  #rerenderEvent;
  #structure;
  constructor({ container = document.getElementById("root"), rerenderEvent = "rerender" }) {
    if (new.target === Component) {
      throw new TypeError("Component is an abstract class");
    }
    this.#container = container;
    this.#rerenderEvent = rerenderEvent;
    this.#structure = {};

    this.#container.addEventListener(this.#rerenderEvent, (event) => {
      this.#rerenderEvent(event.detail.newSrc);
    });
  }
  setRerenderEvent(event) {
    this.#rerenderEvent = event;
  }

  shouldUpdate(newProps) {
    return JSON.stringify(this.props) !== JSON.stringify(newProps);
  }

  setRerenderEvent(event) {
    this.#rerenderEvent = event;
  }

  render() {
    Render.createElement(this.#structure);
    Render.render(this.#structure, this.#container);
  }

  display(newProps = this.props) {
    if (this.shouldUpdate(newProps)) {
      this.oldProps = this.props;
      this.props = newProps;
      return this.render();
    }
    return this.render();
  }

  getContainer() {
    return this.#container;
  }
}
