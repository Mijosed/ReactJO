import { Component } from '../../../core/Component.js';
import { SearchBar, DatePicker, SelectBar } from '../Components.js';

export class MapFilterMenu extends Component {
    constructor(props = {}) {
        super(props);
        this.SearchBar = new SearchBar({ id: "search-bar-filter", context: "filter", state: {
            query: "",
            items: [
                this.state.data,
            ],
            filteredItems: [],
            loading: false,
        }});
        this.DatePicker = new DatePicker({ id: "date-picker-filter" });
        this.SelectBar = new SelectBar({ id: "select-bar-filter" });
    }

    render() {
        return {
            tag: "div",
            props: {
                id: "map-filter-menu",
                class: "absolute left-0 top-1/2 transform -translate-y-1/2 h-5/6 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform -translate-x-full rounded-tr-lg rounded-br-lg bottom-mobil",
                style: "display: none; width: 30%;",
            },
            children: [
                {
                    tag: "div",
                    props: { class: "p-4 flex justify-between items-center" },
                    children: [
                        { tag: "h2", props: { class: "text-xl font-bold mb-4" }, children: ["Filtre"] },
                        {
                            tag: "button",
                            props: {
                                id: "close-filter-button",
                                class: "text-black",
                                onClick: (event) => {
                                    event.stopPropagation();
                                    const menuElement = document.getElementById('map-filter-menu');
                                    menuElement.classList.add('-translate-x-full');
                                    setTimeout(() => {
                                        menuElement.classList.remove('translate-x-0');
                                        menuElement.style.transition = 'transform 0.4s ease-in-out';
                                        document.getElementById('search').style.display = 'flex';
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
                        this.SearchBar.render(),
                        this.DatePicker.render(),
                        this.SelectBar.render(),
                        {
                            tag: "button",
                            props: {
                                id: "filter-button",
                                class: "bg-[#00A651] text-white font-olympic text-[16px] py-2 px-4 rounded-full mt-[10%]",
                                onClick: () => {
                                    // Ajouter ici la logique de validation des filtres
                                }
                            },
                            children: ["Appliquer les filtres"]
                        }
                    ]
                }
            ]
        };
    }
}
