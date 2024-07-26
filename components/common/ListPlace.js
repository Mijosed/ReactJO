import { Component } from '../../core/Component.js';
import { SearchBar } from './SearchBar.js';

export class ListPlace extends Component {
    constructor(props = {}) {
        super(props);
        this.SearchBar = new SearchBar({id:"search-bar-place", state: {  items: this.state.data, }});

    }

    render() {
        console.log(this.state.data);

        return {
            tag: "div",
            props: { class: "flex items-center bg-white text-black rounded-full shadow-lg m-8 p-2 w-max left-50 ",id: this.props.id },
            children: [
                {
                    
                }
            ]
        };
    }
}
