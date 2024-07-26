import { Component } from '../core/Component.js';
import {
    HeaderLocation,
    Footer,
    Breadcrumb,
    Text,
    TitleLine,
    ImageGrid,
    Card
} from '../components/Components.js';
import { validateProps } from '../utils/typeCheck.js';

export class LocationPage extends Component {
    constructor(props) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                name: { type: 'string' },
                title: { type: 'string' },
                city: { type: 'string' },
                subtitle: { type: 'string' },
                description: { type: 'string' },
                sports: { type: 'array' },
                spots: { type: 'array' }
            },
            required: ['name', 'title', 'city', 'subtitle', 'description', 'sports', 'spots']
        };

        validateProps(props, propSchema);

        this.headerLocation = new HeaderLocation({
            title: props.title,
            subtitle: props.subtitle,
            city: props.city
        });
        this.footer = new Footer();
        this.breadcrumb = new Breadcrumb({
            items: [
                { label: "Home", href: "/" },
                { label: "Locations", href: "/locations" },
                { label: props.title, href: "#" }
            ]
        });
        this.textPresLieu = new Text({ text: props.description });
        this.titleLineSport = new TitleLine({ title: "SPORTS" });
        this.imageGrid = new ImageGrid({ images: props.sports });
        this.titleLineSpot = new TitleLine({ title: "SPOTS" });
    }

    render() {
        return {
            tag: "div",
            children: [
                this.headerLocation.render(),
                this.breadcrumb.render(),
                this.textPresLieu.render(),
                this.titleLineSport.render(),
                this.imageGrid.render(),
                this.titleLineSpot.render(),
                {
                    tag: "div",
                    props: { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 mx-40 mobil-margin", id: "sports" },
                    children: this.props.spots.map(spot => {
                        const enrichedSpot = {
                            ...spot,
                            gradientColor: "red"
                        };
                        const card = new Card(enrichedSpot);
                        return card.render();
                    })
                },
                this.footer.render(),
            ]
        };
    }
}

export default function renderLocationPage(params) {
    const locationPage = new LocationPage(params);
    return locationPage.renderDOM();
}
