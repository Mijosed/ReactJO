import { Component } from "../../core/Component.js";
import { validateProps } from "../../utils/typeCheck.js";

export class Calendar extends Component {
    #day;
    #month;
    #time;
    #category;
    #location;

    constructor(props) {
        super(props);
        const propSchema = {
            type: "object",
            properties: {
                day: { type: "string" },
                month: { type: "string" },
                time: { type: "string" },
                category: { type: "string" },
                location: { type: "string" },
            },
        };
        this.#day = props.day;
        this.#month = props.month;
        this.#time = props.time;
        this.#category = props.category;
        this.#location = props.location;
        validateProps(props, propSchema);
    }

    createCalendarDiv() {
        return {
            tag: "div",
            props: { class: "flex bg-white shadow border calendar", id: "calendar",
                style: "border-radius: 10px; display: flex; flex-direction: row;" },
            children: [
                {
                    tag: "div",
                    props: { class: "object-cover bg-[#0078D0] h-full p-2.5 text-[#FFB114] rounded-l-[10px] red-on-mobil",
                        style: "text-align: center;" },
                    children: [
                        { tag: "div", props: {}, children: ["Vendredi"] },
                        { tag: "div", props: { class: "text-white text-2xl" }, children: [this.#day] },
                        { tag: "div", props: {}, children: [this.#month] },
                    ]
                },
                {
                    tag: "div",
                    props: { style: "text-align: left; padding: 10px;" },
                    children: [
                        { tag: "div", props: { class: "simple-text" }, children: ["A 20km de Paris"] },
                        { tag: "div", props: {}, children: [this.#time] },
                        { tag: "div", props: { class: "text-[#9E9E9E]" }, children: [this.#category] },
                        {
                            tag: "div",
                            props: { class: "mb-2 flex items-center" },
                            children: [
                                {
                                    tag: "img",
                                    props: {
                                        src: "../assets/icons/position-bl.svg",
                                        alt: "Position Icon",
                                        class: "w-6 h-6 mr-2"
                                    },
                                    children: []
                                },
                                this.#location,
                            ],
                        }
                    ]
                },
            ],
        };
    }

    render() {
        return {
            tag: "div",
            props: { class: "overflow-hidden mx-40 my-5 flex", style: "display: flex;" },
            children: [
                {
                    tag: "div",
                    props: { class: "flex flex-col", style: "flex: 1;" },
                    children: [
                        this.createCalendarDiv(),
                    ],
                }
            ],
        };
    }
}
