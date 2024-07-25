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
                { tag: "a", props: { href: "#", class: "menu-item" }, children: ["Home"] },
                { tag: "a", props: { href: "#", class: "menu-item" }, children: ["About"] },
                { tag: "a", props: { href: "#", class: "menu-item" }, children: ["Services"] },
                { tag: "a", props: { href: "#", class: "menu-item" }, children: ["Contact"] },
            ]
        } : { tag: "div", children: [] }; // Ensure it's never null

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
                    children: [
                        { tag: "div", props: { class: "line" } },
                        { tag: "div", props: { class: "line" } },
                        { tag: "div", props: { class: "line" } },
                    ]
                },
                menuContent
            ]
        };
    }
}
