import { Component } from '../../../core/Component.js';
import { validateProps } from '../../../utils/utils.js';
import {
    Card,
    HomeTitle,
    SearchBar,
    FilterButton,
    Pagination
 } from '../../Components.js';
export class SportSection extends Component {
    
    constructor(props ={}) {
        super(props);
        this.titleElementSports = new HomeTitle({ text: "Les différents sports présents lors des JO", couleur: "black", id: "sports", textColor: "white" });
        this.SearchBar = new SearchBar();
        this.FilterButton = new FilterButton();
        this.sports = [
            { id: "1", nom: "Athlétisme", description: "Compétitions d'athlétisme", image: "../assets/images/sports/athle.jpg" },
            { id: "2", nom: "Natation", description: "Compétitions de natation", image: "../assets/images/sports/natation.jpg" },
            { id: "3", nom: "Basketball", description: "Compétitions de basketball", image: "../assets/images/sports/basket.jpg" },
            { id: "4", nom: "Football", description: "Compétitions de football", image: "../assets/images/sports/foot.jpg" },
            { id: "5", nom: "Gymnastique", description: "Compétitions de gymnastique", image: "../assets/images/sports/gym.jpg" },
            { id: "6", nom: "Tennis", description: "Compétitions de tennis", image: "../assets/images/sports/tennis.jpg" },
            { id: "7", nom: "Boxe", description: "Compétitions de boxe", image: "../assets/images/sports/boxe.jpg" },
            { id: "8", nom: "Cyclisme", description: "Compétitions de cyclisme", image: "../assets/images/sports/cyclisme.jpg" }
        ];
        this.pagination = new Pagination();
        
    }

    render() {
        return {
            tag:"div",
            props:{id: "sports-section"},
            children:[
                this.titleElementSports.render(),
                {
                    tag: "div",
                    props: { id: "search", class: " flex justify-center z-50 w-full" },
                    children: [
                        this.FilterButton.render(),
                        this.SearchBar.render(),
                    ]
                },
                {
                    tag: "div",
                    props: { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-20", id: "sports" },
                    children: this.sports.map(sport => {
                        const card = new Card(sport);
                        return card.render();
                    })
                },
                this.pagination.render()
                    
            ]
        }
    }
}

// url : ../../../database/sports.json