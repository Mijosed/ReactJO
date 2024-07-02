export default function generateStructure(structure, rootElement = null) {
  const elem = document.createElement(structure.tag);
  if (structure.props) {
    for (const propName in structure.props) {
      if (/^on[A-Z]/.test(propName)) {
        elem.addEventListener(propName.slice(2).toLowerCase(), structure.props[propName]);
      } else if (/^data[A-Z]/.test(propName)) {
        elem.dataset[propName.slice(4).toLowerCase()] = structure.props[propName];
      } else {
        elem.setAttribute(propName, structure.props[propName]);
      }
    }
  }
  if (structure.children) {
    for (const child of structure.children) {
      let subChild;
      if (typeof child === "string") {
        subChild = document.createTextNode(child);
      } else {
        subChild = generateStructure(child);
      }
      elem.appendChild(subChild);
    }
  }

  if (rootElement) {
    rootElement.replaceChild(elem, rootElement.firstChild);
  }

  return elem;
}
