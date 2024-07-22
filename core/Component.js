import { Render } from "./Render";

export class Component {
  #container;
  #rerenderEvent;
  #structure;
  constructor({ container, rerenderEvent = "rerender" }) {
    if (new.target === Component) {
      throw new TypeError("Component is an abstract class");
    }
    this.#container = container;
    this.#rerenderEvent = rerenderEvent;
    this.#structure = {};

    this.#container.addEventListener(this.#rerenderEvent, (event) => {
      debugger;
      this.display(event.detail.newSrc);
    });
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
