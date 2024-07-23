import { Component } from '../core/Component.js';
import { 
    HeaderLocation,
    Footer,
    Breadcrumb,
    Text
 } from '../components/Components.js';
import { validateProps } from '../utils/utils.js';

export class LocationPage extends Component {
    constructor(props) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                title: { type: 'string' },
                city: { type: 'string' },
                subtitle: { type: 'string' }
            }
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
        this.textPresLieu = new Text({ text: "L'Arena Paris Sud fait partie de Paris Expo,centre d'exposition et de convention parmi les plus actifs d'Europe et le plus fréquenté de France. Paris Expo c'est une zone de 35 hectares, 228'000m² de halls d'exposition, 7 pavillons qui accueille 7,5 millions de visiteurs chaque année, notamment lors du célèbre Salon de l'agriculture. Avec les Halls 1, 4 et 6 qui accueilleront de nombreuses épreuves, et certains halls réservés aux aspects logistiques des Jeux, Paris Expo constitue l'un  des pôles majeurs des Jeux de Paris 2024." });
    }

    render() {
        return {
            tag: "div",
            children: [
                this.headerLocation.render(),
                this.breadcrumb.render(),
                this.textPresLieu.render(),
                this.footer.render(),
            ]
        };
    }
}

export default function renderLocationPage() {
    const locationPage = new LocationPage({ title: "ARENA PARIS SUD", city: "Paris", subtitle: "Site de compétition" });
    return Render.createElement(locationPage.render());
}
