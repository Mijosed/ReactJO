import { Component } from '../../../core/Component.js';
import { Place } from './Place.js';
 
export class MapSearchMenu extends Component {
    constructor(props = {}) {
        super(props);
        
        this.place = new Place({id: "place", state: {items:this.props.state.items}});
    }


    render() {
        return {
            tag: "div",
            props: {
                id: "map-search-menu",
                class: "absolute left-0 top-1/2 transform -translate-y-1/2 h-5/6 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform -translate-x-full rounded-tr-lg rounded-br-lg bottom-mobil",
                style: "display: none; width: 30%;",
            },
            children: [
                {
                    tag: "div",
                    props: { class: "p-4 flex justify-between items-center" },
                    children: [
                        { tag: "h2", props: { class: "text-xl font-bold mb-4" }, children: ["Menu"] },
                        {
                            tag: "button",
                            props: {
                                id: "close-menu-button",
                                class: "text-black",
                                onClick: (event) => {
                                    event.stopPropagation();
                                    const menuElement = document.getElementById('map-search-menu');
                                    const toggleButton = document.getElementById('menu-toggle-button');
                                    const toggleIcon = document.getElementById('toggle-icon');
                                    menuElement.classList.add('-translate-x-full');
                                    setTimeout(() => {
                                        menuElement.classList.remove('translate-x-0');
                                        menuElement.style.transition = 'transform 0.4s ease-in-out';  // Add transition for the menu
                                        toggleButton.style.transform = 'translateX(0)';  // Return the button to its original position
                                        toggleIcon.style.transform = 'rotate(0deg)';
                                        const searchElement = document.getElementById('search');
                                        searchElement.style.display = 'flex';
                                    }, 5);
                                }
                            },
                            children: [
                                {
                                    tag: "img",
                                    props: {
                                        src: "../assets/icons/cross.svg",
                                        alt: "Close Menu",
                                        class: "w-6 h-6"
                                    },
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: "div",
                    props: { class: "p-4" },
                    children: [
                        // Add menu items here
                        this.place.render()
                    ]
                }
            ]
        };
    }
}
