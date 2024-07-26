import { Component } from '../../../core/Component.js';

export class HeaderHome extends Component {
    constructor(props ={}) {
        super(props);
    }
    render() {
        return {
            tag: "header",
            props: { class: "bg-cover bg-center h-screen flex justify-center items-center text-center text-white", style: "background-image: url('../../assets/images/background-image.png');" },
            children: [
                {
                    tag: "div",
                    props: { class: "absolute inset-0 flex flex-col h-screen items-center justify-center bg-black bg-opacity-50" },
                    children: [
                        {
                            tag: "img",
                            props: { src: "../../assets/images/Logo.svg", alt: "Logo", class: "h-22 w-22 mb-[6%] logo-mobil-height" }
                        },
                        {
                            tag: "img",
                            props: { src: "../../assets/images/Logo.svg", alt: "Logo", class: "h-22 w-22 mb-[6%] desktop-only" }
                        },
                        {
                            tag: "button",
                            props: { class: "bg-[#FFB114] text-white font-olympic text-[24px]  py-2 px-4 rounded-full mb-[3%] w-[392px] h-[48px]", onClick: () => window.location.href = '/#map' },
                            children: ["Explorer les Sites des JO"]
                        },
                        {
                            tag: "div",
                            props: { class: "flex space-x-4 mb-[5%]" }, 
                            children: [
                                {
                                    tag: "button",
                                    props: { class: "bg-[#00A651] text-white font-olympic text-[16px] py-2 px-4 rounded-full w-[196px] h-[48px]", onClick: () => window.location.href = '/locations' },
                                    children: ["Sites Olympiques"]
                                },
                                {
                                    tag: "button",
                                    props: { class: "bg-[#007BFF] text-white font-olympic text-[16px] py-2 px-4 rounded-full w-[196px] h-[48px]", onClick: () => window.location.href = '/sports' },
                                    children: ["Sports Olympiques"]
                                }
                            ]
                        },
                        {
                            tag: "p",
                            props: { class: "text-white font-olympicSans text-[24px] text-center max-w-[753px]"},
                            children: ["Vivez l'esprit des Jeux Olympiques. Profitez d'une période exaltante remplie de sport et de passion."]
                        }
                    ]
                }
            ]
        };
    }
}
