import { fetchData } from '../../../api/fetchData.js';
import { Component } from '../../../core/Component.js';
import {
    Card,
    HomeTitle,
    SearchBar,
    FilterButton,
    Pagination
} from '../../Components.js';
import { validateProps } from '../../../utils/utils.js';

export class SportSection extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            sports: [],
            loading: true,
            error: null,
        };

        this.titleElementSports = new HomeTitle({ text: "Les différents sports présents lors des JO", couleur: "black", id: "sports", textColor: "white" });
        this.SearchBar = new SearchBar();
        this.FilterButton = new FilterButton();
        this.pagination = new Pagination();

        this.getData();
    }

    async getData() {
        try {
            const data = await fetchData();
            const sports = data.results.map((sport) => ({
                id: sport.id,
                nom: sport.nom,
                description: sport.description,
                image: sport.image
            }));
            this.setState({ sports, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    }

    render() {
        const { sports, loading, error } = this.state;

        if (loading) {
            return {
                tag: "div",
                props: { id: "sports-section" },
                children: [{ tag: "p", props: {}, children: ["Loading..."] }]
            };
        }

        if (error) {
            return {
                tag: "div",
                props: { id: "sports-section" },
                children: [{ tag: "p", props: {}, children: [error] }]
            };
        }

        return {
            tag: "div",
            props: { id: "sports-section" },
            children: [
                this.titleElementSports.render(),
                {
                    tag: "div",
                    props: { id: "search", class: "flex justify-center z-50 w-full" },
                    children: [
                        this.FilterButton.render(),
                        this.SearchBar.render(),
                    ]
                },
                {
                    tag: "div",
                    props: { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-20", id: "sports" },
                    children: sports.map(sport => {
                        const propSchema = {
                            type: 'object',
                            properties: {
                                id: { type: 'string' },
                                nom: { type: 'string' },
                                description: { type: 'string' },
                                image: { type: 'string' }
                            }
                        };
                        validateProps(sport, propSchema);
                        const card = new Card(sport);
                        return card.render();
                    })
                },
                this.pagination.render()
            ]
        };
    }
}
