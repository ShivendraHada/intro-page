const projects: ProjectProps[] = [
    {
        name: "Summarize & Chat Pro - AI-Powered Productivity Assistant",
        description: "Summarize & Chat Pro is a Chrome extension that combines AI-powered text summarization with a seamless chat interface. It allows users to quickly summarize the content of web pages they are visiting and engage in a chat-based interaction with an AI assistant to get additional information or clarification.",
        techStack: "JavaScript, Chrome Extension API, Chrome Storage API, and a remote AI-powered API",
        link: "https://chromewebstore.google.com/detail/elojhchbdedbhjipflbdmhcllplmgfdo/preview?hl=en&authuser=0"
    },
    {
        name: "AuthKit: Effortless Next.js Authentication Solution",
        description: "AuthKit revolutionizes Next.js authentication, providing a hassle-free experience from login to password reset. The repository offers fully functional login, registration, and forgot password pages, eliminating the tedious setup process. Hash passwords securely, manage database operations seamlessly, and authenticate users effortlessly with AuthKit. Generate OTPs with ease and enhance user experience with sleek popups and stylish icons. Say hello to stress-free authentication with AuthKit!",
        techStack: "Next.js, Mongoose, next-auth, random, react-toastify, nodemailer, react-feather, bcrypt",
        link: "https://auth-kit.thetechhub.app/"
    },
    {
        name: "Seamless Task Management: Your To-Do List, Any Device, Anytime!",
        description: "A dynamic To-Do app designed for seamless task management. Easily transition tasks from 'To Do' to 'In Progress' and finally 'Done.' The app ensures flexibility by allowing users to effortlessly switch task statuses. Featuring a search bar for quick task retrieval, the app enhances accessibility. Additionally, users can enrich task details by attaching images and videos. As a Progressive Web Application (PWA), it offers device-specific installations, enabling users to create a tailored app experience. With full responsiveness, our To-Do app adapts to various devices for optimal usability. Streamline your task management experience with our intuitive and versatile application.",
        techStack: "Next.js, Tailwind CSS, Appwrite, Zustand, Typescript",
        link: "https://to-do.thetechhub.app/"
    },
    {
        name: "Streamlining Daily Standup and EOD Updates with Node.js Slackbot on AWS ECS",
        description: "The Standup/EOD Slackbot was developed as a solution to streamline the process of collecting daily standup and End-of-Day (EOD) updates from employees. The application was independently created using the node.js programming language, and subsequently deployed on Amazon Web Services (AWS) using the AWS lambda. Its primary aim is to simplify the communication and collaboration between team members by automating the task of collecting status updates, thus saving valuable time and increasing productivity.",
        techStack: "Node.js, Slack, AWS Elastic beanstalk, and AWS Lambda",
    }
];

export default projects;