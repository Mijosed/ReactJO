import BrowserRouter from "./components/BrowserRouter.js";
import HomePage from "./pages/home.js";
import EventPage from "./pages/event.js";
import SpotPage from "./pages/spot.js";

const routes = {
    "/": HomePage,
    "/home": HomePage,
    "/event": EventPage,
    "/spot": SpotPage
};

const root = document.getElementById("root");
BrowserRouter(root, routes);