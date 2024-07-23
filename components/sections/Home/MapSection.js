import { Component } from '../../../core/Component.js';
import {
   SearchBar,
   FilterButton
} from '../../Components.js';
export class MapSection extends Component {
    constructor(props ={}) {
        super(props);
        this.SearchBar = new SearchBar();
        this.FilterButton = new FilterButton();
    }

    render() {
        return {
            tag: "div",
            props: { id: "map-section relative"},
            children: [
                {
                    tag: "div",
                    props: { id: "search", class: " absolute flex justify-center z-50 w-full" },
                    children: [
                        this.FilterButton.render(),
                        this.SearchBar.render(),
                    ]
                },
                
                {
                    tag: "div",
                    props: { id: "map",class:"h-[85vh]", style:" width: 100%; z-40 position:absolute; z-index:40;" },
                    children: []
                }
            ]
            
        };
    }
}
