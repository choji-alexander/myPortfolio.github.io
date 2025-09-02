import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import profile_pic from "../assets/profile-pic.jpg";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import homeAbout_pic from "../assets/chojiPic.jpg";
import resume from "../assets/ChojiAlexanderPamResume.docx";
import eazyLinks1 from "../assets/eazyLinks4.png";
import studyBud1 from "../assets/studybud_photo.png";
import websiteShow1 from "../assets/websiteShow1.png";
import whatTime1 from "../assets/whatTime4.png";


const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="home-hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Crafting solutions that inspire and deliver.</p>
          <Link to="/projects" className="home-cta-button">View My Work</Link>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="home-profile-section">
        <div className="home-profile-pic-container">
          <img src={profile_pic} alt="profilePhoto" />
        </div>
        <div className="home-profile-text">
          <p className="home-profile-intro">Hello I'm</p>
          <h1 className="home-profile-name">CHOJI ALEXANDER PAM</h1>
          <p className="home-profile-role">Entrepreneur and Software Developer/Engineer</p>
          <div className="home-btn-container">
          <a
  href={resume} // Path to your CV file
  download="ChojiAlexander_CV.docx" // The file name for the downloaded CV
  className="home-btn home-btn-color-2"
>
  Download CV
</a>

            <button className="home-btn home-btn-color-1" onClick={() => (window.location.href = '.#/contact')}>
              Contact Info
            </button>
          </div>
          <div className="home-socials-container">
            {/*<img
              src={linkedinIcon}
              alt="My LinkedIn Profile"
              className="home-icon"
              onClick={() => window.open('https://www.linkedin.com/in/alexander-choji-4a41a4188', '_blank', 'noopener,noreferrer')}
              /> */}
            <img
              src={githubIcon}
              alt="My GitHub Profile"
              className="home-icon"
              onClick={() => window.open('https://github.com/choji-alexander', '_blank', 'noopener,noreferrer')}
            />
          </div>
        </div>
      </section>

      
      {/* About Section */}
      <section className="home-about-section">
        <h2>About Me</h2>
        <div className="home-about-container">
          <div className="home-about-content">
            <p>
              Hello! I'm <strong>Choji Alexander Pam</strong>, a software
              developer passionate about creating interactive, responsive, and
              user-friendly applications/solutions. I specialize in modern
              technologies, with expertise in Flutter/Dart, React/JavaScript, Flutterflow, Python, Wordpress and general software 
              development/engineering.
            </p>
          </div>
          <div className="home-about-content">
            <img src={homeAbout_pic} alt="About Me" />
          </div>
        </div>

      </section>

      {/* Featured Projects */}
      <section className="home-featured-projects">
        <h2 className="home-services-heading">Featured Projects</h2>
        <div className="home-projects-list">
          <div className="home-project-card">
            <img src={eazyLinks1} alt="EazyLinks" className="home-project-image" />
            <h3>EazyLinks</h3>
            <p>A mobile-first marketplace app connecting users with trusted local service providers.</p>
            <Link to="/projects/16" className="home-project-link">View Details</Link>
          </div>
          <div className="home-project-card">
            <img src={studyBud1} alt="StudyBud" className="home-project-image" />
            <h3>StudyBud</h3>
            <p>An interactive web app for collaborative learning and topic discussions.</p>
            <Link to="/projects/6" className="home-project-link">View Details</Link>
          </div>
          <div className="home-project-card">
            <img src={websiteShow1} alt="Website Showcase" className="home-project-image" />
            <h3>Website Showcase</h3>
            <p>A simple platform for displaying and exploring company websites.</p>
            <Link to="/projects/12" className="home-project-link">View Details</Link>
          </div>
          <div className="home-project-card">
            <img src={whatTime1} alt="WhatTime" className="home-project-image" />
            <h3>WhatTime</h3>
            <p>A feature-rich app for managing time, events, holidays, and weather globally.</p>
            <Link to="/projects/15" className="home-project-link">View Details</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="home-services-section">
  <h2 className="home-services-heading">Featured Services</h2>
  <div className="home-services-list">
    <div className="home-service-item">
      <div className="home-service-icon">
        <i className="fas fa-code"></i>
      </div>
      <h3>Website/Web Applications</h3>
      <p>Creating responsive and modern websites or web applications tailored to your needs using suitable tools like Wordpress, React, and more.</p>
    </div>
    <div className="home-service-item">
      <div className="home-service-icon">
        <i className="fas fa-mobile-alt"></i>
      </div>
      <h3>Mobile App Development</h3>
      <p>Designing seamless and functional IOS and Android applications using Flutter/Dart, FlutterFlow and other modern technologies.</p>
    </div>
    <div className="home-service-item">
      <div className="home-service-icon">
        <i className="fas fa-laptop-code"></i>
      </div>
      <h3>General Software Solutions</h3>
      <p>Providing solutions for diverse software needs using Python, Artificial Intelligence and other necessary tools.</p>
    </div>
  </div>
</section>


      {/* Contact CTA */}
      <section className="home-cta-section">
        <p>Ready to bring your vision to life? Let’s collaborate!</p>
        <Link to="/contact" className="home-cta-button">Get in Touch</Link>
      </section>
    </div>
  );
};

export default Home;