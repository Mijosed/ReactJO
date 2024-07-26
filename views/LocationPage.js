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
                title: { type: 'string' },
                city: { type: 'string' },
                subtitle: { type: 'string' },
                description: { type: 'string' },
                image: { type: 'string' },
                sports: { type: 'array' },
                spots: { type: 'array' }
            },
            required: ['title', 'city', 'subtitle', 'description', 'image', 'sports', 'spots']
        };

        validateProps(props, propSchema);

        this.state = {
            title: props.title,
            city: props.city,
            subtitle: props.subtitle,
            description: props.description,
            image: props.image,
            sports: props.sports,
            spots: props.spots
        };

        this.headerLocation = new HeaderLocation({
            title: this.state.title,
            subtitle: this.state.subtitle,
            city: this.state.city,
            image: this.state.image
        });
        this.footer = new Footer();
        this.breadcrumb = new Breadcrumb({
            items: [
                { label: "Home", href: "/" },
                { label: "Locations", href: "/locations" },
                { label: this.state.title, href: "#" }
            ]
        });
        this.textPresLieu = new Text({ text: this.state.description });
        this.titleLineSport = new TitleLine({ title: "SPORTS" });
        this.imageGrid = new ImageGrid({
            images: this.state.sports.map(sport => ({
                src: sport.src,
                alt: sport.alt
            }))
        });
        this.titleLineSpot = new TitleLine({ title: "SPOTS" });
        this.cardSpot = this.state.spots.map(spot => ({
            id: spot.id,
            nom: spot.nom,
            description: spot.description,
            image: spot.image
        }));
    }

    render() {
        const propSchema = {
            type: 'object',
            properties: {
                id: { type: 'string' },
                nom: { type: 'string' },
                description: { type: 'string' },
                image: { type: 'string' },
                lien: { type: 'string' },
                gradientColor: { type: 'string' },
                onClick: { type: 'function' }
            },
            required: ['id', 'nom', 'description', 'image', 'onClick']
        };

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
                    props: { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 mx-40 mobil-margin", id: "spots" },
                    children: this.cardSpot.map(spot => {
                        const cardProps = {
                            ...spot,
                            lien: "",
                            gradientColor: "red",
                            onClick: () => console.log(`Clicked on ${spot.nom}`)
                        };

                        try {
                            validateProps(cardProps, propSchema);
                            const card = new Card(cardProps);
                            return card.render();
                        } catch (error) {
                            console.error('Invalid props provided:', error);
                            return {
                                tag: "div",
                                props: { class: "error-message" },
                                children: [error.message]
                            };
                        }
                    })
                },
                this.footer.render(),
            ]
        };
    }
}

export default function renderLocationPage(props) {
    const locationPage = new LocationPage(props);
    return Render.createElement(locationPage.render());
}
