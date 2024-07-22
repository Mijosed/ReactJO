import generateStructure from "../core/generateStructure.js";
import { subscribe } from "../core/dispatcher.js";

export default function BrowserRouter(rootElement, routes) {
  function managePath() {
    const path = window.location.pathname;
    const pageGenerator = routes[path] ?? routes["*"];
    const pageInstance = new pageGenerator();
    return pageInstance.render();
  }

  function updateDOM(component = null) {
    rootElement.replaceChild(generateStructure(component !== null ? component.render() : managePath()), rootElement.firstChild);
  }

  // Abonner la fonction de mise à jour du DOM
  subscribe(updateDOM);

  // Mettre à jour le DOM lors d'un événement popstate ou pushstate
  window.addEventListener("popstate", updateDOM);
  window.addEventListener("pushstate", updateDOM);

  // Écouter l'événement personnalisé stateChange
  document.addEventListener("stateChange", (event) => {
    const { component, state } = event.detail;
    if (component && state) {
      updateDOM(component);
    }
  });

  rootElement.appendChild(generateStructure(managePath()));
}

export function BrowserLink(props) {
  return {
    tag: "a",
    props: {
      href: props.path,
      onClick: (e) => {
        e.preventDefault();
        window.history.pushState({}, null, props.path);
        window.dispatchEvent(new Event("pushstate"));
      },
    },
    children: [props.title],
  };
}
