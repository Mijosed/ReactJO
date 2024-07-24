import { Component } from '../../../core/Component.js';
import { validateProps } from '../../../utils/utils.js';
import {
    Title,
 } from '../../Components.js';
export class HomeTitle extends Component {
    
    constructor(props ={}) {
        super(props);
        const propSchema = {
            type: "object",
            properties: {
                couleur: { type: "string" },
                text: { type: "string"},
                id: { type: "string"},
                textColor: { type: "string"},
            },
          };
        validateProps(props, propSchema);
        this.couleur = props.couleur;
        this.text = props.text;
        this.id = props.id;
        this.textColor = props.textColor;
        
    }

    render() {
        return {
            tag:"div",
            props:{id: this.id, class:"flex flex-col justify-center items-center h-[15vh] bg-" + this.couleur},
            children:[
                {
                    tag: "div",
                    props: {class: "text-"+this.textColor},
                    children: [
                        new Title({text: this.text})
                    ]
                }
            ]
        }
    }
}