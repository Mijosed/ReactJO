import { Render } from "./Render.js";

export class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = props.state || {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.update();
  }

  update() {
    const root = document.getElementById(this.props.id || "root");
    let rootToObjet = this.elementToObject(root);

    this.shouldUpdate(rootToObjet, this.render(), root);
  }

  renderDOM() {
    const element = this.render();
    return this.createElement(element);
  }
  shouldUpdate(oldNode, newNode, root) {
    if(!oldNode.tag || !newNode.tag) {debugger};
    let isTrue = false;
    if (typeof oldNode === "string" || oldNode instanceof String) {
      return oldNode !== newNode;
    } else {
      if (newNode instanceof Component) {
        newNode = newNode.render();
      }

      if (oldNode.tag !== newNode?.tag) {
        isTrue = true;
      }
      if (JSON.stringify(oldNode.props) !== JSON.stringify(newNode.props)) {
        isTrue = true;
      }
    }
    if (isTrue) {
      let objet = this.elementToObject(root);
      this.findElementByPropsAndReplace(root, objet, oldNode, newNode);
    } else {
      if (Array.isArray(oldNode.children) && Array.isArray(newNode.children)) {
        if (oldNode.children.length !== newNode.children.length) {
          isTrue = true;
        } else {
          for (let i = 0; i < oldNode.children.length; i++) {
            let oldChild = oldNode.children[i];
            let newChild = newNode.children[i];
            return this.shouldUpdate(oldChild, newChild, root);
          }
        }
      }
    }
    return isTrue;
  }
  elementToObject(element) {
    if (!element) return null;

    // Crée un objet pour représenter l'élément
    const obj = {
      tag: element.tagName.toLowerCase(), // Balise en minuscules
      props: {}, // Attributs de l'élément
      children: [], // Enfants de l'élément
    };

    // Ajouter les attributs de l'élément
    for (const attr of element.attributes) {
      obj.props[attr.name] = attr.value;
    }

    // Ajouter les enfants récursivement
    for (const child of element.childNodes) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        obj.children.push(this.elementToObject(child));
      } else if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
        obj.children.push(child.textContent.trim());
      }
    }

    return obj;
  }

  findElementByPropsAndReplace(node, nodeToObject, propsToMatch, newProps) {
    // Vérifie si le nœud actuel correspond aux propriétés données
    if (this.matchesProps(nodeToObject, propsToMatch)) {
      node.replaceWith(Render.createElement(newProps));
    }

    // Itère sur les enfants du nœud actuel
    for (let i = 0; i < node.childNodes.length; i++) {
      let child = node.childNodes[i];
      let nodeToObjectChild = nodeToObject.children[i];

      // Vérifie si l'enfant actuel correspond aux propriétés données
      if (this.matchesProps(nodeToObjectChild, propsToMatch)) {
        child.replaceWith(Render.createElement(newProps));
        return child;
      }

      // Si l'enfant a des nœuds enfants, effectue une recherche récursive
      if (child.childNodes.length > 0) {
        let foundNode = this.findElementByPropsAndReplace(child, nodeToObjectChild, propsToMatch, newProps);
        if (foundNode) {
          return foundNode;
        }
      }
    }

    // Si aucun nœud correspondant n'est trouvé, retourne null
    return null;
  }

  deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
      return true; // Same reference
    }

    if (typeof obj1 !== "object" || obj1 === null || typeof obj2 !== "object" || obj2 === null) {
      return false; // Different types or one is null
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false; // Different number of keys
    }

    for (const key of keys1) {
      if (!keys2.includes(key) || !this.deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }

  matchesProps(nodeToObject, props) {
    return this.deepEqual(nodeToObject, props);
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
          if (key.startsWith("on") && typeof value === "function") {
            domElement.addEventListener(key.substring(2).toLowerCase(), value);
          } else if (key === "style" && typeof value === "object") {
            Object.assign(domElement.style, value);
          } else {
            domElement.setAttribute(key, value);
          }
        }
      }

      if (children) {
        children.forEach((child) => domElement.appendChild(this.createElement(child)));
      }

      return domElement;
    }

    if (typeof element === "object" && element.render) {
      return this.createElement(element.render());
    }

    throw new Error(`Invalid element passed to createElement: ${element}`);
  }

  render() {
    throw new Error("Render method should be implemented by subclass");
  }
}
