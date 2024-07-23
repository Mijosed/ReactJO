import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import {
    HeaderHome,
    Title,
    SportComponent,
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
        const calendarProps = {
            day: "26",
            month: "Juillet",
            time: "10:00",
            category: "Homme",
            location: "Trocadero",
        };

        this.textHistory = new Text({ text: "La naissance de la natation remonte à la préhistoire, mais il faut attendre le 19e siècle pour que sa pratique devienne compétitive. La Société nationale britannique de natation est créée au début du siècle, et s’occupe d’organiser les premières compétitions. Celles-ci se pratiquent à l’époque en brasse, ou en une nage approchante ; elles se sont ensuite enrichies d’une grande variété de disciplines, aujourd’hui pratiquées aux Jeux Olympiques." +
                "La natation est une discipline historique des Jeux Olympiques de l’ère moderne. Si les premières courses olympiques se déroulaient en environnement naturel, dès les Jeux de Londres en 1908, les épreuves ont pris place dans une piscine, ce qui a donné lieu à la création de la Fédération Internationale de Natation (FINA). La nage libre et la brasse sont les seules épreuves présentes aux Jeux d’Athènes en 1896, le dos est ensuite ajouté en 1904, puis le papillon apparaît en 1956 aux Jeux de Melbourne." });
        this.titleLineSportCalender = new TitleLine({ title: "CALENDRIER OLYMPIQUE" });
        this.calendar = new Calendar(calendarProps);
        this.titleLineSport = new TitleLine({ title: "HISTOIRE" });

    }

    render() {
        return {
            tag: "div",
            children: [
                this.headerSport.render(),
                this.titleLineSportCalender.render(),
                this.calendar.render(),
                this.titleLineSport.render(),
                this.textHistory.render(),
                this.footer.render(),
            ]
        };
    }
}

