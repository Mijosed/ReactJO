import { Component } from '../core/Component.js';
import { CardComponent } from "./CardComponent.js";
//import { Connexion } from "../database/Connexion.js";

export class SportComponent extends Component {
    render() {
        const cardComponent = new CardComponent("id", "nom", "description", "sport");
        return {
            tag: "div",
            props: {},
            children: [
                cardComponent.render()
            ]
        };
    }

    /*constructor() {
        super();
        this.connexion = new Connexion(); // Correctement défini ici
    }

    render() {
        // Exemple d'utilisation de la connexion pour obtenir des données
        const sportsData = this.connexion.query("SELECT * FROM Sports");

        const cardComponents = sportsData.map(sport =>
            new CardComponent(sport.id, sport.nom, sport.description)
        );

        return {
            tag: "div",
            props: {},
            children: cardComponents.map(component => component.render())
        };
    }*/
}