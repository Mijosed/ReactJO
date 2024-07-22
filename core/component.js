export class Component {
  #container;
  constructor(container, props = {}) {
    debugger
    this.#container = container;
    this.props = props;
    this.oldProps = {};
  }
  getContainer() {
    return this.#container;
  }
  shouldUpdate(newProps) {
    debugger;
    return JSON.stringify(this.props) !== JSON.stringify(newProps);
  }

  render() {
    return null;
  }

  display(newProps = this.props) {
    if (this.shouldUpdate(newProps)) {
      this.oldProps = this.props;
      this.props = newProps;
      return this.render();
    }
    return this.render();
  }
}
