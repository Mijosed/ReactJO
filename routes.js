import HomePage from "./views/home.js";
import EventPage from "./views/event.js";
import SpotPage from "./views/spot.js";
import ErrorPage from "./views/404.js";

export default {
    "/": HomePage,
    "/event": EventPage,
    "/spot": SpotPage,
    "/404": ErrorPage,
};
