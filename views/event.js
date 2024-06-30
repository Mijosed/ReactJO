import { BrowserLink } from "../components/BrowserRouter.js";
import "./head.js";

export default function EventPage() {
    const div = document.createElement("div");
    // div.appendChild(BrowserLink("/", "Accueil"));

    const linkElement = BrowserLink("/", "Accueil");
    linkElement.classList.add("link-underline-danger");
    div.appendChild(linkElement);

    const textElement = document.createElement("p");
    textElement.textContent = "Vous etes sur la page des evenements ! ";
    div.appendChild(textElement);

    return div;
}