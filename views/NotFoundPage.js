import { Component } from '../core/Component.js';
import { Render } from '../core/Render.js';
import { Footer } from '../components/Components.js';

export class NotFoundPage extends Component {
    render() {
        const footerElement = new Footer();

        return {
            tag: "div",
            children: [
                {
                    tag: "div",
                    props: { class: "flex flex-col items-center justify-center h-screen" },
                    children: [
                        {
                            tag: "img",
                            props: { src: "../assets/images/logo1.svg", alt: "404", class: "w-[190px] h-[88px] mb-12" }
                        },
                        {
                            tag: "h1",
                            props: { class: "text-center font-olympic text-[64px] mb-12" },
                            children: ["404 - PAGE NOT FOUND"]
                        },
                        {
                            tag: "p",
                            props: { class: "text-center font-olympicSans text-[32px]" },
                            children: ["Désolé, la page que vous recherchez n'existe pas."]
                        },
                        {
                            tag: "a",
                            props: { href: "/", class: "text-white font-olympicSans font-bold bg-black rounded-full text-[24px] w-[240px] h-[64px] shadow-xl flex items-center justify-center mt-20" },
                            children: ["GO HOME"]
                        }
                    ]
                },
                footerElement.render()
            ]
        };
    }
}
