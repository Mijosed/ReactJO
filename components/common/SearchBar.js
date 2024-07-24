import { Component } from '../../core/Component.js';

export class SearchBar extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            query: '',
            results: [],
            showResults: false,
            data: []
        };
    }

    componentDidMount() {
        fetch('../../database/data.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            })
            .catch(error => {
                console.error('Erreur lors du chargement des données:', error);
            });
    }

    handleInput(event) {
        const query = event.target.value;
        const results = query ? this.search(query) : [];
        this.setState({
            query,
            results,
            showResults: true
        });
    }

    search(query) {
        return this.state.data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    }

    handleClick() {
        this.setState({
            showResults: true
        });
    }

    handleBlur() {
        setTimeout(() => {
            this.setState({
                showResults: false
            });
        }, 100);
    }

    render() {
        const { query, results, showResults } = this.state;

        return {
            tag: "div",
            props: { class: "relative w-full" },
            children: [
                {
                    tag: "div",
                    props: {
                        class: "flex items-center bg-white rounded-t-full shadow-lg p-2 w-1/2",
                        onClick: this.handleClick.bind(this),
                        onBlur: this.handleBlur.bind(this)
                    },
                    children: [
                        {
                            tag: "input",
                            props: {
                                type: "text",
                                placeholder: "Saisissez votre recherche...",
                                class: "flex-grow p-2 bg-transparent outline-none rounded-full",
                                onInput: this.handleInput.bind(this),
                                value: query
                            },
                            children: []
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
                                        src: "../assets/icons/search.svg",
                                        alt: "Search Icon",
                                        class: "w-4 h-4 text-black"
                                    },
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                showResults ? {
                    tag: "div",
                    props: {
                        class: "absolute left-0 right-0 bg-white shadow-lg rounded-b-lg mt-1 z-10 max-h-60 overflow-y-auto"
                    },
                    children: [
                        ...results.length ? results.map(result => ({
                            tag: "div",
                            props: { class: "p-2 hover:bg-gray-200 cursor-pointer" },
                            children: [result.name]
                        })) : [{
                            tag: "div",
                            props: { class: "p-2 text-gray-500" },
                            children: ["Aucun résultat trouvé"]
                        }]
                    ]
                } : null
            ]
        };
    }
}
