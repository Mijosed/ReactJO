import { Component } from '../core/Component.js';
import { HeaderComponent } from './HeaderComponent.js';
import { MapComponent } from './MapComponent.js';
import { FooterComponent } from './FooterComponent.js';
import { SportComponent } from "./SportComponent.js";


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

export class TextComponent extends Component {
    render() {
        const { text } = this.props;
        return {
            tag: "p",
            props: {},
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

export class SportSection extends Component {
    render() {
        const sportComponent = new SportComponent();
        return {
            tag: "section",
            props: { id: "sports", class: "sports-container" },
            children: [
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
