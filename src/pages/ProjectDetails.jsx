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
import reactCalculatorVideo from "../assets/reactCalculatorVideo.mp4";
import blackjackVideo from "../assets/BlackJackVideo.mp4";
import leadsTrackerVideo from "../assets/leadsTrackerVideo.mp4";
import studyBudVideo from "../assets/studyBudVideo.mp4";
import toDoListVideo from "../assets/toDoListVideo.mp4";


// Example projects data (replace this with a fetch call or API integration in a real app)
const projectsData = [
  {
    id: 1,
    title: "Project 1",
    shortDescription: "This is a brief writeup about Project 1, its purpose, and features.",
    gallery: ["project1-image1.jpg", "project1-image2.jpg"],
    videos: ["https://www.youtube.com/embed/example-video1"],
    liveLink: "https://example.com/project1",
    repoLink: "https://github.com/example/project1",
    techStack: ["React", "Node.js", "CSS"],
    additionalInfo: "Project 1 was developed as a solution to ...",
  },
  {
    id: 2,
    title: "Project 2",
    shortDescription: "This is a brief writeup about Project 2, its purpose, and features.",
    gallery: ["project2-image1.jpg", "project2-image2.jpg"],
    videos: ["https://www.youtube.com/embed/example-video2"],
    liveLink: "https://example.com/project2",
    repoLink: "https://github.com/example/project2",
    techStack: ["HTML", "CSS", "JavaScript"],
    additionalInfo: "Project 2 aims to solve ...",
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
          <h3>Project Gallery</h3>
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
          <h3>Project Video</h3>
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
