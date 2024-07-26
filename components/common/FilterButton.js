import { Component } from '../../core/Component.js';

export class FilterButton extends Component {
    constructor(props = {}) {
        super(props);
    }

    render() {
        return {
            tag: "div",
            props: { class: "flex items-center bg-white text-black rounded-full shadow-lg m-8 p-2 w-max left-50 cursor-pointer" },
            children: [
                {
                    tag: "span",
                    props: {
                        class: "px-4"
                    },
                    children: ["Filtrer"]
                },
                {
                    tag: "div",
                    props: {
                        class: "flex items-center justify-center bg-white rounded-full w-8 h-8 ml-2 shadow-md"
                    },
                    children: [
                        {
                            tag: "img",
                            props: {
                                src: "../assets/icons/filter.svg", // Path to the filter icon
                                alt: "Filter Icon",
                                class: "w-4 h-4 text-white"
                            },
                            children: []
                        }
                    ]
                }
            ]
        };
    }
}
