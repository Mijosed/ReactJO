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
                subtitle: { type: 'string' }
            },
            required: ['title', 'city', 'subtitle']
        };

        validateProps(props, propSchema);

        this.headerLocation = new HeaderLocation({
            title: "ARENA PARIS SUD",
            subtitle: "Site de compétition",
            city: "Paris"
        });
        this.footer = new Footer();
        this.breadcrumb = new Breadcrumb({
            items: [
                { label: "Home", href: "/" },
                { label: "Locations", href: "/locations" },
                { label: props.title, href: "#" }
            ]
        });
        this.textPresLieu = new Text({ text: "L'Arena Paris Sud fait partie de Paris Expo, centre d'exposition et de convention parmi les plus actifs d'Europe et le plus fréquenté de France. Paris Expo c'est une zone de 35 hectares, 228'000m² de halls d'exposition, 7 pavillons qui accueille 7,5 millions de visiteurs chaque année, notamment lors du célèbre Salon de l'agriculture. Avec les Halls 1, 4 et 6 qui accueilleront de nombreuses épreuves, et certains halls réservés aux aspects logistiques des Jeux, Paris Expo constitue l'un des pôles majeurs des Jeux de Paris 2024." });
        this.titleLineSport = new TitleLine({ title: "SPORTS" });
        this.imageGrid = new ImageGrid({
            images: [
                { src: "../assets/images/icon-athletisme.png", alt: "athle" },
                { src: "../assets/images/icon-basket.png", alt: "basket" },
                { src: "../assets/images/icon-natation.png", alt: "natation" },
            ]
        });
        this.titleLineSpot = new TitleLine({ title: "SPOTS" });
        this.cardSpot = [
            {
                id: "1",
                nom: "GRADIN A",
                description: "La naissance de la natation remonte à la préhistoire, mais il faut attendre le 19e siècle pour que sa pratique devienne compétitive.....",
                image: "../assets/images/gradin.jpg"
            },
            {
                id: "2",
                nom: "BAR NORD",
                description: "La naissance de la natation remonte à la préhistoire, mais il faut attendre le 19e siècle pour que sa pratique devienne compétitive.....",
                image: "../assets/images/bar.jpg"
            }
        ]
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
                    props: { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 mx-40 mobil-margin", id: "sports" },
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

export default function renderLocationPage() {
    const locationPage = new LocationPage({ title: "ARENA PARIS SUD", city: "Paris", subtitle: "Site de compétition" });
    return Render.createElement(locationPage.render());
}
