import { fetchLocationData } from '../../../api/fetchLocationData.js';
import { Component } from '../../../core/Component.js';
import { Card, HomeTitle, Pagination } from '../../Components.js';
import { validateProps } from '../../../utils/typeCheck.js';

export class LocationSection extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            locations: [],
            loading: true,
            error: null,
            currentPage: 1,
            itemsPerPage: 8,
        };
        this.id = props.id || "locations-section";
        this.titleElementLocations = new HomeTitle({ text: "Les différents lieux de compétition", couleur: "black", id: "locations", textColor: "white" });
        this.pagination = new Pagination({
            id: "locations-pagination",
            state: {
                totalItems: this.state.locations.length,
                itemsPerPage: this.state.itemsPerPage,
                currentPage: this.state.currentPage,
            },
            onPageChange: this.handlePageChange.bind(this)
        });

        this.loadLocationData();
    }

    async loadLocationData() {
        try {
            console.log("Fetching location data...");
            const data = await fetchLocationData();
            console.log("Fetched data:", data);
            this.setState({ locations: data.locations, loading: false });
        } catch (error) {
            console.log("Error loading location data:", error);
            this.setState({ error: error.message, loading: false });
        }
    }

    handlePageChange(pageNumber) {
        this.setState({ currentPage: pageNumber });
    }

    navigateToLocation(location) {
        console.log(`Navigating to location: ${location.name}`);
        window.history.pushState({}, '', `/locations/${location.name.toLowerCase()}`);
        window.dispatchEvent(new Event('popstate'));
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
                                name: { type: 'string' },
                                title: { type: 'string' },
                                description: { type: 'string' },
                                image: { type: 'string' },
                                subtitle: { type: 'string' },
                                city: { type: 'string' }
                            },
                            required: ['name', 'title', 'description', 'image', 'subtitle', 'city']
                        };
                        try {
                            validateProps(location, propSchema);
                        } catch (error) {
                            console.log("Invalid props for location:", location, error);
                        }
                        const card = new Card({
                            id: location.name,
                            nom: location.title,
                            description: location.description,
                            image: location.image,
                            lien: `/locations/${location.name.toLowerCase()}`,
                            onClick: () => this.navigateToLocation(location)
                        });
                        return card.render();
                    })
                },
                this.pagination.render()
            ]
        };
    }
}
