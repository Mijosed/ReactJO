import { BrowserLink } from "../components/BrowserRouter.js";
import { React } from "../core/MiniReact.js";

export default function HomePage() {
  const languages = ["javascript", "php", "haskell"];
  const virtualDOM = React.createElement(
    "ul",
    { id: "brrap" },
    languages.map((language) => React.createElement("li", {}, [language]))
  );
  return virtualDOM;
}
