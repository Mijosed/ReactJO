import { Component } from '../core/Component.js';
import { validateProps } from '../utils/typeCheck.js';
import {
    HeaderHome,
    Title,
    Footer, HeaderSport, Breadcrumb, Text, TitleLine, Calendar
} from '../components/Components.js';

export class SportPage extends Component {
    constructor(props) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                title: { type: 'string' },
                description: { type: 'string' },
                image: { type: 'string' },
                calendars: { type: 'array' },
                historyText: { type: 'string' },
                images: { type: 'array' }
            },
            required: ['title', 'description', 'image', 'calendars', 'historyText', 'images']
        };
        validateProps(props, propSchema);

        this.props = props;
        this.headerSport = new HeaderSport({
            title: props.title.toUpperCase(),
            subtitle: props.description,
            city: "",
            backgroundImage: props.image
        });
        this.footer = new Footer();
        this.breadcrumb = new Breadcrumb({
            items: [
                { label: "Home", href: "/" },
                { label: "Sports", href: "/sports" },
                { label: props.title, href: "#" }
            ]
        });

        this.calendars = props.calendars.map(calendar => new Calendar({
            day: calendar.day,
            month: calendar.month,
            time: calendar.time,
            category: calendar.category,
            location: calendar.location
        }));

        this.textHistory = new Text({ text: props.historyText });
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
                this.breadcrumb.render(),
                this.titleLineSportCalender.render(),
                {
                    tag: "div",
                    props: { class: "flex", style: "display: flex;" },
                    children: [
                        {
                            tag: "div",
                            props: { class: "flex flex-col", style: "flex: 1;" },
                            children: this.calendars.map(calendar => calendar.render())
                        },
                        {
                            tag: "div",
                            props: { class: "flex-1 p-4 bg-white-200 flex flex-row items-center hidden-img", style: "flex: 1; flex-wrap: wrap;" },
                            children: [
                                ...this.props.images.map(img => ({
                                    tag: "img",
                                    props: { src: img.src, alt: img.alt, class: "mb-4 object-cover mr-4", width: "200" }
                                })),
                                {
                                    tag: "img",
                                    props: { src: "/assets/images/mascot.svg", alt: "Mascot", class: "object-cover", width: "200" }
                                }
                            ]
                        }
                    ]
                },
                this.titleLineSport.render(),
                this.textHistory.render(),
                this.footer.render(),
            ]
        };
    }
}
