import { Component } from '../../core/Component.js';
import { Title } from '../elements/Title.js';

export class Error extends Component {
    render() {
        const TitleElement = new Title({ text: "404 - PAGE NOT FOUND" });
        return {
            tag: "main",
            props: { class: "error-container" },
            children: [
                {
                    tag: "div",
                    props: { class: "center-element" },
                    children: [
                        { tag: "img", props: { src: "../assets/images/Logo1.svg", alt: "logo", class: "marge-bottom" } }
                    ]
                },
                {
                    tag: "div",
                    props: { class: "center-element" },
                    children: [
                        TitleElement.render(),
                    ]
                },
                {
                    tag: "div",
                    props: { class: "center-element" },
                    children: [
                        { tag: "p", props: { class: "simple-text marge-bottom" }, children: ["Désolé! Nous ne trouvons pas la page que vous recherchez."] }
                    ]
                },
                {
                    tag: "div",
                    props: { class: "center-element" },
                    children: [
                        {
                            tag: "button",
                            props: {
                                type: "button",
                                class: "bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                                onClick: () => { window.location.href = '/'; }
                            },
                            children: ["Retour à la page d'accueil"]
                        }
                    ]
                },
            ]
        };
    }
}
