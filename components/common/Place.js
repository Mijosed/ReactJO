import { Component } from '../../core/Component.js';

export class Place extends Component {
    constructor(props = {}) {
        super(props);
       
    }

   
    render() {
        console.log("item zinzin",this.state.items);
        return {
            tag: "div",
            props: { class: "flex justify-center m-4", id: this.props.id },
            children: [
                
            ]
        };
    }
}
