import { Component } from '../../core/Component.js';
import { MapComponent } from '../common/MapComponent.js';

export class MapSection extends Component {
    render() {
        const mapComponent = new MapComponent();
        return {
            tag: "section",
            props: { id: "map-section", class: "map-container" },
            children: [
                mapComponent.render()
            ]
        };
    }
}
