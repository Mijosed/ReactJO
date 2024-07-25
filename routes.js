import { HomePage } from "./views/HomePage.js";
import { SportPage } from "./views/SportPage.js";
import { LocationPage } from "./views/LocationPage.js";
import { NotFoundPage } from "./views/NotFoundPage.js";
const routes = {
  "/": () => new HomePage({ title: "Home Page", container : document.getElementById("root") }).render(),
  "/sports": () => new SportPage({ title: "Sports Page" }).render(),
  "/locations": () => new LocationPage({ title: "ARENA PARIS SUD", city: "Paris", subtitle: "Site de compétition" }).render(),
  "/404": () => new NotFoundPage({ title: "404 Page" }).render(),
};

export default routes;
