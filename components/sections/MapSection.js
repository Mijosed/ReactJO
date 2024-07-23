import { Component } from '../../core/Component.js';

export class MapSection extends Component {
    constructor(props ={}) {
        super(props);
    }
    
    render() {
        return {
            tag: "div",
            props: { id: "map", style:"height: 400px; width: 100%;" },
            children: [
                
            ]
        };
    }
}
