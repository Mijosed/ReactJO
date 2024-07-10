import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';

import {
    LineComponent,
    TitleComponent, FooterSection, TextComponent
} from '../components/Components.js';
import { SportBackground, SportCalendar } from '../components/SportDetails.js';


export class SportPage extends Component {
    render() {

        const sportBackground = new SportBackground();
        const titleElement = new TitleComponent({ text: "Calendrier Olympic" });
        const lineElement = new LineComponent();
        const calendarElement = new SportCalendar();
        const titleHistoryElement = new TitleComponent({ text: "Histoire" });
        const textElement = new TextComponent({ class: "simple-text", text: "La naissance de la natation remonte à la préhistoire, mais il faut attendre le 19e siècle pour que sa pratique devienne compétitive. La Société nationale britannique de natation est créée au début du siècle, et s’occupe d’organiser les premières compétitions. Celles-ci se pratiquent à l’époque en brasse, ou en une nage approchante ; elles se sont ensuite enrichies d’une grande variété de disciplines, aujourd’hui pratiquées aux Jeux Olympiques." });
        const footerElement = new FooterSection();
        return {
            tag: "div",
            children: [
                sportBackground.render(),
                titleElement.render(),
                lineElement.render(),
                calendarElement.render(),
                titleHistoryElement.render(),
                lineElement.render(),
                textElement.render(),
                footerElement.render(),

            ]
        };
    }
}

export default function renderSpotPage() {
    const spotPage = new SportPage();
    return Render.createElement(spotPage.render());
}
