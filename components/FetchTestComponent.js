import { Component } from '../core/Component.js';
import { fetchData } from '../core/api/FetchData.js';

export class FetchTestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,
        };
    }

    async componentDidMount() {
        console.log("componentDidMount called");
        try {
            console.log("Fetching competition sites...");
            const data = await fetchData();
            console.log("Data fetched: ", data);
            this.setState({ data });
        } catch (error) {
            console.error("Error fetching competition sites: ", error);
            this.setState({ error: error.message });
        }
    }

    render() {
        console.log("Rendering FetchTestComponent with state:", this.state);

        if (this.state.error) {
            return {
                tag: 'div',
                props: {},
                children: [`Erreur : ${this.state.error}`],
            };
        }

        if (this.state.data.length === 0) {
            return {
                tag: 'div',
                props: {},
                children: ['Chargement des données...'],
            };
        }

        return {
            tag: 'div',
            props: {},
            children: this.state.data.map(result => ({
                tag: 'div',
                props: { key: result.recordid },
                children: [
                    { tag: 'h3', props: {}, children: [result.fields.nom_site] },
                    { tag: 'p', props: {}, children: [`Sports: ${result.fields.sports}`] },
                    { tag: 'p', props: {}, children: [`Dates: ${result.fields.start_date} - ${result.fields.end_date}`] }
                ],
            })),
        };
    }
}
