export const semantic_segmentation = {
    project_name: 'Semantic Segmentation',
    image: '/Icons/semantic.png',
    overview: "This software efficiently performs semantic segmentation on satellite images to classify various features, utilizing both machine learning(ML) and deep learning(DL) techniques.",
    features: [{ heading: 'Region of Interest (ROI) Selection and Loading Satellite Imagery', data: "Selection of Region of Interest. In the advanced tab, users have the option to customize the selection of specific bands for more complex segmentation. The image is then retrieved from the Google Earth Engine's Sentinel-2 database, ensuring high-quality satellite data for analysis." },
    { heading: 'Feature Sampling for ML Models', data: "Features are sampled from each class to train the machine learning models. Here, the following samples are taken." },
    { heading: 'Machine Learning Model Selection and Thresholds Adjustment', data: "The selection of the best machine learning model depends on factors like multiclass classification, the presence of background or undefined classes, and overlapping pixel values among classes." },
    { heading: 'Image Segmentation Using Selected Machine Learning Model', data: "Random Forest Classifier to segement the image." }
    ],
    tech_stack: ["Frontend: React, Openstreet Map", "Backend: Flask, Python, Scikit-Learn", "State Management: React Zustand and Hooks", "Styling: Tailwind CSS"],
    github_link: "https://github.com/RohitVerma2003/Semantic-Segmentation"
}

export const chat_app = {
    project_name: 'Chat Application',
    image: '/Icons/chat_app.png',
    overview: 'A MERN application that allows real time chat experience. This application lets you chat with your friends on real time using socktes. Built with Vite + React.js, MongoDB, and Node.js.',
    features: [{ heading: 'Authentication', data: 'User authentication using username and password. MongoDB is used to store data of the user.' },
    { heading: 'Real time Chat', data: 'Real time chats with your friend. Sockets are used for real time chat experience.' },
    { heading: 'User Experience', data: 'Responsive design. Real-time database updation.' }
    ],
    tech_stack: ["Frontend: Vite + React", "Backend: Node.js", "Database: MongoDB", "State Management: React Zustand and Hooks", "Styling: Tailwind CSS"],
    github_link: "https://github.com/RohitVerma2003/Chat-Application"
}

export const google_calendar = {
    project_name: 'Google Calendar Clone',
    image: '/Icons/google_calendar.png',
    overview: 'A MERN application that adds events on the calendar like Google Calendar. This application lets you add, delete, update events on calendar. Built with Vite + React.js, MongoDB, and Node.js.',
    features: [{ heading: 'Add Events', data: 'Add events on the calendar on specific date and time. Events contains there category to identify.' },
    { heading: 'Drag and Drop Events', data: 'User can drag any event and can drop at specific date and time. Real time updation of events in database.' },
    { heading: 'User Experience', data: 'Responsive design and Real-time database updation.' }
    ],
    tech_stack: ['Frontend: Vite + React', 'Backend: Node.js', 'Database: MongoDB', 'State Management: React Redux and Hooks', 'Styling: Tailwind CSS'],
    github_link: 'https://github.com/RohitVerma2003/Google-Calendar-Clone'
}

export const chess = {
    project_name: 'Chess.com Clone',
    image: '/Icons/chess_clone.png',
    overview: 'A MERN application that lets two person play chess on real time.',
    features: [{ heading: 'Real time updation', data: 'Both player can see the other player move on real time using sockets.' },
    { heading: 'Chess rules', data: 'All the chess rules the defined.' },
    { heading: 'User Experience', data: 'Responsive design and Real-time database updation.' }
    ],
    tech_stack: ['Frontend: Vite + React', 'Backend: Node.js', 'State Management: React Redux and Hooks', 'Styling: Tailwind CSS'],
    github_link: 'https://github.com/RohitVerma2003/Chess.com-Clone'
}

export const round_robin = {
    project_name: 'Round-Robin Coupon Distribution System',
    image: '/Icons/round_robin.png',
    overview: 'A MERN application that implements a fair coupon distribution system with abuse prevention mechanisms. This system distributes coupons in a round-robin fashion while preventing abuse through IP tracking and cookie-based session monitoring. Built with Vite + React.js, MongoDB, and Node.js.',
    features: [{ heading: 'Coupon Distribution', data: 'Sequential coupon assignment ensuring fair distribution. Automatic tracking of coupon usage and limits. Support for coupon expiration dates.' },
    { heading: 'Abuse Prevention', data: 'IP-based tracking with cooldown periods. Browser session monitoring via cookies. Rate limiting for claim attempts.' },
    { heading: 'User Experience', data: 'No login required for claiming coupons. Clear feedback messages. Real-time coupon availability status.' },
    { heading: 'IP Tracking', data: '5 Minutes cooldown between claims. IP address validation.' },
    { heading: 'Session Management', data: 'Secure cookie settings. HTTP-only cookies.' },
    { heading: 'Rate Limiting', data: 'Request rate limiting. Abuse prevention mechanisms.' }
    ],
    tech_stack: ['Frontend: Vite + React', 'Backend: Node.js', 'Database: MongoDB', 'State Management: React Hooks', 'Styling: CSS Modules'],
    github_link: 'https://github.com/RohitVerma2003/Round-Robin-Coupon-Distribution'
}

export const giphy = {
    project_name: 'Giphy Clone',
    image: '/Icons/giphy.png',
    overview: 'A fun gif application. This application is the clone of giphy.com which have millions of gifs.',
    features: [{ heading: 'Giphy API', data: 'Giphy API is used for fetching gifs.' },
    { heading: 'Categories', data: 'GIFs can be fetched on the basis of different categories.' },
    { heading: 'User Experience', data: 'Responsive design. Pinterest tiles like UI.' },
    { heading: 'Search', data: 'User can search specific gifs.' },
    { heading: 'State Management', data: 'Global state is managed by React Redux for faster accessing.' }
    ],
    tech_stack: ["Frontend: React", "State Management: React Redux and Hooks", "Styling: Tailwind CSS", "API: Giphy developers API"],
    github_link: 'https://github.com/RohitVerma2003/Giphy-Clone'
}

export const tetris = {
    project_name: 'Tetris - C++',
    image: '/Icons/tetris.jpg',
    overview: 'Tetris-CPP is a modern implementation of the classic Tetris game, built using C++ and the RAYLIB library. The game follows the traditional Tetris mechanics where players manipulate falling tetrominoes to form complete lines, which are then cleared from the board. This project showcases advanced Object-Oriented Programming (OOP) principles in C++, leveraging classes and objects to create a clean, modular, and maintainable codebase.',
    features: [{ heading: 'Classic Tetris Gameplay', data: 'All the core elements of the classic Tetris game, including the falling tetrominoes, line clearing, scoring, and level progression.' },
    { heading: 'OOP Design', data: 'The game is heavily structured around Object-Oriented Programming (OOP) principles. Each game component, such as the tetrominoes, game grid, and input handling, is encapsulated in its own class for modularity and easy maintainability.' },
    { heading: 'Graphics and Rendering', data: 'Built using RAYLIB, a simple and easy-to-use graphics library for rendering the game in 2D.' },
    { heading: 'Keyboard Controls', data: 'Users can control the tetrominoes using the keyboard to rotate, move left/right, and accelerate the drop of the pieces.' },
    { heading: 'Level Progression', data: 'As the game progresses, the speed at which the tetrominoes fall increases, adding more challenge to the gameplay.' }
    ],
    tech_stack: ["C++: Core language used to build the game's logic and structure, implementing OOP principles to manage game components.", "RAYLIB: A graphics library used for rendering the game in a visually appealing 2D format."],
    github_link: 'https://github.com/RohitVerma2003/Tetris-CPP'
}

export const aktu = {
    project_name: 'AKTU Mania',
    image: '/Icons/aktu.jpeg',
    overview: 'AKTU-Mania is a MERN stack web application designed to provide a comprehensive set of study resources for students of Dr. A.P.J. Abdul Kalam Technical University (AKTU). The platform offers an easy-to-navigate interface, where students can access curated academic materials based on their course, branch, and year. With a seamless blend of functionality and aesthetic design, AKTU-Mania makes it effortless for students to find and download Quantums, textbooks, notes, and previous year question papers.',
    features: [{ heading: 'Course-Based Material Access', data: 'Users can filter study resources based on their specific course, branch, and year.' },
    { heading: 'Study Resources', data: 'Includes Quantums, textbooks, class notes, and previous year question papers tailored to the AKTU curriculum.' },
    { heading: 'Modern UI', data: 'The project incorporates a visually appealing, clean, and user-friendly design for intuitive navigation and an enjoyable user experience.' },
    { heading: 'Cloud Storage', data: 'All study materials are securely stored and managed using Cloudinary to ensure high availability and scalability.' },
    { heading: 'Database Management', data: `MongoDB Atlas serves as the project's backend database, allowing efficient data storage, retrieval, and manipulation of study materials.` },
    { heading: 'Full-Stack Implementation', data: 'Built using the MERN (MongoDB, Express.js, React, Node.js) stack for a responsive and scalable solution.' }
    ],
    tech_stack: ["Frontend: React.js for creating an interactive and responsive user interface.", "Backend: Node.js and Express.js to handle API requests and business logic.", "Database: MongoDB Atlas for cloud-based NoSQL database management.", "File Storage: Cloudinary for secure storage and management of all resource files.", "Version Control: GitHub for source code management and project versioning."],
    github_link: 'https://github.com/RohitVerma2003/AKTU-Mania'
}

export const weather = {
    project_name: 'Weather Application',
    image: '/Icons/weather.svg',
    overview: `WeatherApp-React is a user-friendly weather application built using React. The app provides real-time weather updates for any city worldwide, as well as detailed 24-hour forecasts. By utilizing a third-party API, this app delivers accurate weather data, including essential details such as temperature, wind speed, wind direction, humidity, visibility, and more. Additionally, the app is equipped to detect the user's current location and fetch weather data accordingly, offering a seamless and personalized experience.`,
    features: [{ heading: 'Current Weather Data', data: 'Get up-to-the-minute weather conditions for any city of your choice.' },
    { heading: '24-Hour Forecast', data: 'Detailed hourly forecasts for the next 24 hours, providing insights into temperature' },
    { heading: 'Location Detection', data: 'The app can automatically detect your current location and provide weather updates for your area without the need for manual input.' },
    { heading: 'Responsive UI', data: 'A modern and friendly user interface that works smoothly across devices of different screen sizes, ensuring an optimal user experience.' },
    { heading: 'Third-Party API', data: 'Powered by a reliable third-party weather API, ensuring accurate and updated weather information.' }
    ],
    tech_stack: ["Frontend: React.js for creating a dynamic and interactive user interface.", "API Integration: Third-party API for fetching real-time weather data.", "Geolocation API: Used to detect the user's current location for localized weather information.", "Styling: Bootstrap CSS for a clean and responsive design across various screen sizes."],
    github_link: 'https://github.com/RohitVerma2003/WeatherApp-React-'
}