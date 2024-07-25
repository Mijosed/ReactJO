import { Component } from "../../core/Component.js";

export class SearchBarResult extends Component {
  constructor(props = {}) {
    super(props);
  }

  render() {
    const { query, filteredItems, loading, display } = this.state;

    let resultsContent;
    if (loading) {
      resultsContent = [
        {
          tag: "div",
          props: { class: "p-2 text-gray-500" },
          children: [{ tag: "span", props: { class: "font-olympicSans" }, children: ["Chargement..."] }],
        },
      ];
    } else if (!query) {
      resultsContent = [
        {
          tag: "div",
          props: { class: "p-2 text-gray-500" },
          children: [{ tag: "span", props: { class: "font-olympicSans" }, children: ["Rechercher un emplacement ou un sport"] }],
        },
      ];
    } else if (filteredItems.length > 0) {
      resultsContent = filteredItems.map((item) => ({
        tag: "div",
        props: { class: "p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer" },
        children: [{ tag: "span", props: {}, children: [item.name] }],
      }));
    } else {
      resultsContent = [
        {
          tag: "div",
          props: { class: "p-2 text-gray-500" },
          children: [{ tag: "span", props: { class: "font-olympicSans" }, children: ["Aucun résultat trouvé"] }],
        },
      ];
    }
    return {
      tag: "div",
      props: {
        class:
          "absolute left-0 w-full mt-1 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-b-lg shadow-lg results-container " + (this.state.display ? "" : "hidden"),
        id: this.props.id,
      },
      children: resultsContent,
    };
  }
}
