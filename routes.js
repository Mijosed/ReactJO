import BrowserRouter from "./components/BrowserRouter.js";
import HomePage from "./views/home.js";
import SpotPage from "./views/spot.js";
import Page1Class from "./views/page1classe.js";

export default {
  "/": HomePage,
  "/spot": SpotPage,
  "/test": Page1Class,
};
