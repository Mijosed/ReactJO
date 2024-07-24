import { fetchData } from '../../../api/fetchData.js';
import { Component } from '../../../core/Component.js';
import {
    Card,
    HomeTitle,
    SearchBar,
    FilterButton,
    Pagination
} from '../../Components.js';
import { validateProps } from '../../../utils/typeCheck.js';

export class SportSection extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            sports: [
                { id: "1", nom: "Athlétisme", description: "Compétitions d'athlétisme", image: "../assets/images/sports/athle.jpg" },
                { id: "2", nom: "Natation", description: "Compétitions de natation", image: "../assets/images/sports/natation.jpg" },
                { id: "3", nom: "Basketball", description: "Compétitions de basketball", image: "../assets/images/sports/basket.jpg" },
                { id: "4", nom: "Football", description: "Compétitions de football", image: "../assets/images/sports/foot.jpg" },
                { id: "5", nom: "Gymnastique", description: "Compétitions de gymnastique", image: "../assets/images/sports/gym.jpg" },
                { id: "6", nom: "Tennis", description: "Compétitions de tennis", image: "../assets/images/sports/tennis.jpg" },
                { id: "7", nom: "Boxe", description: "Compétitions de boxe", image: "../assets/images/sports/boxe.jpg" },
                { id: "8", nom: "Cyclisme", description: "Compétitions de cyclisme", image: "../assets/images/sports/cyclisme.jpg" },
                { id: "8", nom: "Cyclisme", description: "Compétitions de cyclisme", image: "../assets/images/sports/cyclisme.jpg" },
                { id: "9", nom: "Cyclismetest", description: "Compétitions de cyclismedsdzs", image: "../assets/images/sports/cyclisme.jpg" },

            ],
            loading: false,
            error: null,
            currentPage: 1,
            itemsPerPage: 8
        };

        this.titleElementSports = new HomeTitle({ text: "Les différents sports présents lors des JO", couleur: "black", id: "sports", textColor: "white" });
        //this.SearchBar = new SearchBar();
        //this.FilterButton = new FilterButton();
        this.pagination = new Pagination({
            id: "sports-pagination",
            totalItems: this.state.sports.length,
            itemsPerPage: this.state.itemsPerPage,
            currentPage: this.state.currentPage,
            onPageChange: this.handlePageChange.bind(this)
        });
    }
    handlePageChange(pageNumber) {
        this.setState({ currentPage: pageNumber });
    }

    render() {
        const { sports, loading, error, currentPage, itemsPerPage } = this.state;

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

        // Calculate the items to display on the current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const sportsToDisplay = sports.slice(startIndex, endIndex);

        return {
            tag: "div",
            props: { id: "sports-section" },
            children: [
                this.titleElementSports.render(),
                {
                    tag: "div",
                    props: { id: "search", class: "flex justify-center z-50 w-full" },
                    children: [
                        //this.FilterButton.render(),
                        //this.SearchBar.render(),
                    ]
                },
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
