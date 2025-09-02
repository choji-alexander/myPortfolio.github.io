import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Projects.css'; // Your custom styles for the projects page
import reactCalculator from "../assets/reactCalculator.png";
import leadsTracker from "../assets/leadsTracker_photo.png";
import studyBud from "../assets/studybud_photo.png";
import reactToDoList from "../assets/reactToDoList.png";
import blackJack from "../assets/blackjack_photo.png";
import multimedia from "../assets/multimedia_photo.png";
import gsws from "../assets/gsws.png";
import emigr8 from "../assets/emigr8.png";
import userAuth from "../assets/UserAuth.png";
import coutureHub from "../assets/coutureHub.png";
import medlab from "../assets/medlab.JPG";
import proppal from "../assets/proppal4.png";
import yourViewz from "../assets/yourViewz4.png";
import websiteShow from "../assets/websiteShow1.png";
import angelman from "../assets/angelman1.png";
import afripay from "../assets/afripay4.png";
import whatTime from "../assets/whatTime4.png";
import eazyLinks from "../assets/eazyLinks4.png";


const Projects = () => {
  const completedProjects = [
    { 
      id: 15, 
      title: 'WhatTime', 
      description: 'Designed to help users manage, compare, and explore time, holidays, events, and weather across the globe. ', 
      techStack: ['Flutterflow', 'Firebase', 'Flutter/Dart'], 
      imgUrl: whatTime, 
      detailsLink: '/projects/15'
    },
    { 
      id: 16, 
      title: 'EazyLinks', 
      description: 'EazyLinks is a modern, mobile-first marketplace platform that connects users with trusted local service providers across a wide range of categories. ', 
      techStack: ['Flutterflow', 'Firebase', 'Flutter/Dart'], 
      imgUrl: eazyLinks, 
      detailsLink: '/projects/16'
    },
    { 
      id: 14, 
      title: 'Afripay', 
      description: 'AfriPay is a secure digital‑payments and financial‑services platform built for mobile and web.', 
      techStack: ['Flutterflow', 'Firebase', 'Flutter/Dart'], 
      imgUrl: afripay, 
      detailsLink: '/projects/14'
    },
    { 
      id: 13, 
      title: 'Angelman Syndrome', 
      description: 'Designed to connect patients, caregivers, families, and supporters.', 
      techStack: ['Flutterflow', 'Firebase', 'Flutter/Dart'], 
      imgUrl: angelman, 
      detailsLink: '/projects/13'
    },
    { 
      id: 11, 
      title: 'YourViewz', 
      description: 'Designed to aid the public view/book adverts of products, events, hotels, restaurants, clubs, car rentals, service apartments, etc from around.', 
      techStack: ['Flutterflow', 'Firebase', 'Flutter/Dart'], 
      imgUrl: yourViewz, 
      detailsLink: '/projects/11'
    },
    { 
      id: 10, 
      title: 'PropPal', 
      description: 'Designed to ease the process of buying, selling, renting or leasing properties, lands and business.', 
      techStack: ['Flutterflow', 'Firebase', 'Flutter/Dart'], 
      imgUrl: proppal, 
      detailsLink: '/projects/10'
    },
    { 
      id: 12, 
      title: 'Website Showcase', 
      description: 'Just a simple website showcase.', 
      techStack: ['Wordpress', 'Html/CSS', 'Javascript'], 
      imgUrl: websiteShow, 
      detailsLink: '/projects/12'
    },
    { 
      id: 1, 
      title: 'Fashion App', 
      description: 'Designed to bridge the gap between users and fashion service providers such as tailors and vendors.', 
      techStack: ['No-code(Flutterflow.io)'], 
      imgUrl: coutureHub, 
      detailsLink: '/projects/1'
    },
    { 
        id: 2, 
        title: 'eMigr8 App', 
        description: 'A Cross-Platform App for Relocation and Immigration', 
        techStack: ['No-code(Flutterflow.io)'], 
        imgUrl: emigr8, 
        detailsLink: '/projects/2'
      },
    {
      id: 102, 
      title: 'Med Lab App', 
      description: 'Simplifying Access to Medical Services', 
      techStack: ["No-code(Flutterflow.io)"], 
      imgUrl: medlab,
      detailsLink: '/projects/102'
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
      
      
    // Add more completed projects here
  ];

  const currentProjects = [
    { 
      id: 101, 
      title: 'Github Stats Web Services', 
      description: 'A Django and React-Based Analytics Platform', 
      techStack: ['Python', 'Django', 'Javascript', 'React', 'HTML', 'CSS', 'dbsqlite'], 
      imgUrl: gsws, 
      detailsLink: '/projects/101'
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
      id: 4, 
      title: 'BlackJack Game', 
      description: 'A simple BlackJack game.', 
      techStack: ['HTML', 'CSS', 'JavaScript'], 
      imgUrl: blackJack,
      detailsLink: '/projects/4'
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
        id: 9, 
        title: 'User Authentication', 
        description: 'A simple and basic illustration of Google, twitter and microsoft authentication.', 
        techStack: ['HTML', 'React', 'Javascript', 'CSS'], 
        imgUrl: userAuth,
        detailsLink: '/projects/9'
      },
      {
        id: 8, 
        title: 'Multimedia Web App', 
        description: 'A simple and basic illustration of a Multimedia Web Application.', 
        techStack: ['HTML', 'Python', 'Django'], 
        imgUrl: multimedia,
        detailsLink: '/projects/8'
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
        <h2>Other Projects</h2>
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
