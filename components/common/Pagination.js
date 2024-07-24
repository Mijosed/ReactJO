import { Component } from '../../core/Component.js';

export class Pagination extends Component {
    constructor(props = {}) {
        super(props);
    }

    render() {
        return {
            tag: "div",
            props: { class: "flex justify-center mt-4" },
            children: [
                {
                    tag: "button",
                    props: { class: "w-10 h-10 flex items-center justify-center border border-blue-500 text-blue-500 rounded-full mx-1" },
                    children: ["<"]
                },
                ...Array(10).fill(0).map((_, i) => ({
                    tag: "button",
                    props: { class: "w-10 h-10 flex items-center justify-center border border-blue-500 text-blue-500 rounded-full mx-1" },
                    children: [(i + 1).toString()]
                })),
                {
                    tag: "button",
                    props: { class: "w-10 h-10 flex items-center justify-center border border-blue-500 text-blue-500 rounded-full mx-1" },
                    children: [">"]
                }
            ]
        };
    }
}
