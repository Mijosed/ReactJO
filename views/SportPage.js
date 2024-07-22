import { ValidatedComponent } from '../core/ValidatedComponent.js';
import { Header } from '../components/common/Header.js';
import { Footer } from '../components/common/Footer.js';
import { getDefaultPropSchema } from '../utils/index.js';

export class SportPage extends ValidatedComponent {
    constructor(props) {
        super(props, getDefaultPropSchema());
    }

    render() {
        const { sport } = this.props;

        return {
            tag: "div",
            props: {},
            children: [
                new Header().render(),
                {
                    tag: "div",
                    props: { class: "content" },
                    children: [
                        { tag: "h1", props: {}, children: [sport.name] },
                        { tag: "p", props: {}, children: ["Schedule and details..."] }
                    ]
                },
                new Footer().render()
            ]
        };
    }
}
