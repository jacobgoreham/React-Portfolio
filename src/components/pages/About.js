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
      backgroundColor: "#3f51b5",
    },
  },
  title: {
    color: "#ff4060",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "36px",
    fontFamily: "Bruno Ace SC",
  },
  description: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Bruno Ace SC",
    listStyle: "none",
    margin: theme.spacing(3),
  },
  list: {
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "#3f51b5",
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
          experience in the following:
        </Typography>
        <div className={classes.proficiencyList}>
          <div>
            <Typography variant="h2" className={classes.proficiencyTitle}>
              Front End Technologies
            </Typography>

            <ul className={classes.description}>
              <li className={classes.list}>HTML</li>
              <li className={classes.list}>CSS</li>
              <li className={classes.list}>JavaScript</li>
              <li className={classes.list}>JQuery</li>
              <li className={classes.list}>Responsive Design</li>
              <li className={classes.list}>React</li>
              <li className={classes.list}>BootStrap</li>
            </ul>
          </div>
          <div>
            <Typography variant="h2" className={classes.proficiencyTitle}>
              Back End Technologies
            </Typography>
            <ul className={classes.description}>
              <li className={classes.list}>APIs</li>
              <li className={classes.list}>Node</li>
              <li className={classes.list}>Express</li>
              <li className={classes.list}>MySQL</li>
              <li className={classes.list}>Sequelize</li>
              <li className={classes.list}>MongoDB</li>
              <li className={classes.list}>Mongoose</li>
              <li className={classes.list}>REST</li>
              <li className={classes.list}>GraphQL</li>
              <li className={classes.list}>MERN Stack</li>
            </ul>
          </div>
        </div>

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
