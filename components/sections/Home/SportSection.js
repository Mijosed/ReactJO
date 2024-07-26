import { fetchSportsData } from '../../../api/fetchSportsData.js';
import { Component } from '../../../core/Component.js';
import {
    Card,
    HomeTitle,
    Pagination
} from '../../Components.js';
import { validateProps } from '../../../utils/typeCheck.js';

export class SportSection extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            sports: props.sports || [],
            loading: !props.sports,
            error: null,
            currentPage: 1,
            itemsPerPage: 8,
        };
        this.id = props.id || "sports-section";
        this.titleElementSports = new HomeTitle({ text: "Les différents sports présents lors des JO", couleur: "black", id: "sports", textColor: "white" });
        this.pagination = new Pagination({
            id: "sports-pagination",
            state: {
                totalItems: this.state.sports.length,
                itemsPerPage: this.state.itemsPerPage,
                currentPage: this.state.currentPage,
            },
            onPageChange: this.handlePageChange.bind(this)
        });

        if (!props.sports) {
            this.loadSportsData();
        }
    }

    async loadSportsData() {
        try {
            const data = await fetchSportsData();
            this.setState({ sports: data.sports, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    }

    handlePageChange(pageNumber) {
        this.setState({ currentPage: pageNumber });
    }

    navigateToSport(sport) {
        window.history.pushState({}, '', `/sports/${sport.nom.toLowerCase()}`);
        const event = new PopStateEvent('popstate');
        window.dispatchEvent(event);
    }

    render() {
        const { sports, loading, error, currentPage, itemsPerPage } = this.state;

        if (loading) {
            return {
                tag: "div",
                props: { id: this.id },
                children: [{ tag: "p", props: {}, children: ["Loading..."] }]
            };
        }

        if (error) {
            return {
                tag: "div",
                props: { id: this.id },
                children: [{ tag: "p", props: {}, children: [error] }]
            };
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const sportsToDisplay = sports.slice(startIndex, endIndex);

        return {
            tag: "div",
            props: { id: this.id },
            children: [
                this.titleElementSports.render(),
                {
                    tag: "div",
                    props: { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-20", id: "sports" },
                    children: sportsToDisplay.map(sport => {
                        const propSchema = {
                            type: 'object',
                            properties: {
                                id: { type: 'string' },
                                nom: { type: 'string' },
                                description: { type: 'string' },
                                image: { type: 'string' },
                                lien: { type: 'string' },
                                gradientColor: { type: 'string' },
                                onClick: { type: 'function' }
                            },
                            required: ['id', 'nom', 'description', 'image', 'onClick']
                        };

                        const cardProps = {
                            ...sport,
                            lien: `/sports/${sport.nom.toLowerCase()}`,
                            gradientColor: "blue",
                            onClick: () => this.navigateToSport(sport)
                        };

                        try {
                            validateProps(cardProps, propSchema);
                            const card = new Card(cardProps);
                            return card.render();
                        } catch (error) {
                            console.error('Invalid props provided:', error);
                            return {
                                tag: "div",
                                props: { class: "error-message" },
                                children: [error.message]
                            };
                        }
                    })
                },
                this.pagination.render()
            ]
        };
    }
}
