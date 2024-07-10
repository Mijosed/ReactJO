import { Component } from '../core/Component.js';
import { HeaderComponent } from './HeaderComponent.js';
import { MapComponent } from './MapComponent.js';
import { FooterComponent } from './FooterComponent.js';
import { SportComponent } from "./SportComponent.js";
// import { ModalComponent } from './ModalComponent.js';


export class LinkComponent extends Component {
    render() {
        const { href, text } = this.props;
        return {
            tag: "a",
            props: { href },
            children: [text]
        };
    }
}

export class LineComponent extends Component {
    render() {
        return {
            tag: "hr",
            props: { class: "custom-line" },
            children: []
        };
    }
}

export class TextComponent extends Component {
    render() {
        const { text } = this.props;
        return {
            tag: "p",
            props: { class: "simple-text marge-top marge-bloc" },
            children: [text]
        };
    }
}

export class TitleComponent extends Component {
    render() {
        const { text } = this.props;
        return {
            tag: "div",
            props: { class: "page-title" },
            children: [
                {
                    tag: "p", props: {class: "title-value"}, children: [text]
                }
            ]
        };
    }
}

export class MainComponent extends Component {
    render() {
        const headerElement = new HeaderComponent();
        return {
            tag: "main",
            props: {},
            children: [
                headerElement.render()
            ]
        };
    }
}

export class MapSection extends Component {
    render() {
        const mapComponent = new MapComponent();
        return {
            tag: "section",
            props: { id: "map", class: "map-container" },
            children: [
                mapComponent.render()
            ]
        };
    }
}

export class SearchComponent extends Component {
    render() {
        const mapComponent = new MapComponent();
        return {
            tag: "section",
            props: { class: "search-container p-4 bg-white" },
            children: [
                {
                    tag: "div",
                    props: { class: "flex items-center space-x-4 search-barre" },
                    children: [
                        {
                            /*tag: "select",
                            props: { class: "p-2 border border-gray-300 simple-text" },
                            children: [
                                { tag: "option", props: { value: "" }, children: ["Filtrer"] },
                                { tag: "option", props: { value: "option1", class: "simple-text" }, children: ["Option 1"] },
                                { tag: "option", props: { value: "option2", class: "simple-text" }, children: ["Option 2"] },
                                { tag: "option", props: { value: "option3", class: "simple-text" }, children: ["Option 3"] }
                            ]*/
                            tag: "button",
                            props: {
                                type: "button",
                                class: "bg-white-500 hover:bg-blue-700 text-black font-bold py-2 px-4 simple-text border-button",
                                onClick: () => { window.location.href = '/#modal'; }
                            },
                            children: ["Filtrer"]
                        },
                        {
                            tag: "input",
                            props: { type: "text", placeholder: "Recherche...", class: "flex-grow p-2 border border-gray-300 simple-text" }
                        }
                    ]
                }
            ]
        };
    }
}

export class SportSection extends Component {
    render() {
        const sportComponent = new SportComponent();
        return {
            tag: "section",
            props: { id: "sports", class: "sports-container" },
            children: [
                sportComponent.render(),
                sportComponent.render(),
                sportComponent.render(),
                sportComponent.render()
            ]
        };
    }
}

export class FooterSection extends Component {
    render() {
        const footerComponent = new FooterComponent();
        return {
            tag: "footer",
            props: {},
            children: [
                footerComponent.render()
            ]
        };
    }
}

export class ModalSection extends Component {
    render() {
        const modalComponent = new ModalComponent();
        return {
            tag: "section",
            props: { id: "modal", class: "modal-container" },
            children: [
                modalComponent.render()
            ]
        };
    }
}

export class ErrorComponent extends Component {
    render() {
        const TitleElement = new TitleComponent({ text: "404 - PAGE NOT FOUND" });
        return {
            tag: "main",
            props: {class: "error-container" },
            children: [
                {
                    tag: "div",
                    props: { class: "center-element" },
                    children: [
                        { tag: "img", props: { src: "../assets/images/Logo1.svg", alt: "logo", class: "marge-bottom" }}
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
                        { tag: "p", props: { class: "simple-text marge-bottom" }, children: ["Désolé! Nous ne trouvons pas la page que vous recherchez."]}
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
