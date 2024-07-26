import { HomePage } from "./views/HomePage.js";
import { SportPage } from "./views/SportPage.js";
import { LocationPage } from "./views/LocationPage.js";
import { NotFoundPage } from "./views/NotFoundPage.js";
import { SportSection } from "./components/sections/Home/SportSection.js";
import { LocationSection } from "./components/sections/Location/LocationSection.js";
import { fetchSportsData } from './api/fetchSportsData.js';
import { fetchLocationData } from './api/fetchLocationData.js';

const routes = {
    "/": () => new HomePage({ title: "Home Page", id: "root" }).render(),

    "/sports": async () => {
        console.log("Route: /sports");
        const data = await fetchSportsData();
        return new SportSection({ sports: data.sports, id: "root" }).render();
    },

    "/sports/:name": async (params) => {
        const sportName = decodeURIComponent(params.name.toLowerCase());
        console.log(`Route: /sports/${sportName}`);
        try {
            const data = await fetchSportsData();
            console.log("Sports data:", data);
            const sportInfo = data.sports.find(sport => sport.nom.toLowerCase() === sportName);
            if (sportInfo) {
                console.log("Sport info:", sportInfo);
                return new SportPage({
                    title: sportInfo.nom,
                    description: sportInfo.description,
                    image: sportInfo.image,
                    calendars: sportInfo.calendars,
                    historyText: sportInfo.historyText,
                    images: sportInfo.images,
                    id: "root"
                }).render();
            } else {
                console.log("Sport not found");
                return new NotFoundPage({ title: "404 Page", id: "root" }).render();
            }
        } catch (error) {
            console.log("Error fetching sports data:", error);
            return new NotFoundPage({ title: "404 Page", id: "root" }).render();
        }
    },

    "/locations": async () => {
        console.log("Route: /locations");
        const data = await fetchLocationData();
        console.log("Locations data:", data);
        return new LocationSection({ locations: data.locations, id: "root" }).render();
    },

    "/locations/:name": async (params) => {
        const locationName = decodeURIComponent(params.name.toLowerCase());
        console.log(`Route: /locations/${locationName}`);
        try {
            const data = await fetchLocationData();
            console.log("Locations data:", data);
            const locationInfo = data.locations.find(location => location.name.toLowerCase() === locationName);
            if (locationInfo) {
                console.log("Location info:", locationInfo);
                return new LocationPage({ ...locationInfo, id: "root" }).render();
            } else {
                console.log("Location not found");
                return new NotFoundPage({ title: "404 Page", id: "root" }).render();
            }
        } catch (error) {
            console.log("Error fetching locations data:", error);
            return new NotFoundPage({ title: "404 Page", id: "root" }).render();
        }
    },

    "/404": () => {
        console.log("Route: /404");
        return new NotFoundPage({ title: "404 Page", id: "root" }).render();
    }
};

export default routes;
