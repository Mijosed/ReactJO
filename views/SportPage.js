import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import {
    HeaderHome,
    Title,
    Footer, HeaderSport, Breadcrumb, Text, TitleLine, Calendar
} from '../components/Components.js';
import { validateProps } from '../utils/utils.js';

export class SportPage extends Component {
    constructor(props) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                title: { type: 'string' }
            }
        };
        validateProps(props, propSchema);

        this.headerSport = new HeaderSport({
            title: "NATATION",
            subtitle: "",
            city: ""
        });
        this.footer = new Footer();
        this.breadcrumb = new Breadcrumb({
            items: [
                { label: "Home", href: "/" },
                { label: props.title, href: "#" }
            ]
        });

        this.calendar1 = new Calendar({
            day: "26",
            month: "Juillet",
            time: "10:00",
            category: "Masculin",
            location: "Trocadero",
        });
        this.calendar2 = new Calendar({
            day: "27",
            month: "Août",
            time: "14:00",
            category: "Feminin",
            location: "Complexe sportif Paris La Défense Arena",
        });

        this.textHistory = new Text({ text: "La naissance de la natation remonte à la préhistoire, mais il faut attendre le 19e siècle pour que sa pratique devienne compétitive. La Société nationale britannique de natation est créée au début du siècle, et s’occupe d’organiser les premières compétitions. Celles-ci se pratiquent à l’époque en brasse, ou en une nage approchante; elles se sont ensuite enrichies d’une grande variété de disciplines, aujourd’hui pratiquées aux Jeux Olympiques. La natation est une discipline historique des Jeux Olympiques de l’ère moderne. Si les premières courses olympiques se déroulaient en environnement naturel, dès les Jeux de Londres en 1908, les épreuves ont pris place dans une piscine, ce qui a donné lieu à la création de la Fédération Internationale de Natation (FINA). La nage libre et la brasse sont les seules épreuves présentes aux Jeux d’Athènes en 1896, le dos est ensuite ajouté en 1904, puis le papillon apparaît en 1956 aux Jeux de Melbourne." });
        this.titleLineSportCalender = new TitleLine({ title: "CALENDRIER OLYMPIQUE" });
        this.titleLineSport = new TitleLine({ title: "HISTOIRE" });
    }

    render() {
        return {
            tag: "div",
            children: [
                {
                    tag: "div",
                    props: { class: "header-container", style: "position: relative; display: flex; align-items: center;" },
                    children: [
                        this.headerSport.render(),
                    ],
                },
                this.titleLineSportCalender.render(),
                {
                    tag: "div",
                    props: { class: "flex", style: "display: flex;" },
                    children: [
                        {
                            tag: "div",
                            props: { class: "flex flex-col", style: "flex: 1;" },
                            children: [
                                this.calendar1.render(),
                                this.calendar2.render(),
                            ],
                        },
                        {
                            tag: "div",
                            props: { class: "flex-1 p-4 bg-white-200 flex flex-row items-center hidden-img", style: "flex: 1; flex-wrap: wrap;" },
                            children: [
                                { tag: "img", props: { src: "../../assets/images/icon-natation.png", alt: "Image 1", class: "mb-4 object-cover mr-4", width: "200" } },
                                { tag: "img", props: { src: "../../assets/images/mascot.svg", alt: "Image 2", class: "object-cover", width: "200" } }
                            ],
                        },
                    ],
                },
                this.titleLineSport.render(),
                this.textHistory.render(),
                this.footer.render(),
            ]
        };
    }
}
