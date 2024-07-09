import HomePage from "./views/home.js";
import EventPage from "./views/place.js";
import SpotPage from "./views/sport.js";
import ErrorPage from "./views/404.js";

export default {
    "/": HomePage,
    "/places": EventPage,
    "/sport": SpotPage,
    "/404": ErrorPage,
};
