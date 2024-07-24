export class Render {
  static createElement(component) {
      if (component === null || component === undefined) {
          throw new Error("Invalid component: component is null or undefined");
      }

      if (typeof component === "string") {
          return document.createTextNode(component);
      }

      if (typeof component === "object" && component.tag) {
          const { tag, props, children } = component;
          const elem = document.createElement(tag);

          if (props && Object.keys(props).length > 0) {
              for (const [key, value] of Object.entries(props)) {
                  if (/^on[A-Z]/.test(key)) {
                      elem.addEventListener(key.slice(2).toLowerCase(), value);
                  } else if (/^data[A-Z]/.test(key)) {
                      elem.dataset[key.slice(4).toLowerCase()] = JSON.stringify(value);
                  } else if (key === 'style' && typeof value === 'object') {
                      Object.assign(elem.style, value);
                  } else {
                      elem.setAttribute(key, value);
                  }
              }
          }

          if (children && Array.isArray(children)) {
              for (const child of children) {
                  elem.appendChild(Render.createElement(child));
              }
          } else if (children) {
              elem.appendChild(Render.createElement(children));
          }

          if (typeof component.afterRender === "function") {
              setTimeout(() => component.afterRender(), 0);
          }

          return elem;
      }

      if (Array.isArray(component)) {
          const fragment = document.createDocumentFragment();
          component.forEach((child) => {
              fragment.appendChild(Render.createElement(child));
          });
          return fragment;
      }

      if (typeof component === "object" && component.render) {
          return Render.createElement(component.render());
      }

      console.error("Invalid component passed to createElement:", component);
      throw new Error(`Invalid component passed to createElement: ${component}`);
  }

  static render(component, root) {
      if (!root) {
          throw new Error("Root element is null or undefined");
      }

      root.innerHTML = "";
      root.appendChild(Render.createElement(component));
  }
}
