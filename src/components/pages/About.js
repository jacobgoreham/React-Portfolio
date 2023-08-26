import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import resumePdf from "../images/Resume.pdf";  // Import the resume PDF

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#222222",
    padding: theme.spacing(3),
  },
  title: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "36px",
    fontFamily: "Bruno Ace SC",
    width: "fit-content",
    margin: "0 auto",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: "5px",
    background: "linear-gradient(-45deg, #ff4060, #3f51b5, #ff4060, #3f51b5)",
    backgroundSize: "400% 400%",
    animation: "$gradient 5s ease infinite",
  },
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0 50%",
    },
  },
  description: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Bruno Ace SC",
    listStyle: "none",
    margin: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  listContainer: {
    height: '200px', 
    overflow: 'hidden',
    position: 'relative',
  },
  list: {
    position: 'absolute',
    width: '100%',
    height: '300%', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    animation: '$scroll 12s linear infinite',
    "& li": {
      fontSize: "20px",
      fontFamily: "Bruno Ace SC",
      fontWeight: "700",
      textAlign: "center",
      lineHeight: "1",
      letterSpacing: "0",
      padding: ".25em 0 .325em",
      margin: theme.spacing(3),
      background: "linear-gradient(45deg, #ff4060 45%, white 45%, white 55%, #ff4060 55%)",
      backgroundSize: "200% 200%",
      color: "transparent",
      animation: "$aitf 5s linear infinite",
      transform: "translate3d(0,0,0)",
      backfaceVisibility: "hidden",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      WebkitAnimation: "$aitf 5s linear infinite",
      WebkitTransform: "translate3d(0,0,0)",
      WebkitBackfaceVisibility: "hidden",
    }
  },
  "@keyframes scroll": {
    "0%": {
      transform: 'translateY(0)',
    },
    "50%": {
      transform: 'translateY(-100%)', 
    },
    "100%": {
      transform: 'translateY(0)',
    },
  },
  "@keyframes aitf": {
    "0%": {
      backgroundPosition: "200% 200%",
    },
    "100%": {
      backgroundPosition: "0 0",
    },
  },
  proficiencyTitle: {
    color: "#ff4060",
    textAlign: "center",
    fontSize: "24px",
    marginBottom: theme.spacing(3),
    fontFamily: "Bruno Ace SC",
  },
  proficiencyList: {
    display: "column",
    justifyContent: "center",
  },
}));

export default function Home() {
  const classes = useStyles();
  const skillsFrontEnd = ["HTML", "CSS", "JavaScript", "JQuery", "Responsive Design", "React", "BootStrap"];
  const skillsBackEnd = ["APIs", "Node", "Express", "MySQL", "Sequelize", "MongoDB", "Mongoose", "REST", "GraphQL", "MERN Stack"];

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <Typography variant="h1" className={classes.title}>
          Resume
        </Typography>
      </div>
      <div>
        <Typography variant="body1" className={classes.description}>
          My name is Jacob Goreham. I am a FullStack Developer with 2 years of
          experience in the following:
        </Typography>
        <div className={classes.proficiencyList}>
          <div>
            <Typography variant="h2" className={classes.proficiencyTitle}>
              Front End Technologies
            </Typography>
            <div className={classes.listContainer}>
              <ul className={classes.list}>
                {skillsFrontEnd.map((skill, i) => (
                  <li key={`fe-${i}`}>{skill}</li>
                ))}
                {skillsFrontEnd.slice().reverse().map((skill, i) => (
                  <li key={`fe-rev-${i}`}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <Typography variant="h2" className={classes.proficiencyTitle}>
              Back End Technologies
            </Typography>
            <div className={classes.listContainer}>
              <ul className={classes.list}>
                {skillsBackEnd.map((skill, i) => (
                  <li key={`be-${i}`}>{skill}</li>
                ))}
                {skillsBackEnd.slice().reverse().map((skill, i) => (
                  <li key={`be-rev-${i}`}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Typography variant="body1" className={classes.description}>
          Jacob Goreham's the name and Codings my Game.
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Download my resume:{" "}
          <Link href={resumePdf} color="primary" underline="none" target="_blank" rel="noopener noreferrer">
            Resume.pdf
          </Link>
        </Typography>
      </div>
    </div>
  );
}
