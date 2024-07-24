import { Component } from "../../../core/Component.js";
import { Title } from "../../elements/Title.js";

export class SportComponent extends Component {
  constructor(props ={}) {
    super(props);
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

    // Extraire l'ID du sport depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const sportId = urlParams.get('id') || "2"; // Default to "2" if no ID is provided

    // Trouver le sport correspondant
    this.currentSport = this.sports.find(sport => sport.id === sportId) || this.sports[1]; // Default to the second sport if not found
  }

  render() {
    const TitleElement = new Title({ text: this.currentSport.nom });
    return {
      tag: "section",
      props: {},
      children: [
        {
          tag: "div",
          props: { class: "section-sport-view",
                   style: `background-image: url(${this.currentSport.image}); background-size: cover; background-position: center; height: 40vh`},
          children: [
            {
              tag: "div", props: { class: "logo-sport top-right", style:"text-align: right" }, children: [
                { tag: "img", props: { src: "../assets/images/logo-colore.png", alt: "logo", class: "logo-container", width:"100", style: "float: right;" } },
              ]
            },
            {
              tag: "div", props: { class: "title-sport bottom-left ", style:"text-align: left" }, children: [ TitleElement.render(), ]
            }
          ]
        },
      ]
    };
  }
}

export class SportCalendar extends Component {
  render() {
    const TitleElement = new Title({ text: "NATATION" });
    //const calendarElement = new CalendarComponent();
    return {
      tag: "section",
      props: {},
      children: [
        {
          tag: "div",
          props: { class: "section-sport-calendar" },
          children: [
            { tag: "div", props: { class: "logo-sport top-right" }, children: [
                // calendarElement.render()
              ]
            },
            {
              tag: "div", props: { class: "title-sport bottom-left " }, children: [
                { tag: "img", props: { src: "../assets/images/icon-sport.svg", width: "100", alt: "logo", class: "marge-bottom" }},
                { tag: "img", props: { src: "../assets/images/mascot.svg", alt: "logo", class: "marge-bottom" }}
              ]
            }
          ]
        },
      ]
    };
  }
}