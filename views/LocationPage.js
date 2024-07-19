import { ValidatedComponent } from '../core/ValidatedComponent.js';
import { Header } from '../components/common/Header.js';
import { Footer } from '../components/common/Footer.js';
import { getDefaultPropSchema } from '../utils/index.js';

export class LocationPage extends ValidatedComponent {
    constructor(props) {
        super(props, getDefaultPropSchema());
    }

    render() {
        const { location } = this.props;

        return {
            tag: "div",
            props: {},
            children: [
                new Header().render(),
                {
                    tag: "div",
                    props: { class: "content" },
                    children: [
                        { tag: "h1", props: {}, children: [location.name] },
                        { tag: "p", props: {}, children: ["Details about the location..."] }
                    ]
                },
                new Footer().render()
            ]
        };
    }
}
