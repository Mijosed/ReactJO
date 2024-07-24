import { Component } from '../../core/Component.js';

export class SearchBarResult extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            query: props.query || '',
            items: props.items || [],
            loading: false
        };
    }

    update(newProps) {
        this.setState(newProps);
    }

    render() {
        const { query, items } = this.state;

        let resultsContent;
        if (!query) {
            resultsContent = [
                {
                    tag: "div",
                    props: { class: "p-2 text-gray-500" },
                    children: [{ tag: "span", props: { class: "font-olympicSans" }, children: ['Rechercher un emplacement ou un sport'] }]
                }
            ];
        } else if (items.length > 0) {
            resultsContent = items.map(item => ({
                tag: "div",
                props: { class: "p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer" },
                children: [{ tag: "span", props: {}, children: [item.name] }]
            }));
        } else {
            resultsContent = [
                {
                    tag: "div",
                    props: { class: "p-2 text-gray-500" },
                    children: [{ tag: "span", props: { class: "font-olympicSans" }, children: ['Aucun résultat trouvé'] }]
                }
            ];
        }

        return {
            tag: "div",
            props: {
                class: "absolute left-0 w-full mt-1 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-b-lg shadow-lg hidden results-container"
            },
            children: resultsContent
        };
    }
}
