import { Component } from '../../core/Component.js';

export class Line extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return {
            tag: "hr",
            props: { class: "custom-line" },
            children: []
        };
    }
}
