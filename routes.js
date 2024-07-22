import { HomePage } from './views/HomePage.js';
import { SportPage } from './views/SportPage.js';
import { LocationPage } from './views/LocationPage.js';
import { NotFoundPage } from './views/NotFoundPage.js';

const routes = {
    '/': () => new HomePage({ title: "Home Page" }).render(),
    '/sports': () => new SportPage({ title: "Sports Page" }).render(),
    '/locations': () => new LocationPage({ title: "Locations Page" }).render(),
    '/404': () => new NotFoundPage({ title: "404 Page" }).render()
};

export default routes;
