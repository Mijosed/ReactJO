import { Component } from '../../core/Component.js';

export class SearchComponent extends Component {
    constructor(props ={}) {
        super(props);
    }
    render() {
        return {
            tag: "section",
            props: { class: "search-container p-4 bg-white" },
            children: [
                {
                    tag: "div",
                    props: { class: "flex items-center space-x-4 search-bar" },
                    children: [
                        {
                            tag: "input",
                            props: { type: "text", placeholder: "Recherche...", class: "flex-grow p-2 border border-gray-300" }
                        },
                        {
                            tag: "button",
                            props: {
                                type: "button",
                                class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                                onClick: () => { alert('Recherche initiée'); }
                            },
                            children: ["Rechercher"]
                        }
                    ]
                }
            ]
        };
    }
}
