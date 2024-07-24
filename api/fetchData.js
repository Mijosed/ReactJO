// api/fetchData.js
export const fetchData = async () => {
    try {
        const response = await fetch('https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=42&lang=fr&timezone=Europe%2FParis&refine=category_id%3A%22venue-olympic%22');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};