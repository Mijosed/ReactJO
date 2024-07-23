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
        console.log("salut copain");
        //this.#rerenderEvent(event.detail.newSrc);
      });
    }
  }
  setContainer(container) {
    this.#container = container;
  }
  addEventListener(event, callback) {
    this.#container.addEventListener(event, callback);
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
