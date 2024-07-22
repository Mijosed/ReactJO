import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import {
    LinkComponent,
    TextComponent,
    MainComponent,
    TitleComponent, 
    FooterSection, 
    MapSection, 
    SportComponent, 
    SearchComponent, 
    
} from '../components/Components.js';
import { validateProps } from '../utils/typeCheck.js';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        const propSchema = {
            type: 'object',
            properties: {
                title: { type: 'string' }
            }
        };
        validateProps(props, propSchema);

        this.eventLink = new LinkComponent({ href: "/event", text: "Evenements" });
        this.spotLink = new LinkComponent({ href: "/spot", text: "Spots" });
        this.titleElement = new TitleComponent({ text: "Explorer les sites" });
        this.mainElement = new MainComponent();
        this.mapElement = new MapSection();
        this.title2Element = new TitleComponent({ text: "Les différents sports présents lors des JO" });
        this.searchElement = new SearchComponent();
        this.sportElement = new SportComponent();
        this.footerElement = new FooterSection();
        
    }

    render() {
        return {
            tag: "div",
            children: [
                this.mainElement.render(),
                this.titleElement.render(),
                this.mapElement.render(),
                this.title2Element.render(),
                this.searchElement.render(),
                this.sportElement.render(),
                this.footerElement.render(),
                
            ]
        };
    }
}

export default function renderHomePage() {
    const homePage = new HomePage({ title: "Home Page" });
    return Render.createElement(homePage.render());
}



















