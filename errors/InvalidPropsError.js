export class InvalidPropsError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidPropsError";
    }
}
