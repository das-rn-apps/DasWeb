const API_URL = process.env.REACT_APP_API_URL;

export const fetchProjects = async () => {
    try {
        const response = await fetch(`${API_URL}/project`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        return await response.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};


export const fetchProjectDetails = async (id) => {
    try {
        const response = await fetch(`${API_URL}/project/${id}`);
        if (!response.ok) throw new Error('Failed to fetch project details');
        return await response.json();
    } catch (error) {
        console.error('Error fetching project details:', error);
        throw error;
    }
};
