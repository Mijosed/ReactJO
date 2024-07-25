import { Component } from "../../core/Component.js";

export class DatePicker extends Component {
    constructor(props = {}) {
        super(props);
    }

    render() {
        const containerClass = "relative w-full mx-auto my-8";

        return {
            tag: "div",
            props: { class: containerClass, id: this.props.id },
            children: [
                {
                    tag: "div",
                    props: { class: "flex items-center bg-white rounded-full shadow-lg transition-all duration-0 ease-in-out search-bar" },
                    children: [
                        {
                            tag: "input",
                            props: {
                                type: "date",
                                placeholder: "Date",
                                class: "flex-grow p-2 bg-transparent outline-none rounded-full font-olympicSans",
                            },
                            children: [],
                        },
                        // {
                        //     tag: "div",
                        //     props: { class: "flex items-center justify-center bg-white rounded-full w-8 h-8 mr-2 shadow-md" },
                        //     children: [
                        //         {
                        //             tag: "img",
                        //             props: {
                        //                 src: "../assets/icons/calendar.svg",
                        //                 alt: "Calendar Icon",
                        //                 class: "w-4 h-4",
                        //             },
                        //             children: [],
                        //         },
                        //     ],
                        // },
                    ],
                },
            ],
        };
    }
}
