import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

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
          <h3>Project Videos</h3>
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
        {project.liveLink && (
          <a
            href={project.liveLink}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Project
          </a>
        )}
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
