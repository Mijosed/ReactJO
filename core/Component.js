import { Render } from "./Render.js";
import { ErrorHandler } from '../errors/ErrorHandler.js';

export class Component {
    constructor(props = {}) {
        this.props = props;
        this.state = {};
        this.container = null;
        this.rerenderEvent = "rerender";
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.update();
    }

    update() {
        try {
            const root = document.getElementById(this.props.id || 'root');
            if (root) {
                root.replaceWith(this.renderDOM());
            }
        } catch (error) {
            ErrorHandler.handle(error);
        }
    }

    setContainer(container) {
        this.container = container;
    }

    getContainer() {
        return this.container;
    }

    addEventListener(event, callback) {
        if (this.container) {
            this.container.addEventListener(event, callback);
        }
    }

    shouldUpdate(newProps) {
        return JSON.stringify(this.props) !== JSON.stringify(newProps);
    }

    renderDOM() {
        const element = this.render();
        return Render.createElement(element);
    }

    display(newProps = this.props) {
        if (this.shouldUpdate(newProps)) {
            this.oldProps = this.props;
            this.props = newProps;
            return this.renderDOM();
        }
        return this.renderDOM();
    }

    render() {
        throw new Error('Render method should be implemented by subclass');
    }
}
