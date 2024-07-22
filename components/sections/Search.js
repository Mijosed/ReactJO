import { Component } from '../../core/Component.js';
import { MapComponent } from '../common/MapComponent.js';

export class Search extends Component {
    render() {
        return {
            tag: "section",
            props: { class: "search-container p-4 bg-white" },
            children: [
                {
                    tag: "div",
                    props: { class: "flex items-center space-x-4 search-barre" },
                    children: [
                        {
                            tag: "button",
                            props: {
                                type: "button",
                                class: "bg-white-500 hover:bg-blue-700 text-black font-bold py-2 px-4 simple-text border-button",
                                onClick: () => { window.location.href = '/#modal'; }
                            },
                            children: ["Filtrer"]
                        },
                        {
                            tag: "input",
                            props: { type: "text", placeholder: "Recherche...", class: "flex-grow p-2 border border-gray-300 simple-text" }
                        }
                    ]
                }
            ]
        };
    }
}
