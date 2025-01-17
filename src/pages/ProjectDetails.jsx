import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import reactCalculator1 from "../assets/reactCalculator1.png";
import reactCalculator2 from "../assets/reactCalculator2.png";
import reactCalculator3 from "../assets/reactCalculator3.png";
import blackJack1 from "../assets/blackJack.png";
import blackJack2 from "../assets/blackJack2.png";
import blackJack3 from "../assets/blackJack3.png";
import leadsTracker1 from "../assets/leadsTracker1.png";
import leadsTracker2 from "../assets/leadsTracker2.png";
import leadsTracker3 from "../assets/leadsTracker3.png";
import studyBud1 from "../assets/studyBud1.png";
import studyBud2 from "../assets/studyBud2.png";
import studyBud3 from "../assets/studyBud3.png";
import toDoList1 from "../assets/toDoList.png";
import toDoList2 from "../assets/toDoList2.png";
import toDoList3 from "../assets/toDoList3.png";
import multimedia1 from "../assets/multimedia1.png";
import multimedia2 from "../assets/multimedia2.png";
import multimedia3 from "../assets/multimedia3.png";
import gsws1 from "../assets/gsws.png";
import gsws2 from "../assets/gsws2.png";
import gsws3 from "../assets/gsws3.png"
import medlab1 from "../assets/medlab1.JPG";
import medlab2 from "../assets/medlab2.JPG";
import medlab3 from "../assets/medlab3.JPG";
import emigr81 from "../assets/emigr81.png"
import emigr82 from "../assets/emigr82.png"
import emigr83 from "../assets/emigr83.png"
import userAuth1 from "../assets/UserAuth1.png"
import userAuth2 from "../assets/UserAuth2.png"
import userAuth3 from "../assets/UserAuth3.png"
import coutureHub1 from "../assets/coutureHub1.png"
import coutureHub2 from "../assets/coutureHub2.png"
import coutureHub3 from "../assets/coutureHub3.png"
import reactCalculatorVideo from "../assets/reactCalculatorVideo.mp4";
import blackjackVideo from "../assets/BlackJackVideo.mp4";
import leadsTrackerVideo from "../assets/leadsTrackerVideo.mp4";
import studyBudVideo from "../assets/studyBudVideo.mp4";
import toDoListVideo from "../assets/toDoListVideo.mp4";
import multimediaVideo from "../assets/multimediaVideo.mp4";
import medlabVideo from "../assets/medlabVideo.MP4";
import gswsVideo from "../assets/gswsVideo.mp4";
import emigr8Video from "../assets/eMigr8Video.mp4";
import userAuthVideo from "../assets/userAuthVideo.mp4";
import coutureHubVideo from "../assets/coutureHubVideo.mp4";



// Example projects data (replace this with a fetch call or API integration in a real app)
const projectsData = [
  {
    id: 1,
    title: "Fashion App",
    shortDescription: `The fashion app is a dynamic platform developed using FlutterFlow, designed to bridge the gap between users and fashion service providers such as tailors and vendors. This app enables users to explore and engage with a variety of products and services tailored to their fashion needs. Tailors and vendors can showcase their offerings by uploading products and services, creating a vibrant marketplace for commerce and connection. Its intuitive design ensures a seamless user experience while providing robust features like user registration, product uploads, and a catalog browsing system.
As the sole developer, I managed the end-to-end creation of the app, from designing the user interface to implementing the core functionality. The app highlights my ability to deliver a scalable, interactive solution for commerce and community within the fashion industry. By leveraging FlutterFlow's no-code platform, I ensured rapid development while maintaining a high standard of usability and performance.`,
    gallery: [coutureHub1, coutureHub2, coutureHub3],
    videos: [coutureHubVideo],
    liveLink: "#",
    repoLink: "#",
    techStack: ["No-code(Flutterflow.io)"],
    additionalInfo: `In conclusion, this project underscores my expertise in creating user-centric applications with real-world impact. The app fosters interaction between users and fashion service providers, empowering users to find tailored solutions effortlessly while enabling tailors and vendors to reach a broader audience. This blend of commerce and creativity demonstrates my commitment to building functional and accessible digital solutions.`,
  },
  {
    id: 2,
    title: "eMigr8 App",
    shortDescription: `The Emigr8 app is a live cross-platform solution available on the App Store and Play Store, designed to simplify relocation, immigration, and emigration processes. Developed using the no-code tool FlutterFlow, it provides users with an intuitive platform to register, explore opportunities, and manage their migration needs. Key features include user registration and onboarding, step-by-step immigration workflow management, access to visa and job resources, and a responsive design optimized for both Android and iOS devices.
As the sole developer of the MVP1 phase, under the mentorship of senior colleagues, I built the app’s foundation with a focus on usability, functionality, and scalability. Leveraging FlutterFlow's capabilities, I implemented tailored workflows, Firebase-based secure data management, and dynamic pages for a seamless user experience. The app highlights my ability to independently deliver professional-grade solutions under tight deadlines while ensuring future scalability and user satisfaction.`,
    gallery: [emigr81, emigr82, emigr83],
    videos: [emigr8Video],
    liveLink: "#",
    repoLink: "#",
    techStack: ['No-code(Flutterflow.io)'],
    additionalInfo: `Emigr8 demonstrates my ability to independently create functional, user-friendly applications while leveraging modern tools like FlutterFlow. This project reflects my commitment to delivering impactful solutions, combining my technical expertise with a deep understanding of user needs. Through Emigr8, I successfully bridged technology and service delivery to create a platform that simplifies complex processes for users worldwide.`,
  },
  {
    id: 3,
    title: "React Calculator",
    shortDescription: `The React Calculator is a dynamic, user-friendly web application developed using React. It is designed to perform essential arithmetic operations with added functionalities, offering a smooth and intuitive user experience. This project exemplifies my ability to build interactive and responsive web applications with efficient state management and a clean user interface. The calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division, while handling complex, cumulative operations with accurate operator precedence. It features dynamic input handling that allows users to input and edit equations interactively, along with real-time calculation updates, ensuring a seamless and error-free experience. Additionally, the design is responsive, making it accessible on both desktop and mobile devices, with keyboard support for faster interactions.

The development of the React Calculator involved tackling challenges such as implementing correct operator precedence, managing dynamic state updates, and ensuring thorough error prevention. The application uses React's component-based architecture and the useState hook to handle state efficiently, while custom JavaScript logic ensures accurate evaluation of mathematical expressions following the order of operations. With its minimalistic yet functional design, the calculator provides users with an engaging interface that includes clear buttons for essential operations. Future enhancements for the project could include a history feature for saving past calculations, a scientific mode for advanced mathematical functions, and theming options to enhance usability and personalization.
`,
    gallery: [reactCalculator1, reactCalculator2, reactCalculator3],
    videos: [reactCalculatorVideo],
    liveLink: "#",
    repoLink: "https://github.com/choji-alexander/reactCalculator",
    techStack: ["React", "HTML", "CSS", "JavaScript"],
    additionalInfo: `The React Calculator project is a testament to my proficiency in React and web application development. It combines functional utility with an engaging user interface, demonstrating my ability to address real-world challenges in application design and development.
This project not only reflects my technical skills but also my dedication to creating practical solutions for everyday needs.`,
  },
  {
    id: 4,
    title: "BlackJack Game",
    shortDescription: `The Blackjack Project is an interactive, single-interface web application built using HTML, CSS, and JavaScript. It brings the excitement of the classic card game to the browser, allowing users to experience a dynamic and engaging gameplay experience. This project highlights my ability to create functional and visually appealing web applications using core web technologies, without the need for advanced frameworks or libraries.
The game adheres to standard Blackjack rules, where the objective is to reach a score of 21 or as close as possible without exceeding it. Players compete against a virtual dealer, drawing cards and making strategic decisions like "hit" or "stand." The interface provides a clear and user-friendly layout, displaying cards, scores, and game actions in real time. The game logic is built to handle various scenarios, including busts, ties, and Blackjack wins, ensuring an authentic and enjoyable gaming experience. Responsive design principles make the game accessible on a variety of devices, from desktops to smartphones.
The development of the Blackjack Project involved implementing complex game logic, including score calculation, card randomization, and decision-making processes. Special attention was given to creating a seamless user experience by ensuring smooth transitions and real-time updates. Custom styling using CSS adds to the game's visual appeal, making the interface both engaging and intuitive. Future updates could include multiplayer support, additional customization options, and the integration of sound effects to enhance interactivity.`,
    gallery: [blackJack1, blackJack2, blackJack3],
    videos: [blackjackVideo],
    liveLink: "#",
    repoLink: "https://github.com/choji-alexander/BlackJack/tree/master",
    techStack: ["HTML", "CSS", "JavaScript"],
    additionalInfo: `The Blackjack Project showcases my ability to create engaging and functional web applications using HTML, CSS, and JavaScript. It combines logic, creativity, and design to deliver a smooth gaming experience, demonstrating my skills in both front-end development and user-centered design. This project reflects my dedication to developing practical and entertaining solutions while pushing the boundaries of core web technologies.`,
  },
  {
    id: 5,
    title: "Leads Tracker",
    shortDescription: `The LeadsTracker project is a practical and user-friendly Chrome extension designed to streamline URL management and enhance productivity. Built with HTML, CSS, and vanilla JavaScript, this extension allows users to effortlessly save, organize, and revisit web links, catering to both personal and professional needs. With its simple yet functional interface, LeadsTracker offers three main features: Save Input, which lets users manually input and save URLs; Save Tab, which enables saving the URL of the active browser tab with a single click; and Delete All, which clears all saved URLs to start fresh. The extension seamlessly integrates with the browser environment, leveraging local storage for persistent data retention, ensuring saved links remain available even after closing the browser. Its minimalistic design guarantees accessibility for users of all technical backgrounds.
The core functionalities of LeadsTracker include dynamic URL management for saving and retrieving links, persistent storage to maintain data across sessions, and real-time updates that reflect changes instantly. Its responsive design ensures optimal usability across different screen sizes. Development challenges like handling browser APIs, managing data persistence, and creating an interactive user interface were addressed effectively. The chrome.tabs API enables dynamic fetching of active tabs, while robust JavaScript logic ensures seamless local storage operations. The modular structure enhances maintainability and scalability, paving the way for future features such as categorizing links, implementing a search function, and syncing data across devices using cloud storage.`,
    gallery: [leadsTracker1, leadsTracker2, leadsTracker3],
    videos: [leadsTrackerVideo],
    liveLink: "#",
    repoLink: "https://github.com/example/project2",
    techStack: ["HTML", "CSS", "JavaScript"],
    additionalInfo: `The LeadsTracker project is a testament to my proficiency in building practical browser-based solutions. It showcases my ability to work with browser APIs, manage persistent data storage, and create interactive user experiences. This extension not only highlights my technical expertise but also reflects my dedication to delivering impactful and user-centric applications. By addressing a common productivity challenge, LeadsTracker demonstrates my commitment to developing solutions that make everyday tasks more efficient and enjoyable.`,
  },
  {
    id: 6,
    title: "Study Bud",
    shortDescription: `The StudyBud project is an interactive and user-friendly web application developed using Python, Django, JavaScript, CSS, and HTML. Designed to enhance collaborative learning, StudyBud allows users to register, view their own and others' profiles, create topic-specific rooms, and engage in meaningful discussions through messages within these rooms. This project exemplifies my ability to build comprehensive full-stack web applications that integrate robust backend functionality with a clean and intuitive frontend interface. StudyBud supports secure user authentication and profile management, ensuring personalized and safe user experiences. The platform's dynamic features enable the creation of dedicated topic rooms where users can add and view messages, fostering a vibrant community for discussing various subjects and facilitating collective learning.
The development of StudyBud involved overcoming challenges such as implementing secure user authentication, managing real-time interactions within discussion rooms, and ensuring seamless integration between frontend and backend components. Utilizing Django's powerful framework, the application efficiently handles database operations and server-side logic, while JavaScript enhances client-side interactivity and responsiveness. The responsive design ensures optimal usability across different devices, providing an excellent user experience on both desktop and mobile platforms. Future enhancements for StudyBud could include features like private messaging, multimedia content sharing within rooms, advanced search functionalities for topics, and integration with educational resources to further enrich the collaborative learning environment.`,
    gallery: [studyBud1, studyBud2, studyBud3],
    videos: [studyBudVideo],
    liveLink: "#",
    repoLink: "https://github.com/choji-alexander/studybud",
    techStack: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
    additionalInfo: `The StudyBud project is a testament to my expertise in full-stack web development, combining functional utility with an engaging user interface. It demonstrates my ability to address real-world challenges in application design and development, from secure user authentication to dynamic, real-time interactions within discussion rooms. This project not only reflects my technical skills but also my dedication to creating practical solutions that enhance collaborative learning and user engagement. By addressing the needs of students and educators alike, StudyBud underscores my commitment to developing applications that foster community and facilitate effective learning environments.`,
  },
  {
    id: 7,
    title: "React To-Do List",
    shortDescription: `The React To-Do List project is a straightforward yet efficient web application developed using React and Vite. This application serves as a simple task management tool, allowing users to input to-dos, which are then dynamically displayed in a list beneath the input field. The project showcases my ability to create clean, functional, and responsive web applications that focus on user-centric design. With its intuitive interface, the React To-Do List ensures users can easily add tasks and visualize them in real-time, making it an excellent tool for personal organization and productivity.
This project highlights the core features of React, such as component-based architecture, state management using the useState hook, and real-time UI updates. The use of Vite as the build tool ensures fast development and optimized performance, making the application lightweight and responsive. The clean and minimalistic design emphasizes functionality, ensuring that users can interact with the app effortlessly. Future enhancements could include features such as task editing, deleting completed tasks, categorization, and integrating persistence through local storage or backend support for saving tasks across sessions.`,
    gallery: [toDoList1, toDoList2, toDoList3],
    videos: [toDoListVideo],
    liveLink: "#",
    repoLink: "https://github.com/choji-alexander/reactToDoList",
    techStack: ['React+Vite,', 'HTML', 'CSS', 'JavaScript'],
    additionalInfo: `The React To-Do List project exemplifies my ability to create interactive and responsive web applications using modern technologies. It combines simplicity with functional utility, demonstrating my skills in leveraging React's powerful features to build dynamic interfaces. This project reflects my commitment to solving everyday problems through technology, offering a practical solution for task management. By focusing on usability and performance, the React To-Do List serves as a testament to my proficiency in React and my dedication to delivering user-friendly applications.`,
  },
  {
    id: 8,
    title: "Multimedia Web App",
    shortDescription: `The Multimedia Web App is an intuitive and engaging platform developed with Python, Django, and HTML. It empowers users with a simple and accessible interface, enabling them to upload and share multimedia content seamlessly. Whether sharing photos or videos, users can contribute to a growing library of media while exploring uploads from others. The app combines robust back-end functionality with a responsive front-end to deliver a user-friendly experience across devices.

This project highlights my ability to build full-stack web applications with a focus on user interaction and efficient data management. Using Django's FileField and ImageField, the app ensures secure media uploads and organized storage. Its intuitive design supports dynamic media loading, while features like real-time updates enhance usability. Future enhancements could include user accounts, categories for better organization, and interactive features like comments and likes, making the platform even more engaging and versatile.`,
    gallery: [multimedia1, multimedia2, multimedia3],
    videos: [multimediaVideo],
    liveLink: "#",
    repoLink: "https://github.com/choji-alexander/MultimediaWebsite_backup",
    techStack: ['HTML', 'Python', 'Django'],
    additionalInfo: `The Multimedia Web App is a testament to my expertise in web application development using Django and Python. It highlights my ability to create functional and visually appealing platforms that cater to real-world needs. By seamlessly combining back-end logic with an interactive front-end, the project reflects my commitment to building practical, user-friendly solutions.`,
  },
  {
    id: 9,
    title: "User Authentication",
    shortDescription: `The User Authentication Project is a robust authentication system built using React and JavaScript, with seamless integration capabilities for Django backends. It supports Google Auth, Twitter Auth, and Microsoft Auth, providing users with multiple secure options to authenticate their accounts. The project emphasizes simplicity and security, delivering a responsive and user-friendly experience for handling login and account management workflows.
As the sole developer, I implemented the system’s core functionality, ensuring compatibility with third-party authentication providers and backend integrations. By leveraging React’s component-based architecture and modern JavaScript practices, I created a scalable and reusable authentication framework. The project showcases my ability to develop secure and reliable authentication systems that enhance user trust and streamline access management.`,
    gallery: [userAuth1, userAuth2, userAuth3],
    videos: [userAuthVideo],
    liveLink: "#",
    repoLink: "https://github.com/choji-alexander/Ecommerce-frontend",
    techStack: ['HTML', 'React', 'Javascript', 'CSS'],
    additionalInfo: `This project highlights my expertise in modern front-end development and authentication integrations. It reflects my capability to build scalable, secure, and user-centric solutions that are vital for applications requiring robust identity management.`,
  },
  {
    id: 101,
    title: "Github Stats Web Services",
    shortDescription: `The GitHub Web Stats project is a full-stack analytics platform developed with Django and React, designed to provide users with comprehensive insights into their GitHub activities. The application features a personalized dashboard where users can track repository activity, contribution trends, and top-performing repositories. Dynamic charts and graphs visually represent data such as coding language distribution and daily contributions, while secure GitHub OAuth integration ensures user privacy and data security. With its responsive design, the platform offers an intuitive experience across desktop and mobile devices.
This project demonstrates my ability to integrate robust back-end solutions with dynamic front-end interfaces. Key development highlights include using Django REST Framework for API handling, React hooks for state management, and data visualization tools like Chart.js for creating interactive graphs. Future enhancements could include historical analysis, milestone notifications, and exportable reports, making the platform even more engaging and functional.`,
    gallery: [gsws1, gsws2, gsws3],
    videos: [gswsVideo],
    liveLink: "#",
    repoLink: "https://github.com/choji-alexander/gsws",
    techStack: ['Python', 'Django', 'Javascript', 'React', 'HTML', 'CSS', 'dbsqlite'],
    additionalInfo: `The GitHub Web Stats project is a testament to my expertise in full-stack web development, showcasing my ability to build engaging and functional platforms that solve real-world problems. By integrating Django's powerful back-end capabilities with React's dynamic front-end tools, this project reflects my commitment to delivering innovative and user-friendly solutions tailored to individual needs.`,
  },
  {
    id: 102,
    title: "Med Lab App",
    shortDescription: `The MedLab app, developed with FlutterFlow, is a comprehensive platform designed to connect users with a wide range of medical services. Whether users are seeking diagnostic tests, consultations, or specialized treatments, the app allows them to browse available options and conveniently book appointments. Its user-friendly interface ensures that navigating medical services is effortless and accessible for all users, streamlining the process of finding and scheduling healthcare.
As the sole developer, I took charge of designing and implementing the app’s features, ensuring it is scalable, functional, and visually appealing. Key functionalities include user registration, browsing of medical services, and an integrated appointment booking system. Leveraging FlutterFlow's no-code environment, I was able to efficiently build a robust and reliable app tailored to meet healthcare needs.`,
    gallery: [medlab1, medlab2, medlab3],
    videos: [medlabVideo],
    liveLink: "#",
    repoLink: "#",
    techStack: ['No-code(Flutterflow.io)'],
    additionalInfo: `In conclusion, the MedLab app demonstrates my ability to create impactful, user-centered solutions in the healthcare space. By simplifying the process of accessing and scheduling medical services, the app empowers users to take control of their health while showcasing my expertise in developing functional and innovative digital platforms.`,
  },
  // Add more projects here
];

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div className="project-details-container">Project not found</div>;
  }

  return (
    <div className="project-details-container">
      <h1 className="project-title">{project.title}</h1>
      <p className="short-description">{project.shortDescription}</p>

      <div className="tech-stack">
        <h3>Tech Stack:</h3>
        <p>{project.techStack.join(", ")}</p>
      </div>

      {project.gallery.length > 0 && (
        <div className="project-gallery">
          <h3>Project Screenshots</h3>
          <div className="gallery-grid">
  {project.gallery.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Project ${project.title} - Slide ${index + 1}`}
      className="gallery-image"
    />
  ))}
</div>

        </div>
      )}

      {project.videos.length > 0 && (
        <div className="project-videos">
          <h3>Project Demo</h3>
          <div className="videos-grid">
            {project.videos.map((video, index) => (
              <iframe
                key={index}
                src={video}
                title={`Project Video ${index + 1}`}
                frameBorder="0"
                allowFullScreen
                className="video-embed"
              ></iframe>
            ))}
          </div>
        </div>
      )}

      <div className="project-links">
        
        {project.repoLink && (
          <a
            href={project.repoLink}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repository
          </a>
        )}
      </div>

      {project.additionalInfo && (
        <div className="additional-info">
          <h3>Additional Information</h3>
          <p>{project.additionalInfo}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
