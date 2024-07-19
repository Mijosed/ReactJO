export class Component {
    constructor(props = {}) {
        this.props = props;
        this.oldProps = {};
    }

    shouldUpdate(newProps) {
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
