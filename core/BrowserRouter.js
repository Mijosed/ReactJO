import { ErrorHandler } from '../errors/ErrorHandler.js';
import { Render } from './Render.js';

export function BrowserRouter(rootElement, routes) {
    function manageRoute() {
        const path = window.location.pathname;
        let pageFunction = routes[path];

        if (!pageFunction) {
            pageFunction = routes['/404'];
        }

        try {
            const component = pageFunction();
            Render.render(component, rootElement);
        } catch (error) {
            ErrorHandler.handle(error);
        }
    }

    window.addEventListener("popstate", manageRoute);
    window.addEventListener("pushstate", manageRoute);
    manageRoute();
}
