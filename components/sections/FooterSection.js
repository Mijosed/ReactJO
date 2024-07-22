import { Component } from '../../core/Component.js';
import { Footer } from '../common/Footer.js';

export class FooterSection extends Component {
    render() {
        const footerComponent = new Footer();
        return {
            tag: "footer",
            props: {},
            children: [
                footerComponent.render()
            ]
        };
    }
}
