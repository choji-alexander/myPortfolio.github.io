import React from 'react';
import './About.css'; // Import the CSS for styling
import about_pic from "../assets/about-pic.jpg";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";

function About() {
  return (
    <div className="about-page">
      {/* Section 1: Two Columns */}
      <section className="about-section">
        <div className="about-row">
          {/* Left Column: Image */}
          <div className="about-column about-photo">
            <img
              src={about_pic}
              alt="About Me"
              className="about-image"
            />
          </div>
          {/* Right Column: Text */}
          <div className="about-column about-text">
            <h2>About Me</h2>
            <p>
            I, <strong>Choji Alexander Pam,</strong> am a seasoned software developer with over four years of experience and two years of industry experience, specializing in Python, JavaScript, Django and web development, mobile app development, machine learning, web automation and much more. My passion for crafting innovative solutions to complex problems drives me to constantly seek out new challenges and refine my skills.
            </p>
            <p>
            I thrive in dynamic, collaborative environments and I am dedicated to producing high-quality, maintainable code that meets both technical and business requirements. I'm a strong advocate for clean, readable code and am passionate about delivering software that is robust, scalable, and reliable.
            </p>
          </div>
        </div>
      </section>

      <div class="about-details-container">
        <div class="about-containers">
            <div class="details-container">
                <img src={experienceIcon} alt="Experience icon" class="icon"></img>
                <h3>Experience</h3>
                <p>4+ years <br />Software Development/Engineering <br />Freelance</p>
            </div>
            <div class="details-container">
                <img src={educationIcon} alt="Education icon" class="icon"></img>
                <h3>Education</h3>
                <p>B. ENG Computer Engineering <br />Afe Babalola University <br />Sept, 2016 - Nov, 2021</p>
            </div>
        </div>
      </div>

      {/* Section 2: Three Columns */}
      <section className="about-section">
        <div className="about-row three-columns">
          {/* Left Placeholder */}
          <div className="about-column placeholder">
            <p>“Crafting code with creativity and precision.”</p>
          </div>
          {/* Middle Column: Text */}
          <div className="about-column about-description">
            <h3>Why I Do What I Do</h3>
            <p>
              My journey into development has been driven by curiosity, a love
              for solving problems, and creating impactful digital experiences
              for clients and users worldwide.
              I believe technology can transform ideas into reality. My focus
              lies in building products that improve lives, streamline processes,
              and inspire innovation. I work with teams and individuals to bring
              visions to life.
            </p>
          </div>
          {/* Right Placeholder */}
          <div className="about-column placeholder">
            <p>“Building ideas, one line of code at a time.”</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Technical Skills</h2>
        <ul className="skills-list">
          <li>React.js / JavaScript</li>
          <li>HTML5 / CSS3 / Wordpress</li>
          <li>Python / Django</li>
          <li>AI / Machine learning</li>
          <li>API Integration / Django-rest framework</li>
          <li>Mobile App Development</li>
          <li>Web Application Development / Website Development</li>
          <li>MySQL / Postgresql</li>
          <li>Data Science / Data Analysis</li>
          <li>Redux / Regular Expressions</li>
          <li>OOP(Object-oriented Programming)</li>
          <li>Node.js / Fast API/API</li>
          <li>Web Automation / Web Scraping</li>
          <li>C / C++</li>
          <li>Docker / Git and Git hub</li>
          <li>Requests / Response</li>
          <li>CCNA Networking</li>
          <li>DevOps / Shell Scripting</li>
          <li>No Code Software Development(Flutterfolw)</li>
          <li>FireBase / FireStore</li>
          <li>Open-Source / Collaboration</li>
          <li>Dart</li>
          <li>SciKit learn / Numpy</li>
          <li>Pandas / Matplotlib</li>
          <li>Selenium / Bootstraps</li>
          <li>Hardware maintenance</li>
        </ul>
        <br />
        <h2>Soft Skills</h2>
        <ul className="skills-list">
          <li>Collaboration</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Empathy</li>
          <li>Leadership</li>
          <li>Adaptability</li>
          <li>Creativity</li>
          <li>Cooperation</li>
          <li>Research</li>
          <li>Attention To Detail</li>
          <li>Innovation</li>
          <li>Analytical thinking</li>
          <li>Problem Solving</li>
          <li>Critical Thinking</li>
          <li>Time Management</li>
          <li>Resilience</li>
          <li>Efficiency/Efficacy</li>
        </ul>
        <br />
        <h2>Languages</h2>
        <ul className="skills-list">
          <li>English</li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="contact-cta">
        <h2>Let's Connect!</h2>
        <p>
          I'm open to freelance opportunities, collaborations, or exciting full-time roles.
        </p>
        <a href="/contact" className="cta-button">
          Contact Me
        </a>
      </section>
    </div>
  );
}

export default About;
