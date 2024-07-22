async function testFetch() {
    const url = "./database/data.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log("API response data:", data);
        return data.results; // Assurez-vous que cette ligne correspond bien aux données
    } catch (error) {
        console.error("Erreur lors de la récupération des sites de compétition :", error);
        throw error; // Propage l'erreur
    }
}

testFetch();
