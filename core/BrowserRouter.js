import { ErrorHandler } from '../errors/ErrorHandler.js';
import { Render } from './Render.js';

export function BrowserRouter(rootElement, routes) {
    function parseUrl() {
        const path = window.location.pathname;
        const params = {};
        const route = Object.keys(routes).find(route => {
            const regex = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`);
            const match = path.match(regex);
            if (match) {
                const keys = route.match(/:\w+/g);
                if (keys) {
                    keys.forEach((key, index) => {
                        params[key.substring(1)] = match[index + 1];
                    });
                }
                return true;
            }
            return false;
        });
        return { route, params };
    }

    async function manageRoute() {
        const { route, params } = parseUrl();
        console.log("Current route:", route);
        console.log("Route params:", params);
        let pageFunction = routes[route];

        if (!pageFunction) {
            console.log("Route not found, redirecting to /404");
            pageFunction = routes['/404'];
        }

        try {
            const component = await pageFunction(params);
            console.log("Rendering component:", component);
            Render.render(component, rootElement);
        } catch (error) {
            console.log("Error managing route:", error);
            ErrorHandler.handle(error);
        }
    }

    window.addEventListener("popstate", manageRoute);
    window.addEventListener("pushstate", manageRoute);
    manageRoute();
}
