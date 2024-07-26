import { Component } from "../../core/Component.js";
import { SearchBarResult } from "./SearchBarResult.js";

export class SearchBar extends Component {
  constructor(props = {}) {
    super(props);
    this.homePage = this.props.homePage;
    this.searchBarResult = new SearchBarResult({
      id: "search-bar-result-map",
      state: { items: props.state.items, query: props.state.query, display: false },
      searchBar : this,
    });
  }

  handleInputChange(event) {
    const query = event.target.value;
    const filteredItems = query ? this.state.items.filter((item) => item.nom_site.toLowerCase().includes(query.toLowerCase())) : [];

    this.searchBarResult.setState({
      query: query,
      filteredItems: filteredItems,
      loading: false,
    });
    this.homePage.componentDidMount(filteredItems);
  }

  toggleSearchBar(show) {
    if (show) {
      this.searchBarResult.setState({ display: true });
      this
    } else {
      this.searchBarResult.setState({ display: false });
    }
  }

  render() {
    return {
      tag: "div",
      props: { class: "relative w-1/2 mx-auto my-8", id: this.props.id },
      children: [
        {
          tag: "div",
          props: { class: "flex items-center bg-white rounded-full shadow-lg transition-all duration-0 ease-in-out search-bar" },
          children: [
            {
              tag: "input",
              props: {
                type: "text",
                placeholder: "Saisissez votre recherche...",
                class: "flex-grow p-2 bg-transparent outline-none rounded-full font-olympicSans",
                value: this.state.query,
                onInput: (event) => this.handleInputChange(event),
                onFocus: () => this.toggleSearchBar(true),
                onBlur: () => setTimeout(() => this.toggleSearchBar(false), 200),
              },
              children: [],
            },
            {
              tag: "div",
              props: { class: "flex items-center justify-center bg-white rounded-full w-8 h-8 mr-2 shadow-md" },
              children: [
                {
                  tag: "img",
                  props: {
                    src: "../assets/icons/search.svg",
                    alt: "Search Icon",
                    class: "w-4 h-4",
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        this.searchBarResult.render(),
      ],
    };
  }
}