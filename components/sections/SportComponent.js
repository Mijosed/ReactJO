import { Component } from "../../core/Component.js";
import { Card } from "../common/Card.js";

export class SportComponent extends Component {
  constructor(props = {}) {
    super(props);
  }
  render() {
    const cardComponent = new Card({ id: "1", nom: "Athlétisme", description: "Compétitions d'athlétisme", tag: "sport" });
    return {
      tag: "section",
      props: { id: "sports", class: "sports-container" },
      children: [cardComponent.render()],
    };
  }
}
