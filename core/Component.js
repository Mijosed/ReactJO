import { Render } from "./Render.js";

export class Component {
  constructor(props = {}) {
      this.props = props;
      this.state = {};
  }

  setState(newState) {
      this.state = { ...this.state, ...newState };
      this.update();
  }

  update() {
      const root = document.getElementById(this.props.id || 'root');
      if (root) {
          root.innerHTML = '';
          root.appendChild(this.renderDOM());
      }
  }

  renderDOM() {
      const element = this.render();
      return this.createElement(element);
  }

  createElement(element) {
      if (typeof element === "string") {
          return document.createTextNode(element);
      }

      if (typeof element === "object" && element.tag) {
          const { tag, props, children } = element;
          const domElement = document.createElement(tag);

          if (props) {
              for (const [key, value] of Object.entries(props)) {
                  if (key.startsWith('on') && typeof value === 'function') {
                      domElement.addEventListener(key.substring(2).toLowerCase(), value);
                  } else if (key === 'style' && typeof value === 'object') {
                      Object.assign(domElement.style, value);
                  } else {
                      domElement.setAttribute(key, value);
                  }
              }
          }

          if (children) {
              children.forEach(child => domElement.appendChild(this.createElement(child)));
          }

          return domElement;
      }

      if (typeof element === "object" && element.render) {
          return this.createElement(element.render());
      }

      throw new Error(`Invalid element passed to createElement: ${element}`);
  }

  render() {
      throw new Error('Render method should be implemented by subclass');
  }
}
