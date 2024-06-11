export class React {
  static createElement(tagName, attributes = {}, children = []) {
    return {
      tagName: tagName,
      attributes: attributes,
      children: children,
    };
  }

  static render(virtualElement, container) {
    // Fonction interne pour créer un élément DOM
    function createDOMElement({ tagName, attributes, children }) {
      const element = document.createElement(tagName);

      // Appliquer les attributs à l'élément
      for (const [attributeName, attributeValue] of Object.entries(attributes)) {
        element.setAttribute(attributeName, attributeValue);
      }

      // Ajouter les enfants à l'élément
      children.forEach((child) => {
        if (typeof child === "string") {
          element.appendChild(document.createTextNode(child));
        } else {
          element.appendChild(createDOMElement(child));
        }
      });

      return element;
    }

    // Créer l'élément DOM à partir de l'élément virtuel
    const domElement = createDOMElement(virtualElement);

    // Vider le conteneur et y ajouter le nouvel élément DOM
    container.innerHTML = "";
    container.appendChild(domElement);
  }
}
