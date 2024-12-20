import React from "react";
import Slider from "react-slick";
import "./ServicesCertifications.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import pythonCertificate from "../assets/pythonCertificate.png";
import alxVentures from "../assets/gig-at-a-startup.png";
import onePercent from "../assets/onePercentClub.png";
import jP from "../assets/jpMorgan.png";
import nysc from "../assets/nysc.png";
import beng from "../assets/beng.png";

const ServicesCertifications = () => {
  const services = [
    { title: "Web Development", description: "Creating responsive and dynamic websites.", icon: "🌐" },
    { title: "Mobile App Development", description: "Building user-friendly mobile applications.", icon: "📱" },
    { title: "UI/UX Design", description: "Designing intuitive user interfaces and experiences.", icon: "🎨" },
    { title: "Digital Marketing", description: "SEO, social media marketing, and branding.", icon: "📈" },
    { title: "Web Application Development", description: "Crafting scalable and secure web applications tailored to business needs.", icon: "💻" },
    { title: "Document Creation/Editing", description: "Professional document creation and editing for various needs.", icon: "📝" },
    { title: "Software Solutions", description: "Generating innovative software ideas and solving problems with technology.", icon: "🔧" },
    { title: "API Integration", description: "Connecting and integrating APIs seamlessly for enhanced functionality.", icon: "🔗" },
    { title: "Fullstack Development", description: "Delivering robust solutions with expertise in frontend and backend technologies.", icon: "🛠️" },
    { title: "Web Scraping/Automation", description: "Extracting valuable data from websites for analysis or automation.", icon: "🕸️" },
    { title: "Data Science/Analysis", description: "Leveraging data to uncover insights and drive informed decisions.", icon: "📊" },
    { title: "General Software Development", description: "Providing solutions for diverse software development needs.", icon: "🚀" },
  ];

  const certifications = [
    { name: "Gig-at-a-startup certificate", issuer: "ALX Ventures", date: "December, 2024", image: alxVentures },
    { name: "J.P. Morgan Software Engineering Virtual Experience on Forage", issuer: "JP Morgan", date: "June 2024", image: jP },
    { name: "Bincom Python Beginner and Intermediate Certificate", issuer: "Bincom Academy", date: "November, 2023", image: pythonCertificate },
    { name: "Business Development Module Certificate", issuer: "1% Club", date: "May, 2023", image: onePercent },
    { name: "National Service Certificate.", issuer: "NYSC", date: "November, 2022", image: nysc },
    { name: "B.ENG.", issuer: "Afe Babalola University", date: "November, 2022", image: beng },
  ];

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
      ➡
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      ⬅
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="services-certifications">
      {/* Header Section */}
      <section className="header-section">
        <h1>Services & Certifications</h1>
        <p>Discover the services I offer and the certifications that back them up.</p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Services I Offer</h2>
        <p className="services-intro">
          I offer general software solutions to any kind of software requirement or problem. 
          From designing and developing tailored software to solving unique challenges, 
          I bring expertise and creativity to deliver exceptional results.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <h2>Certifications</h2>
        <Slider {...sliderSettings}>
          {certifications.map((cert, index) => (
            <div key={index} className="certification-slide">
              <img src={cert.image} alt={cert.name} className="certification-image" />
              <div className="certification-info">
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
                <p>{cert.date}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <p>Interested in working together? Let’s create something amazing.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </section>
    </div>
  );
};

export default ServicesCertifications;
