import { Component } from '../../core/Component.js';
import { Thumbnail } from './Thumbnail.js'; // Assurez-vous que le chemin est correct

export class Place extends Component {
    constructor(props = {}) {
        super(props);
        this.state = { items: props.state.items || [] };
    }

    render() {
        
        return {
            tag: "div",
            props: { class: "overflow-y-auto h-full", id: this.props.id },
            children: [
                {
                    tag: "ul",
                    props: {
                        class: "w-full",
                    },
                    children: this.state.items.map(item => ({
                        tag: "li",
                        props: { class: "list-none mb-4" },
                        children: [
                            new Thumbnail({
                                id: item.code_site,
                                title: item.nom_site,
                                image: item.image, 
                                onClick: () => console.log(`Clicked on ${item.nom_site}`)
                            }).render()
                        ]
                    }))
                }
            ]
        };
    }
}
