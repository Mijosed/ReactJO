import { Component } from '../../core/Component.js';

export class HeaderHome extends Component {
    render() {
        return {
            tag: "header",
            props: { class: "bg-cover bg-center h-screen flex justify-center items-center text-center text-white", style: "background-image: url('../../assets/images/background-image.png');" },
            children: [
                {
                    tag: "div",
                    props: { class: "absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50" },
                    children: [
                        {
                            tag: "img",
                            props: { src: "../../assets/images/Logo.svg", alt: "Logo", class: "h-24 mb-4" }
                        },
                        {
                            tag: "button",
                            props: { class: "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-2", onClick: () => window.location.href = '/#map' },
                            children: ["Explorer les Sites des JO"]
                        },
                        {
                            tag: "button",
                            props: { class: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2", onClick: () => window.location.href = '/#sports' },
                            children: ["Découvrir les Disciplines"]
                        },
                        {
                            tag: "p",
                            props: { class: "text-white text-center mt-4" },
                            children: ["Vivez l'esprit des Jeux Olympiques. Profitez d'une période exaltante remplie de sport et de passion."]
                        }
                    ]
                }
            ]
        };
    }
}
