export class InvalidPropsError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidPropsError";
    }
}

export class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}

export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

export class APIError extends Error {
    constructor(message) {
        super(message);
        this.name = "APIError";
    }
}
