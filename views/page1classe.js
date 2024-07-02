import { Component } from "../core/component.js";

const storage = {
  getItem(key) {
    return localStorage.getItem(key);
  },
  setItem(key, value) {
    localStorage.setItem(key, value);
  },
};

const MAX_TR = 10; // Remplacez par le nombre réel de lignes
const MAX_TD = 5; // Remplacez par le nombre réel de colonnes

export default class Page1Class extends Component {
  constructor(props) {
    super(props); // Appeler le constructeur de la classe parente avec les props

    // Initialiser l'état
    this.state = {
      cellEdit: undefined,
      inputValue: "",
      data: JSON.parse(storage.getItem("karl")) || {},
    };

    // Lier les méthodes pour qu'elles aient accès à l'instance de Page1Class
    this.textIntoInput = this.textIntoInput.bind(this);
    this.inputIntoText = this.inputIntoText.bind(this);
    this.testInpute = this.testInpute.bind(this);
  }

  textIntoInput(i, j) {
    this.setState({
      cellEdit: { i, j },
      inputValue: this.state.data[`${i}.${j}`] ?? "Default",
    });
  }
  testInpute(i, j) {
    debugger;
    console.log("sallut");
  }

  inputIntoText() {
    const data = Object.assign(this.state.data, {
      [`${this.state.cellEdit.i}.${this.state.cellEdit.j}`]: this.state.inputValue,
    });
    storage.setItem("karl", JSON.stringify(data));

    this.setState({
      cellEdit: undefined,
      inputValue: "",
      data: data,
    });
  }

  render() {
    let test = {
      tag: "table",
      children: [
        {
          tag: "tbody",
          children: Array.from({ length: MAX_TR }, (_, i) => ({
            tag: "tr",
            children: Array.from({ length: MAX_TD }, (_, j) => ({
              tag: "td",
              props: {
                "data-coord": `${i}.${j}`,
                onClick: i === this.state.cellEdit?.i && j === this.state.cellEdit?.j ? null : () => this.textIntoInput(i, j),
              },
              children: [
                i === this.state.cellEdit?.i && j === this.state.cellEdit?.j
                  ? {
                      tag: "input",
                      props: {
                        value: "hello world",
                      },
                    }
                  : this.state.data[`${i}.${j}`] ?? "Default",
              ],
            })),
          })),
        },
      ],
    };
    return test;
  }
}
