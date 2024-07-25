import { HomePage } from "./views/HomePage.js";
import { SportPage } from "./views/SportPage.js";
import { LocationPage } from "./views/LocationPage.js";
import { NotFoundPage } from "./views/NotFoundPage.js";
import { Carousel } from "./views/Carousel.js";
import { SportSection } from "./components/sections/Home/SportSection.js"; // Assurez-vous que le chemin est correct
import { fetchSportsData } from './api/fetchSportsData.js';

const routes = {
    "/": () => new HomePage({ title: "Home Page", container: document.getElementById("root") }).render(),
    "/sports": () => new SportSection({}).render(),
    "/sports/:name": async (params) => {
        const sportName = params.name.toLowerCase();
        try {
            const data = await fetchSportsData();
            const sportInfo = data.sports.find(sport => sport.nom.toLowerCase() === sportName);
            if (sportInfo) {
                return new SportPage(sportInfo).render();
            } else {
                return new NotFoundPage({ title: "404 Page" }).render();
            }
        } catch (error) {
            return new NotFoundPage({ title: "404 Page" }).render();
        }
    },
    "/locations": () => new LocationPage({ title: "ARENA PARIS SUD", city: "Paris", subtitle: "Site de compétition" }).render(),
    "/404": () => new NotFoundPage({ title: "404 Page" }).render(),
    "/test": () =>
        new Carousel({
            container: document.getElementById("root"),
            images: ["./assets/images/icon-basket.png", "./assets/images/background-lieu.png", "./assets/images/background-sport.png"],
        }).render(),
};

export default routes;
