import { Component } from '../../core/Component.js';

export class Place extends Component {
    constructor(props = {}) {
    super(props);
       this.state = {items: props.state.items || []};
    }

   
    render() {
        return {
            tag: "div",
            props: { class: "flex justify-center m-4", id: this.props.id },
            children: [
                {
                    tag: "ul",
                    props: {
                        class: "w-10 h-10 flex-col items-center justify-center border border-blue-500 text-blue-500 rounded-full mx-1",
                    },
                    children: [this.state.items?.map((item) => ({
                        tag: "li",
                        props: {
                            
                        },
                        children: [item.nom_site]
                    })),]
                },
                
            ]
        };
    }
}
