const projectsData = [
    {
        id: 1,
        name: 'E-commerce Mobile App',
        description: 'A full-stack mobile app built with React Native and Node.js, featuring user authentication, product browsing, and secure checkout.',
        category: 'Mobile App',
        rating: 4.5,
        technologies: ['React Native', 'Node.js', 'MongoDB', 'Express.js'],
        link: 'https://github.com/yourusername/e-commerce-app',
        image: 'https://picsum.photos/id/1/800/600',
        screenshots: [
            'https://picsum.photos/id/20/300/600',
            'https://picsum.photos/id/21/300/600',
            'https://picsum.photos/id/22/300/600'
        ],
        features: [
            'User authentication and profile management',
            'Product browsing with categories and search functionality',
            'Shopping cart and secure checkout process',
            'Order history and tracking'
        ],
        userFeedback: [
            { text: "Great app! Easy to use and very responsive.", author: "John D." },
            { text: "Love the design and functionality. Highly recommend!", author: "Sarah M." }
        ]
    },
    {
        id: 2,
        name: 'Task Management Web App',
        description: 'A responsive web application using React.js and Express.js, allowing users to create, assign, and track tasks in real-time.',
        category: 'Web App',
        rating: 4.2,
        technologies: ['React.js', 'Express.js', 'MongoDB', 'Socket.io'],
        link: 'https://github.com/yourusername/task-management-app',
        image: 'https://picsum.photos/id/2/800/600',
        screenshots: [
            'https://picsum.photos/id/23/300/600',
            'https://picsum.photos/id/24/300/600',
            'https://picsum.photos/id/25/300/600'
        ],
        features: [
            'Real-time task updates',
            'User collaboration',
            'Task prioritization and categorization',
            'Performance analytics'
        ],
        userFeedback: [
            { text: "This app has significantly improved our team's productivity.", author: "Emily R." },
            { text: "Intuitive interface and powerful features. Great job!", author: "Michael T." }
        ]
    },
    {
        id: 3,
        name: 'Weather Forecast App',
        description: 'A mobile app developed with React Native that provides accurate weather forecasts using geolocation and a third-party weather API.',
        category: 'Mobile App',
        rating: 4.7,
        technologies: ['React Native', 'Redux', 'OpenWeatherMap API'],
        link: 'https://github.com/yourusername/weather-forecast-app',
        image: 'https://picsum.photos/id/3/800/600',
        screenshots: [
            'https://picsum.photos/id/26/300/600',
            'https://picsum.photos/id/27/300/600',
            'https://picsum.photos/id/28/300/600'
        ],
        features: [
            'Real-time weather updates',
            'Location-based forecasts',
            '7-day weather predictions',
            'Severe weather alerts'
        ],
        userFeedback: [
            { text: "Accurate forecasts and beautiful design. My go-to weather app!", author: "Lisa K." },
            { text: "Love the detailed hourly forecasts. Very useful!", author: "David W." }
        ]
    }
];

export const fetchProjectDetails = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const project = projectsData.find(p => p.id === parseInt(id));
            if (project) {
                resolve(project);
            } else {
                reject(new Error('Project not found'));
            }
        }, 100);
    });
};

export { projectsData };