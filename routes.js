
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
};