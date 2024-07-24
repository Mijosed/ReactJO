import { Component } from '../../core/Component.js';

export class SearchBar extends Component {
    constructor(props = {}) {
        super(props);
    }

    render() {
        return {
            tag: "div",
            props: { class: "flex items-center bg-white rounded-full shadow-lg m-8 p-2 w-1/2" },
            children: [
                {
                    tag: "input",
                    props: {
                        type: "text",
                        placeholder: "Recherche...",
                        class: "flex-grow p-2 bg-transparent outline-none rounded-full"
                    },
                    children: []
                },
                {
                    tag: "div",
                    props: {
                        class: "flex items-center justify-center bg- rounded-full w-8 h-8 ml-2 shadow-md"
                    },
                    children: [
                        {
                            tag: "img",
                            props: {
                                src: "../assets/icons/search.svg", // Path to the search icon
                                alt: "Search Icon",
                                class: "w-4 h-4 text-black"
                            },
                            children: []
                        }
                    ]
                }
            ]
        };
    }
}
