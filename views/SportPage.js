import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import {
    HeaderHome,
    Title,
    Footer, HeaderSport, Breadcrumb, Text, TitleLine, Calendar
} from '../components/Components.js';
import { validateProps } from '../utils/typeCheck.js';

export class SportPage extends Component {
    constructor(props) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                title: { type: 'string' },
                sportTitle: { type: 'string' },
                breadcrumbItems: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            label: { type: 'string' },
                            href: { type: 'string' }
                        },
                        required: ['label', 'href']
                    }
                },
                calendars: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            day: { type: 'string' },
                            month: { type: 'string' },
                            time: { type: 'string' },
                            category: { type: 'string' },
                            location: { type: 'string' }
                        },
                        required: ['day', 'month', 'time', 'category', 'location']
                    }
                },
                historyText: { type: 'string' },
                images: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            src: { type: 'string' },
                            alt: { type: 'string' }
                        },
                        required: ['src', 'alt']
                    }
                }
            },
            required: ['title', 'sportTitle', 'breadcrumbItems', 'calendars', 'historyText', 'images']
        };
        validateProps(props, propSchema);

        this.headerSport = new HeaderSport({
            title: props.sportTitle,
            subtitle: "",
            city: ""
        });
        this.footer = new Footer();
        this.breadcrumb = new Breadcrumb({
            items: props.breadcrumbItems
        });

        this.calendars = props.calendars.map(calendar => new Calendar(calendar));

        this.textHistory = new Text({ text: props.historyText });
        this.titleLineSportCalender = new TitleLine({ title: "CALENDRIER OLYMPIQUE" });
        this.titleLineSport = new TitleLine({ title: "HISTOIRE" });
        this.images = props.images;
    }

    render() {
        return {
            tag: "div",
            children: [
                this.headerSport.render(),
                this.breadcrumb.render(),
                this.titleLineSportCalender.render(),
                {
                    tag: "div",
                    props: { class: "flex", style: "display: flex;" },
                    children: [
                        {
                            tag: "div",
                            props: { class: "flex flex-col", style: "flex: 1;" },
                            children: this.calendars.map(calendar => calendar.render()),
                        },
                        {
                            tag: "div",
                            props: { class: "flex-1 p-4 bg-white-200 flex flex-row items-center hidden-img", style: "flex: 1; flex-wrap: wrap;" },
                            children: this.images.map(image => ({
                                tag: "img",
                                props: { src: image.src, alt: image.alt, class: "mb-4 object-cover mr-4", width: "200" }
                            })),
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
