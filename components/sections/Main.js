import { Component } from '../../core/Component.js';
import { Header } from '../common/Header.js';

export class Main extends Component {
    render() {
        const headerElement = new Header();
        return {
            tag: "main",
            props: {},
            children: [
                headerElement.render()
            ]
        };
    }
}
