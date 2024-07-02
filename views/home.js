
export default function HomePage() {
    const div = document.createElement("div");
    div.appendChild(BrowserLink("/event", "Evenements"));
    div.appendChild(BrowserLink("/spot", "Spots"));

    const eventLinkDiv = document.createElement("div");
    eventLinkDiv.appendChild(BrowserLink("/event", "Evenements"));
    const spotLinkDiv = document.createElement("div");
    spotLinkDiv.appendChild(BrowserLink("/spot", "Spots"));

    div.appendChild(eventLinkDiv);
    div.appendChild(spotLinkDiv);

    const textElement = document.createElement("p");
    textElement.textContent = "Vous etes sur la page d'accueil";
    div.appendChild(textElement);

    return div;
}