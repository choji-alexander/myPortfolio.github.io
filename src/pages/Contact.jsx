import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'; // Import the icons

const ContactMe = () => {
  return (
    <div className="contact-me">
      {/* Header Section */}
      <section className="header-section">
        <h1>Contact Me</h1>
        <p>
          Whether you're an employer, partner, collaborator, or someone seeking my services, I look forward to hearing from you. 
          Reach out through the provided contact details or fill out the form below.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <FaEnvelope size={24} />
            <h3>Email</h3>
            <p><a href="mailto:chojialexander@gmail.com">chojialexander@gmail.com</a></p>
          </div>
          <div className="info-item">
            <FaPhone size={24} />
            <h3>Phone</h3>
            <p><a href="tel:+2348109976687">+234 (810) 997-6687</a></p>
          </div>
          <div className="info-item">
            <FaLinkedin size={24} />
            <h3>LinkedIn</h3>
            <p><a href="https://www.linkedin.com/in/alexander-choji-4a41a4188/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt size={24} />
            <h3>Location</h3>
            <p>Abuja, Nigeria</p>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="inquiry-form">
        <h2>Service Inquiry Form</h2>
        <p>If you're interested in any of my services, please fill out the form below. I'll get back to you promptly.</p>
        {/*<form className="form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Your Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Enter a Subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Required/Subject</label>
            <select id="service" name="service" required>
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app-development">Mobile App Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="web-application-development">Web Application Development</option>
              <option value="document-creation-editing">Document Creation/Editing</option>
              <option value="software-solutions">Software Solutions</option>
              <option value="api-integration">API Integration</option>
              <option value="fullstack-development">Fullstack Development</option>
              <option value="web-scraping-automation">Web Scraping/Automation</option>
              <option value="data-science-analysis">Data Science/Analysis</option>
              <option value="general-software">General Software Development</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Details</label>
            <textarea id="message" name="message" rows="4" placeholder="Provide any additional information"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>*/}
        <div className="google-form-container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScQCZ8QcaQd4fQuRQdoPmqsuq4K9Pch4KfJzM-xXSsQUwqV6w/viewform?embedded=true" width="640" height="989" frameborder="0" marginheight="0" marginwidth="0" title="Contact Form">Loading…</iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
