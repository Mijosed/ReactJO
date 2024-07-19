import { Component } from './Component.js';
import { validateProps } from '../utils/index.js';
import { InvalidPropsError } from '../errors/InvalidPropsError.js';

export class ValidatedComponent extends Component {
    constructor(props, defaultPropSchema) {
        super(props);
        this.propSchema = defaultPropSchema;
        this.validateProps(props);
    }

    validateProps(props) {
        validateProps(props, this.propSchema);
        if (!props || !props.title) {
            throw new InvalidPropsError('Props not properly defined');
        }
    }
}
