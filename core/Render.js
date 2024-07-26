export class Render {
  static createElement(component) {
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
          } else {
            elem.setAttribute(key, value);
          }
        }
      }

      if (children && Array.isArray(children)) {
        for (const child of children) {
          if (child === null || child === undefined) {
            console.log("Invalid child component:", child);
            
          }
          elem.appendChild(Render.createElement(child));
        }
      } else if (children) {
        elem.appendChild(Render.createElement(children));
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
    if (component === null || component === undefined) {
      console.log("Invalid component:", component);
      
    }

    console.error("Invalid component passed to createElement:", component);
    throw new Error(`Invalid component passed to createElement: ${component}`);
  }

  static render(component, root) {
    console.log("Rendering component:", component);
    root.innerHTML = "";
    root.appendChild(Render.createElement(component));
  }
}
