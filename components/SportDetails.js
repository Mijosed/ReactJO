import { Component } from '../core/Component.js';
import { TitleComponent } from "./Components.js";

export class SportBackground extends Component {
    render() {
        const TitleElement = new TitleComponent({ text: "NATATION" });
        return {
            tag: "section",
            props: {},
            children: [
                {
                    tag: "div",
                    props: { class: "section-sport-view" },
                    children: [
                        {
                            tag: "div", props: { class: "logo-sport top-right" }, children: [
                                { tag: "img", props: { src: "../assets/images/logo-colore.png", alt: "logo", class: "logo-container" } },
                            ]
                        },
                        {
                            tag: "div", props: { class: "title-sport bottom-left " }, children: [ TitleElement.render(), ]
                        }
                    ]
                },
            ]
        };
    }
}

export class SportCalendar extends Component {
    render() {
        const TitleElement = new TitleComponent({ text: "NATATION" });
        //const calendarElement = new CalendarComponent();
        return {
            tag: "section",
            props: {},
            children: [
                {
                    tag: "div",
                    props: { class: "section-sport-calendar" },
                    children: [
                        { tag: "div", props: { class: "logo-sport top-right" }, children: [
                            // calendarElement.render()
                            ]
                        },
                        {
                            tag: "div", props: { class: "title-sport bottom-left " }, children: [
                                { tag: "img", props: { src: "../assets/images/icon-sport.svg", width: "100", alt: "logo", class: "marge-bottom hide" }},
                                { tag: "img", props: { src: "../assets/images/mascot.svg", alt: "logo", class: "marge-bottom hide" }}
                            ]
                        }
                    ]
                },
            ]
        };
    }
}
