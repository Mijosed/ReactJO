import { notify } from "./dispatcher.js";

export class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.currentNode = {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    
    // Dispatch a custom event when the state changes
    const event = new CustomEvent("stateChange", {
      detail: {
        component: this,
        state: this.state,
        currentNode: this.currentNode,
        newNode: this.render(),
      },
    });
    document.dispatchEvent(event);
  }

  render() {
    return {};
  }
}
