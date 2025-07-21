const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getItems = async () => {
    try {
        const response = await fetch(`${API_URL}?_limit=20`);
        return response.json();
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};