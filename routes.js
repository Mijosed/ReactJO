import { HomePage } from "./views/HomePage.js";
import { SportPage } from "./views/SportPage.js";
import { LocationPage } from "./views/LocationPage.js";
import { NotFoundPage } from "./views/NotFoundPage.js";
import { SportSection } from "./components/sections/Home/SportSection.js";
import { fetchSportsData } from './api/fetchSportsData.js';

const routes = {
    "/": () => new HomePage({ title: "Home Page", id:"root" }).render(),
    "/sports": async () => {
        const data = await fetchSportsData();
        return new SportSection({ sports: data.sports, id:"root" }).render();
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
                    images: sportInfo.images,
                    id : "root"
                }).render();
            } else {
                return new NotFoundPage({ title: "404 Page", id:"root" }).render();
            }
        } catch (error) {
            return new NotFoundPage({ title: "404 Page",id:"root" }).render();
        }
    },
    "/locations": () => new LocationPage({ title: "ARENA PARIS SUD", city: "Paris", subtitle: "Site de compétition",id:"root" }).render(),
    "/404": () => new NotFoundPage({ title: "404 Page",id:"root" }).render(),
    

};

export default routes;
