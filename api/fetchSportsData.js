export async function fetchSportsData() {
    const response = await fetch('../database/sportsData.json');
    if (!response.ok) {
        throw new Error('Failed to fetch sports data');
    }
    return response.json();
}
