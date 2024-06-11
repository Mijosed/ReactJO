import { BrowserLink } from "../components/BrowserRouter.js";
import { React } from "../core/MiniReact.js";

export default function EventPage() {
  console.log(React.render(test));
  const div = document.createElement("div");
  div.appendChild(BrowserLink("/home", "Accueil"));

  const textElement = document.createElement("p");
  textElement.textContent = "Vous etes sur la page des evenements";
  div.appendChild(textElement);

  return div;
}
