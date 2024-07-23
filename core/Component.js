import { Render } from "./Render.js";

export class Component {
  #container;
  #rerenderEvent;
  #oldStructure;
  newStruture;
  constructor({ container = null, rerenderEvent = "rerender" }) {
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

  setContainer(container) {
    this.#container = container;
  }

  shouldUpdate(oldNode, newNode) {
    if (oldNode.tag !== newNode.tag) {
      return true;
    }
    if (JSON.stringify(oldNode.props) !== JSON.stringify(newNode.props)) {
      return true;
    }
    if (Array.isArray(oldNode.children) && Array.isArray(newNode.children)) {
      if (oldNode.children.lenght !== newNode.children.lenght) {
        return true;
      } else {
        for (let i = 0; i < oldNode.children.length; i++) {
          let oldChild = oldNode.children[i];
          let newChild = newNode.children[i];
          if (this.shouldUpdate(oldChild,newChild)) {
            let objet = this.elementToObject(this.#container);
            return this.findElementByPropsAndReplace(this.#container, objet, oldNode.children[i],newChild);
          }
        }
      }
    }

    return false;
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
      return node;
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
        let foundNode = this.findElementByPropsAndReplace(child, nodeToObjectChild, propsToMatch,newProps);
        if (foundNode) {
          this.#container = node;
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

  setNewStructure(structure) {
    this.newStruture = structure;
  }
  display(newStruture) {
    if(this.shouldUpdate(this.#oldStructure, newStruture)){
      debugger;
      this.#oldStructure = newStruture;
    }

  }
  getContainer() {
    return this.#container;
  }
}
