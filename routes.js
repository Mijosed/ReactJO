<<<<<<< HEAD
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
=======
import HomePage from "./views/home.js";
import LocationPage from "./views/place.js";
import SportPage from "./views/sport.js";
import ErrorPage from "./views/404.js";
import TestPage from "./views/TestPage.js";

export default {
    "/": HomePage,
    "/places": LocationPage,
    "/sport": SportPage,
    "/404": ErrorPage,
    "/test": TestPage,

};
    
>>>>>>> e92f8e477e84991d8d5873bc81c94a3f5d1d2c40
