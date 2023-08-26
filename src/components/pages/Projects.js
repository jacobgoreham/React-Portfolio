import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import screenshot1 from "../images/screenshot1.png"
import screenshot2 from "../images/screenshot2.png"
import screenshot3 from "../images/screenshot3.png"
import screenshot4 from "../images/screenshot4.png"
import screenshot5 from "../images/screenshot5.png"
import screenshot6 from "../images/screenshot6.png"
import screenshot7 from "../images/screenshot7.png"
import screenshot8 from "../images/screenshot8.png"



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#222222",
    "& > *": {
      margin: 0, // removes margin from child elements
    },
  },
  title: {
    color: "#ff4060",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "36px",
    fontFamily: "Bruno Ace SC",
  },
  projectContainer: {
    backgroundColor: "#222222",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "20px",
  },
  project: {
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
    transform: "translateY(0)",
    backgroundColor: "#222222",
    margin: "10px",
    border: "4px solid",
    borderImage: "linear-gradient(#f18137, #af24dd) 1",
    animation: "$anim-border 2.5s ease-in infinite",
    "&:hover": {
      backgroundColor: "#3f51b5",
    },
  },
  projectImageContainer: {
    height: "200px",
    marginBottom: "10px",
  },
  projectImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    border: "5px solid #3f51b5",
  },
  projectName: {
    color: "#ff4060",
    marginTop: "10px",
    fontFamily: "Bruno Ace SC",
  },
  projectDescription: {
    color: "#ff4060",
    marginTop: "10px",
    fontFamily: "Space Mono",
  },
  "@keyframes anim-border": {
    "50%": {
      borderImage: "linear-gradient(360deg, #f18137, #af24dd) 1",
    },
  },
}));

const projects = [
  {
    name: "Note Pad",
    description:
      "Note Pad is simply a place to keep all the notes you've taken!",
    imageSrc: screenshot4,
    githubLink: "https://jacobs-note-taker.herokuapp.com/",
  },
  {
    name: "GitMovie",
    description:
      "GitMovie was another group project that turned out extremeley well!",
    imageSrc: screenshot3,
    githubLink: "https://cmadrid48.github.io/gitMovie/",
  },
  {
    name: "WaterWise",
    description: "Highlights: CSS, Session, Authentification, HandleBars",
    //The Repo for 'the Goat Packs' water discussion board.
    imageSrc: screenshot2,
    githubLink: "https://github.com/sullivann7789/waterwise",
  },

  {
    name: "Jacobs' JATE",
    description:
      "Highlights: Javascript, Webpack, Express.js, Concurrently, Nodemon",
    imageSrc: screenshot1,
    githubLink: "https://jacobs-jate.herokuapp.com/",
  },
  {
    name: "AutoInsta",
    description: "Automate your Instagram Profile!",
    imageSrc: screenshot8,
    githubLink: "https://limitless-taiga-26718.herokuapp.com/",
  },
  {
    name: "Logo Generator",
    description: "Stuck on a logo? Create a quick and easy logo here!",
    imageSrc: screenshot5,
    githubLink: "https://github.com/jacobgoreham/jacobs-logo-generator",
  },
  {
    name: "Employee Tracker",
    description:
      "Manage your employees, departments, roles, and much much more!",
    imageSrc: screenshot6,
    githubLink: "https://github.com/jacobgoreham/jacobs-employee-tracker",
  },
  {
    name: "Relentless Sportfishing",
    description:
      "Book a Trip today!",
    imageSrc: screenshot3,
    githubLink: "https://github.com/jacobgoreham/jacobs-employee-tracker",
  },{
    name: "Mustang Sportfishing",
    description:
      "Book a Trip today!",
    imageSrc: screenshot3,
    githubLink: "https://github.com/jacobgoreham/jacobs-employee-tracker",
  },

];
//https://jacobs-note-taker.herokuapp.com/

export default function Blog() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>Projects</div>

      <div className={classes.projectContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={classes.project}
            onClick={(e) => {
              const element = e.currentTarget;
              if (element) {
                element.style.backgroundColor = "#34D399";
                setTimeout(() => {
                  element.style.backgroundColor = "#222222";
                }, 300);
              }
            }}
          >
            <div className={classes.projectImageContainer}>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={classes.projectImage}
                  src={project.imageSrc}
                  alt="Project Screenshot"
                />
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 className={classes.projectName}>{project.name}</h3>
              <p className={classes.projectDescription}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
