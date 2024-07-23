import { Component } from "../../core/Component.js";
import { Card } from "../common/Card.js";

export class SportComponent extends Component {
  constructor(props = {}) {
    super(props);
  }
  render() {
    return {
      tag: "section",
      props: { id: "sports", class: "sports-container" },
      children: [
          "hello world"
      ],
    };
  }
}
