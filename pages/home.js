import { BrowserLink } from "../components/BrowserRouter.js";

export default function HomePage() {
    const div = document.createElement("div");
    div.appendChild(BrowserLink("/event", "Evenements"));
    div.appendChild(BrowserLink("/spot", "Spots"));

    return div;
}