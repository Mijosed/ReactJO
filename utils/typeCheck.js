import { InvalidPropsError } from '../errors/InvalidPropsError.js';

function checkType(variable, type) {
    if (type === 'array') {
        return Array.isArray(variable);
    } else if (type === 'null') {
        return variable === null;
    } else if (type === 'object') {
        return variable !== null && typeof variable === 'object' && !Array.isArray(variable);
    } else {
        return typeof variable === type;
    }
}

function objectInEnum(object, enumeration) {
    return enumeration.some(enumObject => JSON.stringify(object) === JSON.stringify(enumObject));
}

function validateConfig(variable, conf) {
    if (conf.type && !checkType(variable, conf.type)) {
        return false;
    }
    if (conf.value !== undefined && JSON.stringify(variable) !== JSON.stringify(conf.value)) {
        return false;
    }
    if (conf.enum && !objectInEnum(variable, conf.enum)) {
        return false;
    }
    return true;
}

export function type_check(variable, conf) {
    if (!validateConfig(variable, conf)) {
        return false;
    }

    if (conf.properties) {
        if (typeof variable !== 'object' || variable === null) return false;

        for (const property in conf.properties) {
            if (Object.prototype.hasOwnProperty.call(conf.properties, property)) {
                if (!Object.prototype.hasOwnProperty.call(variable, property) || !type_check(variable[property], conf.properties[property])) {
                    return false;
                }
            }
        }
    }

    return true;
}

export function validateProps(props, schema) {
    if (!type_check(props, schema)) {
        throw new InvalidPropsError('Invalid props provided');
    }
}
