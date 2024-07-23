import { Render } from "./Render.js";

export class Component {
  #container;
  #rerenderEvent;
  #oldStructure;
  newStruture;
  constructor({ container = null, rerenderEvent = "rerender" }) {
    this.state = {};
    if (new.target === Component) {
      throw new TypeError("Component is an abstract class");
    }
    this.#container = container;
    this.#rerenderEvent = rerenderEvent;
    if (this.#container !== null) {
      this.#container.addEventListener(this.#rerenderEvent, (event) => {
        this.display(event.detail.newProps);
      });
    }
  }
  initStructure(structure) {
    this.newStruture = structure;
    this.#oldStructure = structure;
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.#container.dispatchEvent(new CustomEvent(this.#rerenderEvent, { detail: { newProps: this.state } }));
  }
  setContainer(container) {
    this.#container = container;
  }

  shouldUpdate(old) {
    if(){

    }
    
  }
  setNewStructure(structure) {
    this.newStruture = structure;
  }
  setRerenderEvent(event) {
    this.#rerenderEvent = event;
  }

  display() {
    
  }

  getContainer() {
    return this.#container;
  }
}
