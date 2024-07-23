import { Component } from '../core/Component.js';
import { 
    HeaderLocation,
    Footer
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
    }

    render() {
        return {
            tag: "div",
            children: [
                this.headerLocation.render(),
                this.footer.render()
            ]
        };
    }
}

export default function renderLocationPage() {
    const locationPage = new LocationPage({ title: "ARENA PARIS SUD", city: "Paris", subtitle: "Site de compétition" });
    return Render.createElement(locationPage.render());
}
