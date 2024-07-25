import { InvalidPropsError, NotFoundError, ValidationError, APIError } from './InvalidPropsError.js';

export class ErrorHandler {
    static handle(error) {
        if (error instanceof InvalidPropsError) {
            console.error("InvalidPropsError:", error.message);
        } else if (error instanceof NotFoundError) {
            console.error("NotFoundError:", error.message);
        } else if (error instanceof ValidationError) {
            console.error("ValidationError:", error.message);
        } else if (error instanceof APIError) {
            console.error("APIError:", error.message);
        } else {
            console.error("Unknown Error:", error.message, error.stack);
        }

        // Affichez une alerte pour l'utilisateur (ou utilisez une méthode plus conviviale)
        this.displayErrorToUser(error);

        // Enregistrez l'erreur pour une analyse ultérieure
        this.logError(error);
    }

    static displayErrorToUser(error) {
        const errorMessage = error.message || "Une erreur inconnue est survenue";
        alert(`Erreur: ${errorMessage}`);
    }

    static logError(error) {
        // Implémentez une méthode pour enregistrer les erreurs, par exemple en les envoyant à un service distant
        console.log("Logging error:", error);
    }

    static handleGlobalErrors() {
        window.addEventListener('error', (event) => {
            this.handle(event.error);
        });

        window.addEventListener('unhandledrejection', (event) => {
            this.handle(event.reason);
        });
    }
}

// Appelez cette méthode pour capturer les erreurs globales
ErrorHandler.handleGlobalErrors();
