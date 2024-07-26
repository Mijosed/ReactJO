export async function fetchLieux(name = null) {
    try {
        console.log('Fetching location data...');
        const response = await fetch('/database/data.json');
        const data = await response.json();
        console.log('Fetched data:', data);

        
        
        return data;
    } catch (error) {
        console.error('Error fetching location data:', error);
        throw error;
    }
}
