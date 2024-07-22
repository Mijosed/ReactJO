// api/fetchData.js
export const fetchData = async () => {
    const response = await fetch('../database/data.json');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

