import { Component } from '../../../core/Component.js';
import { SearchBar, FilterButton, MapSearchMenu } from '../../Components.js';

export class MapSection extends Component {
    constructor(props = {}) {
        super(props);
        this.isMenuOpen = false;
        this.SearchBar = new SearchBar();
        this.FilterButton = new FilterButton();
        this.MapSearchMenu = new MapSearchMenu();
    }

    toggleMenu(event) {
        event.stopPropagation();
        this.isMenuOpen = !this.isMenuOpen;
        const menuElement = document.getElementById('map-search-menu');
        const searchElement = document.getElementById('search');
        const toggleButton = document.getElementById('menu-toggle-button');
        const toggleIcon = document.getElementById('toggle-icon');

        if (this.isMenuOpen) {
            menuElement.style.display = 'block';
            setTimeout(() => {
                const menuWidth = menuElement.offsetWidth;
                menuElement.classList.remove('-translate-x-full');
                menuElement.classList.add('translate-x-0');
                menuElement.style.transition = 'transform 0.4s ease-in-out';
                toggleButton.style.transform = `translateX(${menuWidth}px)`;
                toggleIcon.style.transform = 'rotate(180deg)';
            }, 2);
            searchElement.style.display = 'none';
        } else {
            setTimeout(() => {
                menuElement.classList.remove('translate-x-0');
                menuElement.classList.add('-translate-x-full');
                menuElement.style.transition = 'transform 0.4s ease-in-out';
                toggleButton.style.transform = 'translateX(0)';
                toggleIcon.style.transform = 'rotate(0deg)';
                searchElement.style.display = 'flex';
            }, 2);
        }
    }

    handleOutsideClick(event) {
        const menuElement = document.getElementById('map-search-menu');
        const toggleButton = document.getElementById('menu-toggle-button');
        if (this.isMenuOpen && !menuElement.contains(event.target) && event.target !== toggleButton) {
            this.toggleMenu(event);
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick.bind(this));
    }

    render() {
        return {
            tag: "div",
            props: { id: "map-section", class: "relative" },
            children: [
                {
                    tag: "div",
                    props: {
                        class: "absolute top-1/2 transform -translate-y-1/2 z-50 transition-all duration-150 ease-in-out",
                        style: "left: 0;"
                    },
                    children: [
                        {
                            tag: "button",
                            props: {
                                id: "menu-toggle-button",
                                class: "bg-white text-black rounded-r-xl py-6 shadow-lg",
                                onClick: this.toggleMenu.bind(this),
                                style: "transition: transform 0.4s ease-in-out;",
                            },
                            children: [
                                {
                                    tag: "img",
                                    props: {
                                        id: "toggle-icon",
                                        src: "../assets/icons/triangle.svg",
                                        alt: "Toggle Menu",
                                        class: "w-6 h-6",
                                        style: "transition: transform 0.4s ease-in-out;"
                                    },
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                this.MapSearchMenu.render(),
                {
                    tag: "div",
                    props: { id: "search", class: "absolute flex justify-center z-40 w-full" },
                    children: [
                        this.FilterButton.render(),
                        this.SearchBar.render(),
                    ]
                },
                {
                    tag: "div",
                    props: { id: "map", class: "h-[85vh] z-10", style: "width: 100%;" },
                    children: []
                }
            ]
        };
    }
}
