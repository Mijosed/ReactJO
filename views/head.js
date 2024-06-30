// inclure la feuille de style
const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = "views/styles/src/style.css"; // Assurez-vous que le chemin est correct selon votre structure de fichiers
document.head.appendChild(linkElement);

// inclure les balises bootstrap
const bootstrapLinkElement = document.createElement("link");
bootstrapLinkElement.rel = "stylesheet";
bootstrapLinkElement.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
document.head.appendChild(bootstrapLinkElement);

const bootstrapScriptElement = document.createElement("script");
bootstrapScriptElement.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
document.body.appendChild(bootstrapScriptElement);