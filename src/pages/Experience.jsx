import React from "react";
import "./Experience.css"; // Your custom CSS file

// Individual Experience Component
const ExperienceCard = ({ title, company, date, tasks }) => {
  return (
    <div className="experience-details-container">
      <h2 className="experience-sub-title">{title}</h2>
      <div className="article-container">
        <h3>{company}</h3>
        <p>{date}</p>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Experience Page
const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Lead Web Media Praxis | Utako, Abuja, Nigeria",
      date: "August, 2024 -> Present",
      tasks: [
        "Develop and revamp websites for clients, build from scratch using wordpress, HTML, CSS, javascript and AI tools.",
        "Develop Software Applications for mobile, desktop or any platform using no-code, python, React, mysql and more depending on requirement",
        "Assist in resolving general tech and software issues.",
      ],
    },
    {
        title: "Python/Software Developer Intern",
        company: "Bincom Dev Center | Lagos, Nigeria(Remote)",
        date: "August, 2023 -> September, 2024",
        tasks: ["Joined the Python Data Science Team",
                "Worked on project that uses selenium and python to automate signing of documents remotely with Docu-esign",
                "Developed an application for eMigr8, fully functional using no-code tool, Flutterflow.",
                "Resolved and helped colleagues resolve coding problems."
        ],
      },
    {
      title: "AI community surfer(Seasonal)",
      company: "Telus International | Philippines(Remote)",
      date: "May, 2023 -> July, 2023",
      tasks: ["Assisted in training AI for specific needs by feeding data to the model with certain patterns",
      ],
    },
    {
        title: "Software Engineering Student",
        company: "ALX SE | Africa (Remote)",
        date: "February, 2023 -> Present",
        tasks: [
          "Gained access to the room fellowship platform and exposure to exclusive opportunities",
          "Acquired knowledge of various parts of software engineering such as; C programming, Shell navigation, python programming, system devOps and low level programming.",
          "Attempted multiple software projects using several technologies, in different teams and different strategies."
        ],
      },
    {
        title: "Software Intern/Teacher",
        company: "National Youth Service Corps(NYSC), Nigeria",
        date: "November, 2021 -> November, 2022",
        tasks: [
            "Software intern at Benue State University for six months - supported installation of computer systems in new ICT hall(National strike limited work)",
            "Physics and Basic Technology Teacher at mount zion secondary school, Makurdi for 3 months - taught and scored students",
            "Participated in Sustainable Development Goals functions as a contribution to Community Development Service.",
        ],
    },
    {
      title: "Software/Networking Intern",
      company: "HIIT Plc, Berger, Abuja",
      date: "January, 2020 -> June, 2020",
      tasks: [
        "Setup topology and operations for several network devices like switches and routers.",
        "Designed Data network for various kind of scenarios on packet tracer",
        "Coupled several hardware devices like monitors, cpu, laptops, e.t.c.",
        "Constructed RJ45 Cables"
      ],
    },
    {
      title: "Software Intern",
      company: "HIIT Plc, Garki, Abuja",
      date: "June, 2019 -> November, 2019",
      tasks: [
        "Researched and resolved basic programming errors and gained deeper insight to python programming",
        "Studied Python programming",
        "Studied Java programming",
        "Understood Web Development with HTML and CSS"
      ],
    },
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="experience-title">Experience</h1>
      <div className="outer-container">
        <div className="experience-details-container0"></div>
        <div className="experience-details-container middle">
            <div className="experience-about-containers">
            {experiences.map((exp, index) => (
                <ExperienceCard
                key={index}
                title={exp.title}
                company={exp.company}
                date={exp.date}
                tasks={exp.tasks}
                />
            ))}
            </div>
        </div>
        <div className="experience-details-container0"></div>
        </div>

    </section>
  );
};

export default Experience;
