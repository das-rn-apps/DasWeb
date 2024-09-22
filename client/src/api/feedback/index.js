const API_URL = process.env.REACT_APP_API_URL;

export const fetchFeedback = async (id = null) => {
    try {
        const endpoint = id ? `${API_URL}/feedback/project/${id}` : `${API_URL}/feedback/profile`;
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error('Failed to fetch feedback');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching feedback:', error);
        throw error;
    }
};

export const submitFeedback = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error submitting feedback:', error);
        throw error;
    }
};
