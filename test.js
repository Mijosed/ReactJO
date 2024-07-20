async function testFetch() {
    const url = "https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?order_by=start_date&limit=2&lang=fr&timezone=Europe%2FParis&refine=category_id%3A%22venue-olympic%22";
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
