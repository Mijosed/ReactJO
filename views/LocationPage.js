import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import {
    HeaderHome,
    Title,
    MapSection,
    Footer
} from '../components/Components.js';
import { validateProps } from '../utils/utils.js';

export class LocationPage extends Component {
    constructor(props) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                title: { type: 'string' }
            }
        };
        validateProps(props, propSchema);

        this.headerHome = new HeaderHome();
        this.titleElement = new Title({ text: props.title });
        this.mapElement = new MapSection();
        this.footerElement = new Footer();
    }

    render() {
        return {
            tag: "div",
            children: [
                this.headerHome.render(),
                this.titleElement.render(),
                this.mapElement.render(),
                this.footerElement.render()
            ]
        };
    }
}
