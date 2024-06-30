import BrowserRouter from "./components/BrowserRouter.js";
import HomePage from "./views/home.js";
import EventPage from "./views/event.js";
import SpotPage from "./views/spot.js";

export default {
    "/": HomePage,
    "/event": EventPage,
    "/spot": SpotPage,
};
