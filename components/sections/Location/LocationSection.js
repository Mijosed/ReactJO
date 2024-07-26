import { fetchLocationData } from '../../../api/fetchLocationData.js';
import { Component } from '../../../core/Component.js';
import { Card, HomeTitle, Pagination } from '../../Components.js';
import { validateProps } from '../../../utils/typeCheck.js';

export class LocationSection extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            locations: props.locations || [],
            loading: !props.locations,
            error: null,
            currentPage: 1,
            itemsPerPage: 8,
        };
        this.id = props.id || "location-section";
        this.titleElementLocations = new HomeTitle({ text: "Les différents lieux", couleur: "black", id: "locations", textColor: "white" });
        this.pagination = new Pagination({
            id: "locations-pagination",
            state: {
                totalItems: this.state.locations.length,
                itemsPerPage: this.state.itemsPerPage,
                currentPage: this.state.currentPage,
            },
            onPageChange: this.handlePageChange.bind(this)
        });

        if (!props.locations) {
            this.loadLocationData();
        }
    }

    async loadLocationData() {
        try {
            const data = await fetchLocationData();
            this.setState({ locations: data.locations, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    }

    handlePageChange(pageNumber) {
        this.setState({ currentPage: pageNumber });
    }

    navigateToLocation(location) {
        window.history.pushState({}, '', `/locations/${location.name.toLowerCase()}`);
        const event = new PopStateEvent('popstate');
        window.dispatchEvent(event);
    }

    render() {
        const { locations, loading, error, currentPage, itemsPerPage } = this.state;

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
        const locationsToDisplay = locations.slice(startIndex, endIndex);

        return {
            tag: "div",
            props: { id: this.id },
            children: [
                this.titleElementLocations.render(),
                {
                    tag: "div",
                    props: { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-20", id: "locations" },
                    children: locationsToDisplay.map(location => {
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
                            id: location.name,
                            nom: location.title,
                            description: location.description,
                            image: location.image,
                            lien: `/locations/${location.name.toLowerCase()}`,
                            gradientColor: "blue",
                            onClick: () => this.navigateToLocation(location)
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
