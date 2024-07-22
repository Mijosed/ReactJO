import { InvalidPropsError } from './InvalidPropsError.js';

export class ErrorHandler {
    static handle(error) {
        if (error instanceof InvalidPropsError) {
            console.error("An InvalidPropsError occurred:", error.message);
        } else {
            console.error("An error occurred:", error.message, error.stack);
        }
    }
}
