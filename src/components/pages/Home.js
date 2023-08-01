import React from "react";
import confetti from "canvas-confetti";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import screenshot7 from "../images/screenshot7.png"

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
    padding: theme.spacing(2), // Increase the padding
    borderRadius: "5px", // Add border radius
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
    border: "4px solid",
    borderImage: "linear-gradient(90deg, #f18137, #af24dd) 1",
    animation: "$anim-border 2.5s ease-in infinite",
    transition: "transform 0.3s ease-in-out", // Add transition for smooth hover effect
    "&:hover": {
      transform: "translateY(-10px)", // Move image slightly up on hover
    },
  },
  "@keyframes anim-border": {
    "50%": {
      borderImage: "linear-gradient(360deg, #f18137, #af24dd) 1",
    },
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  buttonStyle: {
    backgroundColor: '#222222',
    color: '#ff4060',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Bruno Ace SC',
    fontSize: '20px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#3f51b5',
    },
  },
  animatedText: {
    fontSize: "20px",
    fontFamily: "Bruno Ace SC",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: "1",
    letterSpacing: "0",
    padding: ".25em 0 .325em",
    margin: theme.spacing(3),
    // textShadow: "0 0 80px rgba(255, 255, 255, 0.5)",
    background: "linear-gradient(45deg, #ff4060 45%, white 45%, white 55%, #ff4060 55%)",
    backgroundSize: "200% 200%",
    color: "transparent",
    animation: "$aitf 3s linear infinite",
    transform: "translate3d(0,0,0)",
    backfaceVisibility: "hidden",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    WebkitAnimation: "$aitf 5s linear infinite",
    WebkitTransform: "translate3d(0,0,0)",
    WebkitBackfaceVisibility: "hidden",
  },
  "@keyframes aitf": {
    "0%": {
      backgroundPosition: "200% 200%",
    },
    "100%": {
      backgroundPosition: "0 0",
    },
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  const onClick = () => {
    confetti({
      particleCount: 150, spread: 60
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.section}>
      <Typography variant="h1" className={classes.title}>
        About Me
      </Typography>
      </div>
      <div className={classes.button}>
        <button     className={classes.buttonStyle} 
 style={{ margin: "0 auto", display: "block" }} onClick={onClick}>
          <span> 🎉 </span> <span>Cannon</span>
        </button>
      </div>
      <div>
      <Typography variant="body1" className={classes.animatedText}>
          I'd like to thank you for taking the time for checking out my page! I
          hope I can assist you!
        </Typography>
      <div className={classes.imageContainer}>
          <img
            src={screenshot7}
            alt="Selfie"
            className={classes.image}
          />
        </div>
        <Typography variant="body1" className={classes.animatedText}>
          My name is Jacob Goreham. I've been coding for a full year, and I've had expertise in
          computers all my life. I'm ready to make a difference with code!
        </Typography>
      </div>
    </div>
  );
}
