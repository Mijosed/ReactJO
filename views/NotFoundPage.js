import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import { Title, Footer } from '../components/Components.js';

export class NotFoundPage extends Component {
    render() {
        const titleElement = new Title({ text: "404 - Page Not Found" });
        const footerElement = new Footer();

        return {
            tag: "div",
            children: [
                {
                    tag: "div",
                    props: { class: "flex flex-col items-center justify-center h-screen" },
                    children: [
                        titleElement.render(),
                        {
                            tag: "p",
                            props: { class: "text-center mt-4" },
                            children: ["Désolé, la page que vous recherchez n'existe pas."]
                        },
                        {
                            tag: "a",
                            props: { href: "/", class: "mt-4 text-blue-500 hover:underline" },
                            children: ["Retour à l'accueil"]
                        }
                    ]
                },
                footerElement.render()
            ]
        };
    }
}
