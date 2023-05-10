import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#222222",
    padding: theme.spacing(3),
  },
  section: {
    backgroundColor: "#333333",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1),
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#2C3E90",
    },
  },
  title: {
    color: "#ff4060",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "36px",
    fontFamily: "Bruno Ace SC",
    marginBottom: theme.spacing(3),
  },
  description: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Space Mono",
    margin: theme.spacing(3),
  },
  proficiencyTitle: {
    color: "#ff4060",
    textAlign: "center",
    fontSize: "24px",
    marginBottom: theme.spacing(3),
    fontFamily: "Bruno Ace SC",
  },
  proficiencyList: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },
  proficiencyItem: {
    margin: `0 ${theme.spacing(2)}px`,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <Typography variant="h1" className={classes.title}>
          Resume
        </Typography>
      </div>
      <div>
        <Typography variant="body1" className={classes.description}>
          My name is Jacob Goreham. I am a FullStack Developer with 1 year of
          experience.
        </Typography>
        <div className={classes.proficiencyList}>
          <div>
            <Typography variant="h2" className={classes.proficiencyTitle}>
              Front End Technologies
            </Typography>
            <Typography variant="body1" className={classes.description}>
              HTML, CSS, JavaScript, JQuery, Responsive Design, React, BootStrap
            </Typography>
          </div>
          <div>
            <Typography variant="h2" className={classes.proficiencyTitle}>
              Back End Technologies
            </Typography>
            <Typography variant="body1" className={classes.description}>
              APIs, Node, Express, MySQL, Sequelize, MongoDB, Mongoose, REST,
              GraphQL, MERN Stack
            </Typography>
          </div>
        </div>
        <Typography variant="body1" className={classes.description}>
          I have worked on various projects including GitMovie, WaterWise, and
          Note Pad.
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Jacob Goreham's the name and Codings my Game.
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Download my resume:{" "}
          <Link href="/images" color="primary" underline="none">
            Resume.pdf
          </Link>
        </Typography>
      </div>
    </div>
  );
}
