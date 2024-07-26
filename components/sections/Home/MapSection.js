import { Component } from '../../../core/Component.js';
import { SearchBar, FilterButton, MapSearchMenu, MapFilterMenu, GeolocalisationButton } from '../../Components.js';

export class MapSection extends Component {
    constructor(props = {}) {
        super(props);
        this.isMenuOpen = false;
        this.isFilterOpen = false;
        this.actualTarget = null;
        this.SearchBar = new SearchBar({ id: "search-bar-map", context: "map",
            state: {
                query: "",
                items: this.state.data,
                filteredItems: [],
                loading: false,
            },
            homePage: this.props.homePage ?? null,
            
            isSearchMap: true
        });
        this.FilterButton = new FilterButton();
        this.MapSearchMenu = new MapSearchMenu( { id: "map-search-menu", homePage: this.props.homePage, state : {
            items: this.state.data,
        }} );
        this.MapFilterMenu = new MapFilterMenu();
        this.GeolocalisationButton = new GeolocalisationButton();
    }

    toggleMenu(event) {
      this.isFilterOpen = false; // Close filter menu if it's open
      if(this.actualTarget === event.target) {
        this.isMenuOpen = !this.isMenuOpen;
      }else{
        this.isMenuOpen = true;
        this.actualTarget = event.target;
      }
        
        const menuElement = document.getElementById('map-search-menu');
        const filterElement = document.getElementById('map-filter-menu');
        const searchElement = document.getElementById('search');
        const toggleButton = document.getElementById('menu-toggle-button');
        const toggleIcon = document.getElementById('toggle-icon');

        if (this.isMenuOpen) {
            menuElement.style.display = 'block';
            filterElement.style.display = 'none';
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

    toggleFilter(event) {
        this.isMenuOpen = false; // Close search menu if it's open
        if (this.actualTarget === event.target) {
            this.isFilterOpen = !this.isFilterOpen;
        } else {
            this.isFilterOpen = true;
            this.actualTarget = event.target;
        }

        const filterElement = document.getElementById('map-filter-menu');
        const menuElement = document.getElementById('map-search-menu');
        const searchElement = document.getElementById('search');

        if (this.isFilterOpen) {
            filterElement.style.display = 'block';
            menuElement.style.display = 'none';
            setTimeout(() => {
                const filterWidth = filterElement.offsetWidth;
                filterElement.classList.remove('-translate-x-full');
                filterElement.classList.add('translate-x-0');
                filterElement.style.transition = 'transform 0.4s ease-in-out';
            }, 2);
            searchElement.style.display = 'none';
        } else {
            setTimeout(() => {
                filterElement.classList.remove('translate-x-0');
                filterElement.classList.add('-translate-x-full');
                filterElement.style.transition = 'transform 0.4s ease-in-out';
                searchElement.style.display = 'flex';
            }, 2);
        }
    }

    handleOutsideClick(event) {
        const menuElement = document.getElementById('map-search-menu');
        const filterElement = document.getElementById('map-filter-menu');
        const toggleButton = document.getElementById('menu-toggle-button');
        const filterButton = document.getElementById('filter-button');
        if (this.isMenuOpen && !menuElement.contains(event.target) && event.target !== toggleButton) {
            this.toggleMenu(event);
        }
        if (this.isFilterOpen && !filterElement.contains(event.target) && event.target !== filterButton) {
            this.toggleFilter(event);
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
            props: { id: this.props.id, class: "relative" },
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
                this.MapFilterMenu.render(),
                {
                    tag: "div",
                    props: { id: "search", class: "absolute flex justify-center z-40 w-full" },
                    children: [
                        {
                            tag: "div",
                            props: { id: "filter-button", onClick: this.toggleFilter.bind(this) },
                            children: [this.FilterButton.render()]
                        },
                        this.SearchBar.render(),
                    ]
                },
                this.GeolocalisationButton.render(),
                {
                    tag: "div",
                    props: { id: "map", class: "h-[85vh] z-10", style: "width: 100%;" },
                    children: []
                }
            ]
        };
    }
}