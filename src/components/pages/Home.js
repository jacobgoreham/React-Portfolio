import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
    color: "#ff4060",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Bruno Ace SC",
    listStyle: "none",
    margin: theme.spacing(3),
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  image: {
    width: "50%",
    height: "50%",
    borderRadius: "50%",
    // marginRight: "10%",
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <Typography variant="h1" className={classes.title}>
          About Me
        </Typography>
      </div>
      <div>
        <Typography variant="body1" className={classes.description}>
          My name is Jacob Goreham. I am a FullStack Developer with 1 year of
          experience. I've been coding for a year, and I've had expertise in
          computers all my life. After 4 years of working in my current role at
          the SDBB, I'm ready to pursue my talents.
        </Typography>
        <Typography variant="body1" className={classes.description}>
          I'd like to thank you for taking the time for checking out my page! I
          hope I can be of some assistance to you in some way!
        </Typography>
        <div className={classes.imageContainer}>
          <img
            src="../images/screenshot7.png"
            alt="me7"
            className={classes.image}
          />
        </div>
      </div>
    </div>
  );
}
