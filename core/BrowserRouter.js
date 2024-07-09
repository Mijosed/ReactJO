export default function BrowserRouter(rootElement, routes) {
  function manageRoute() {
    const path = window.location.pathname;
    let pageFunction = routes[path];

    if (!pageFunction) {
      pageFunction = routes['/404'];
    }

    if (rootElement.childNodes[0])
      rootElement.replaceChild(pageFunction(), rootElement.childNodes[0]);
    else rootElement.appendChild(pageFunction());
  }

  window.addEventListener("popstate", manageRoute);
  window.addEventListener("pushstate", manageRoute);
  manageRoute();
}
