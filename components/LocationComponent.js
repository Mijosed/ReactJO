import { Component } from '../core/Component.js';
import {TextComponent, TitleComponent} from "./Components.js";
import {SpotComponent} from "./SpotComponent.js";

export class LocationBackground extends Component {
    render() {
        const TitleElement = new TitleComponent({ text: "ARENA PARIS SUD" });
        const textElement = new TextComponent({ text: " Paris - Sites de compétition" });
        return {
            tag: "section",
            props: {},
            children: [
                {
                    tag: "div",
                    props: { class: "section-location-view" },
                    children: [
                        {
                            tag: "div", props: { class: "logo-sport top-right" }, children: [
                                { tag: "img", props: { src: "../assets/images/logo-colore.png", alt: "logo", class: "logo-container" } },
                            ]
                        },
                        { tag: "div", props: { class: "title-sport bottom-left " }, children: [ TitleElement.render(), ] },
                        { tag: "br", props: {}, children: [] },
                        { tag: "div", props: { class: "bottom-left " }, children: [ textElement.render(), ] },
                    ]
                },
            ]
        };
    }
}

export class Icons extends Component {
    constructor({ imageSrc, altText, text }) {
        super();
        this.imageSrc = imageSrc;
        this.altText = altText;
        this.text = text;
    }

    render() {
        const textElement = new TextComponent({ text: this.text });
        return {
            tag: "div",
            props: { class: "icon-text" },
            children: [
                { tag: "img", props: { src: this.imageSrc, alt: this.altText, class: "logo-container" } },
                textElement.render()
            ]
        };
    }
}

export class DisciplineIcons extends Component {
    render() {
        const iconData = [
            { imageSrc: "../assets/images/icon-athletisme.png", altText: "logo", text: "Athlétisme" },
            { imageSrc: "../assets/images/icon-natation.png", altText: "basketball", text: "natation" },
            { imageSrc: "../assets/images/icon-basket.png", altText: "basketball", text: "Basketball" },
            { imageSrc: "../assets/images/icon-basket.png", altText: "basketball", text: "Basketball" },
            { imageSrc: "../assets/images/icon-basket.png", altText: "basketball", text: "Basketball" },
        ];

        const icons = iconData.map(data => new Icons(data));

        return {
            tag: "div",
            props: { class: "icons-container" },
            children: icons.map(icon => icon.render())
        };
    }
}

export class SpotSection extends Component {
    render() {
        const spotComponent = new SpotComponent();
        return {
            tag: "section",
            props: { class: "sports-container", style: 'margin-top: 15px' },
            children: [
                spotComponent.render(),
                spotComponent.render(),
                spotComponent.render(),
                spotComponent.render()
            ]
        };
    }
}


