import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import {
    HeaderHome,
    Title,
    SportComponent,
    Footer
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

        this.headerHome = new HeaderHome();
        this.titleElement = new Title({ text: props.title });
        this.sportElement = new SportComponent();
        this.footerElement = new Footer();
    }

    render() {
        return {
            tag: "div",
            children: [
                this.headerHome.render(),
                this.titleElement.render(),
                this.sportElement.render(),
                this.footerElement.render()
            ]
        };
    }
}

