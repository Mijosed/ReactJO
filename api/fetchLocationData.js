export async function fetchLocationData(name = null) {
    try {
        console.log('Fetching location data...');
        const response = await fetch('/database/locationsData.json'); // Remplacez par le chemin correct
        const data = await response.json();
        console.log('Fetched data:', data);

        // Vérifiez si data.locations est défini
        if (!data || !data.locations) {
            throw new Error('Invalid data structure: "locations" is not defined');
        }

        if (name) {
            const location = data.locations.find(location => location.name.toLowerCase() === name.toLowerCase());
            if (!location) {
                throw new Error('Location not found');
            }
            return location;
        }
        return data;
    } catch (error) {
        console.error('Error fetching location data:', error);
        throw error;
    }
}
