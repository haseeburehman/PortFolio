import React from "react";
import { MdOutlinePreview } from "react-icons/md";
import project1 from "../images/project1.jpg";
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.jpg';
import project7 from '../images/project7.jpg';
import project8 from '../images/project8.jpg';
import project9 from '../images/project9.jpg';
import "./ProjectCard.css";

const ProjectCards = () => {
  const projects = [
    {
      imageSrc: project1,
      title: "E_Commerce Website",
      description:
        "I can make the e-commerce website during my internship in Internncarft. It is really awesome, made on React.",
      link: "https://github.com/haseeburehman/PrinterVerse",
      liveLink: "",
      showTooltip: false,
    },
    {
      imageSrc: project2,
      title: "Chalo-Parho-Pakistan",
      description: "An educational platform designed to improve access to learning resources in Pakistan during my intenship in 128Technologies. Built using HTML, CSS, and JavaScript.",
      link: "https://github.com/haseeburehman/chalo-parho-pakistan",
      liveLink: "https://haseeburehman.github.io/chalo-parho-pakistan/",
      showTooltip: true,
    },
    {
      imageSrc: project3,
      title: "Nexelance Software Company Website",
      description: "A professional website for Nexelance, a software company, showcasing services and projects made during internship in interncraft.Developed with HTML, CSS,JS, and BootStrap.",
      link: "https://github.com/haseeburehman/Nexelance",
      liveLink: "https://haseeburehman.github.io/Nexelance/",
      showTooltip: true,
    },
    {
      imageSrc: project4,
      title: "Tic Tac Toe",
      description: "A classic Tic Tac Toe game with a modern twist. Created using JavaScript, HTML, and CSS with a focus on clean design and interactive gameplay.",
      link: "https://github.com/haseeburehman/tic-tac-toe",
      liveLink: "https://haseeburehman.github.io/tic-tac-toe/",
      showTooltip: true,
    },
    {
      imageSrc: project5,
      title: "Weather App",
      description: "A weather application that provides real-time weather updates using the OpenWeatherMap API. Built with HTML, js and styled with CSS.",
      link: "https://github.com/haseeburehman/weather-app",
      liveLink: "https://haseeburehman.github.io/weather-app/",
      showTooltip: true,
    },
    {
      imageSrc: project6,
      title: "Pet Store",
      description: "An e-commerce site for pet products, featuring product listings and a shopping cart. Developed using HTML ,JS ,CSS for state management.",
      link: "https://github.com/haseeburehman/pet-store",
      liveLink: "https://haseeburehman.github.io/pet-store/",
      showTooltip: true,
    },
    {
      imageSrc: project7,
      title: "Clone Of Litmos",
      description: "A clone of the Litmos learning management system, featuring course management and user authentication. Built with HTML, JS, BootStrap and CSS.",
      link: "https://github.com/haseeburehman/newlitmos",
      liveLink: "https://haseeburehman.github.io/newlitmos/#",
      showTooltip: true,
    },
    {
      imageSrc: project8,
      title: "Clone of Foodpanda",
      description: "An imitation of the Foodpanda food delivery service, including restaurant listings and order management. Created with Html ,Js, Bootstrap and styled using CSS.",
      link: "https://github.com/haseeburehman/foodpanda",
      liveLink: "https://haseeburehman.github.io/foodpanda/",
      showTooltip: true,
    },
    {
      imageSrc: project9,
      title: "Github Bio-Api",
      description: "A simple application that fetches and displays GitHub user bios using the GitHub API. Built with JavaScript and styled with basic CSS.",
      link: "https://github.com/haseeburehman/Github_bio_api",
      liveLink: "https://haseeburehman.github.io/Github_bio_api/",
      showTooltip: true,
    },
  ];

  return (
    <div className="cards-wrapper">
      {projects.map((project, index) => (
        <div key={index} className="card-wrapper">
          <div className="card">
            <div className="card__image">
              <img
                className="image1"
                src={project.imageSrc}
                alt={project.title}
              />
            </div>
            <div className="card__content">
              <p className="card__title">{project.title}</p>
              <p className="card__description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="card__button">GitHub</button>
              </a>
              {project.showTooltip && project.liveLink && (
                <div className="card__tooltip">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card__tooltip"
                  >
                    Go Live
                    <MdOutlinePreview className="card__icon" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
