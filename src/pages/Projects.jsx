import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Projects.css'; // Your custom styles for the projects page
import reactCalculator from "../assets/reactCalculator.png";
import reactTimes from "../assets/reactTimes.png";
import leadsTracker from "../assets/leadsTracker_photo.png";
import studyBud from "../assets/studybud_photo.png";
import reactToDoList from "../assets/reactToDoList.png";
import blackJack from "../assets/blackjack_photo.png";
import multimedia from "../assets/multimedia_photo.png";


const Projects = () => {
  const completedProjects = [
    { 
      id: 1, 
      title: 'Project 1', 
      description: 'Short description of the completed project 1', 
      techStack: ['React', 'Node.js'], 
      imgUrl: 'project1-thumbnail.jpg', 
      detailsLink: '/projects/1'
    },
    { 
        id: 2, 
        title: 'Project 2', 
        description: 'Short description of the completed project 1', 
        techStack: ['React', 'Node.js'], 
        imgUrl: 'project1-thumbnail.jpg', 
        detailsLink: '/projects/2'
      },
    { 
        id: 3, 
        title: 'React Calculator', 
        description: 'A simple and basic illustration of a Calculator.', 
        techStack: ['React', 'Node.js', 'HTML', 'CSS', 'Javascript'], 
        imgUrl: reactCalculator, 
        detailsLink: '/projects/3'
        },
    {
      id: 4, 
      title: 'React Times', 
      description: 'A basic illustration of a Blog Web Application.', 
      techStack: ['React', 'HTML', 'CSS', 'JavaScript'], 
      imgUrl: reactTimes,
      detailsLink: '/projects/4'
    },
    { 
        id: 5, 
        title: 'Leads Tracker', 
        description: 'A Chrome Extension that can be used to track Leads.', 
        techStack: ['Javascript', 'HTML', 'CSS', 'JSON'], 
        imgUrl: leadsTracker, 
        detailsLink: '/projects/5'
      },
      {
        id: 6, 
        title: 'StudyBud', 
        description: 'A web application that allows users to create a room to discuss topics.', 
        techStack: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'], 
        imgUrl: studyBud,
        detailsLink: '/projects/6'
      },
      {
        id: 7, 
        title: 'React To-Do List', 
        description: 'A simple To-Do List.', 
        techStack: ['React+Vite,', 'HTML', 'CSS', 'JavaScript'], 
        imgUrl: reactToDoList,
        detailsLink: '/projects/7'
      },
      {
        id: 8, 
        title: 'BlackJack Game', 
        description: 'A simple BlackJack game.', 
        techStack: ['HTML', 'CSS', 'JavaScript'], 
        imgUrl: blackJack,
        detailsLink: '/projects/8'
      },
      {
        id: 9, 
        title: 'Multimedia Website', 
        description: 'A simple and basic illustration of a Multimedia Web Application.', 
        techStack: ['HTML', 'Python', 'Django'], 
        imgUrl: multimedia,
        detailsLink: '/projects/9'
      },
    // Add more completed projects here
  ];

  const currentProjects = [
    { 
      id: 3, 
      title: 'Project 3', 
      description: 'Short description of the ongoing project 3', 
      techStack: ['Vue', 'Firebase'], 
      imgUrl: 'project3-thumbnail.jpg', 
      detailsLink: '/projects/3'
    },
    {
      id: 4, 
      title: 'Project 4', 
      description: 'Short description of the ongoing project 4', 
      techStack: ['Python', 'Django'], 
      imgUrl: 'project4-thumbnail.jpg',
      detailsLink: '/projects/4'
    },
    // Add more current projects here
  ];

  return (
    <div className="projects-page">
      <section className="completed-projects">
        <h2>Projects/Works</h2>
        <div className="projects-list">
          {completedProjects.map(project => (
            <div className="project-card" key={project.id}>
              <img src={project.imgUrl} alt={project.title} className="project-thumbnail" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack: </strong>{project.techStack.join(', ')}</p>
              <Link to={project.detailsLink} className="project-link">View Details</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="current-projects">
        <h2>Current Projects</h2>
        <div className="projects-list">
          {currentProjects.map(project => (
            <div className="project-card" key={project.id}>
              <img src={project.imgUrl} alt={project.title} className="project-thumbnail" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack: </strong>{project.techStack.join(', ')}</p>
              <Link to={project.detailsLink} className="project-link">View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
