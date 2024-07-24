import { Component } from '../../core/Component.js';

export class SearchBar extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            query: '',
            items: [
                { id: 1, name: 'Apple' },
                { id: 2, name: 'Banana' },
                { id: 3, name: 'Cherry' },
                { id: 4, name: 'Date' },
                { id: 5, name: 'Fig' },
                { id: 6, name: 'Grape' }
            ],
            filteredItems: [],
            loading: false,
            message:"",
        };
    }
    
    handleInputChange(event) {
        debugger;
        const query = event.target.value;
        this.setState({
            query: query,
            filteredItems: query ? this.state.items.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            ) : [],
            message : query,
        });
    }

    toggleSearchBar(show) {
        const searchBar = document.querySelector('.search-bar');
        const resultsContainer = document.querySelector('.results-container');
        if (show) {
            searchBar.classList.add('rounded-t-3xl');
            searchBar.classList.remove('rounded-full');
            resultsContainer.classList.remove('hidden');
            resultsContainer.classList.add('rounded-b-3xl');
        } else {
            searchBar.classList.remove('rounded-t-3xl');
            searchBar.classList.add('rounded-full');
            resultsContainer.classList.add('hidden');
            resultsContainer.classList.remove('rounded-b-3xl');
        }
    }

    render() {
        const { query, filteredItems } = this.state;

        let resultsContent;
        if (!query) {
            resultsContent = [
                {
                    tag: "div",
                    props: { class: "p-2 text-gray-500" },
                    children: [{ tag: "span", props: { class: "font-olympicSans" }, children: [this.state.message === "" ? "Rechercher un emplacment" : this.state.message] }]
                }
            ];
        } else if (filteredItems.length > 0) {
            resultsContent = filteredItems.map(item => ({
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
            props: { class: "relative w-1/2 mx-auto my-8" },
            children: [
                {
                    tag: "div",
                    props: { class: "flex items-center bg-white rounded-full shadow-lg transition-all duration-0 ease-in-out search-bar" },
                    children: [
                        {
                            tag: "input",
                            props: {
                                type: "text",
                                placeholder: "Saisissez votre recherche...",
                                class: "flex-grow p-2 bg-transparent outline-none rounded-full font-olympicSans",
                                value: query,
                                onInput: (event) => this.handleInputChange(event),
                                onFocus: () => this.toggleSearchBar(true),
                                onBlur: () => setTimeout(() => this.toggleSearchBar(false), 200) // Délai pour fermer après le clic à l'extérieur
                            },
                            children: []
                        },
                        {
                            tag: "div",
                            props: { class: "flex items-center justify-center bg-white rounded-full w-8 h-8 mr-2 shadow-md" },
                            children: [
                                {
                                    tag: "img",
                                    props: {
                                        src: "../assets/icons/search.svg",
                                        alt: "Search Icon",
                                        class: "w-4 h-4"
                                    },
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: "div",
                    props: {
                        class: "absolute left-0 w-full mt-1 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-b-lg shadow-lg hidden results-container"
                    },
                    children: resultsContent
                }
            ]
        };
    }
}
