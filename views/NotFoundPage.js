import { ValidatedComponent } from '../core/ValidatedComponent.js';
import { Header } from '../components/common/Header.js';
import { Footer } from '../components/common/Footer.js';
import { getDefaultPropSchema } from '../utils/index.js';

export class NotFoundPage extends ValidatedComponent {
    constructor(props) {
        super(props, getDefaultPropSchema());
    }

    render() {
        return {
            tag: "div",
            props: {},
            children: [
               
                {
                    tag: "div",
                    props: { class: "content" },
                    children: [
                        { tag: "h1", props: {}, children: ["404 - Page Not Found"] },
                        { tag: "p", props: {}, children: ["The page you are looking for does not exist."] }
                    ]
                },
                new Footer().render()
            ]
        };
    }
}
