import { Component } from "../../core/Component.js";

export class MenuBurger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        // Bind the toggleMenu method
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        console.log("Toggling menu. Current state:", this.state.isOpen);
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const menuContent = this.state.isOpen ? {
            tag: "div",
            props: { class: "menu-content", style: "position: absolute; left: 0; top: 100%; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" },
            children: [
                { tag: "a", props: { href: "/#map", class: "menu-item" }, children: ["Explorer les sites"] },
                { tag: "a", props: { href: "/#sports", class: "menu-item" }, children: ["Decouvrir les disciplines"] },
            ]
        } : { tag: "div", children: [] };

        return {
            tag: "div",
            props: { class: "menu-burger-container", style: "position: relative;" },
            children: [
                {
                    tag: "div",
                    props: { class: "burger-icon", style: "cursor: pointer;" },
                    events: {
                        click: this.toggleMenu
                    },
                    children: []
                },
                menuContent
            ]
        };
    }
}
