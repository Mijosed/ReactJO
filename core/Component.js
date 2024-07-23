import { Render } from "./Render.js";

export class Component {
  #container;
  #rerenderEvent;
  #structure;
  #event;
  constructor({ container = null, rerenderEvent = "rerender" }) {
    if (new.target === Component) {
      throw new TypeError("Component is an abstract class");
    }
    this.#container = container;
    this.#rerenderEvent = rerenderEvent;
    this.#structure = {};
    if (this.#container !== null) {
      this.#container.addEventListener(this.#rerenderEvent, (event) => {
        this.display(event.detail.newProps);
      });
    }
  }
  setContainer(container) {
    this.#container = container;
  }

  setRerenderEvent(event) {
    this.#event = event;
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
  }

  getContainer() {
    return this.#container;
  }
}
