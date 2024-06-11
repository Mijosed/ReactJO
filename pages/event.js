import { BrowserLink } from "../components/BrowserRouter.js";

export default function EventPage() {
    const div = document.createElement("div");
    div.appendChild(BrowserLink("/home", "Accueil"));

    const textElement = document.createElement("p");
    textElement.textContent = "Vous etes sur la page des evenements";
    div.appendChild(textElement);

    return div;
}