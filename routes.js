import { HomePage } from "./views/HomePage.js";
import { SportPage } from "./views/SportPage.js";
import { LocationPage } from "./views/LocationPage.js";
import { NotFoundPage } from "./views/NotFoundPage.js";
import { Carousel } from "./views/Carousel.js";
import { SportSection } from "./components/sections/Home/SportSection.js";
import { fetchSportsData } from './api/fetchSportsData.js';

const routes = {
    "/": async () => {
        const data = await fetchSportsData();
        return new HomePage({ title: "Home Page", sports: data.sports }).render();
    },
    "/sports": async () => {
        const data = await fetchSportsData();
        return new SportSection({ sports: data.sports }).render();
    },
    "/sports/:name": async (params) => {
        const sportName = decodeURIComponent(params.name.toLowerCase());
        try {
            const data = await fetchSportsData();
            const sportInfo = data.sports.find(sport => sport.nom.toLowerCase() === sportName);
            if (sportInfo) {
                return new SportPage({
                    title: sportInfo.nom,
                    description: sportInfo.description,
                    image: sportInfo.image,
                    calendars: sportInfo.calendars,
                    historyText: sportInfo.historyText,
                    images: sportInfo.images
                }).render();
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
