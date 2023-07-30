import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import selfie from "../images/selfie.png";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column",
    },
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  },
  contactTitle: {
    color: "#ff4060",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "36px",
    fontFamily: "Bruno Ace SC",
  },
  submitButton: {
    position: "relative",
    overflow: "hidden",
    height: "3rem",
    padding: "0 2rem",
    borderRadius: "1.5rem",
    background: "#3d3a4e",
    backgroundSize: "400%",
    color: "#fff",
    border: "none",
    '&:hover::before': {
      transform: "scaleX(1)",
    },
  },
  submitButtonInnerCircle: {
    content: '',
    position: "absolute",
    top: "0",
    left: "0",
    transform: "scaleX(0)",
    transformOrigin: "0 50%",
    width: "100%",
    height: "inherit",
    borderRadius: "inherit",
    background: "linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%)",
    transition: "all 0.475s",
  },
  root: {
    backgroundColor: '#222222',
    padding: theme.spacing(2),
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    width: "100%",
    "& .MuiInputBase-input": {
      color: "#ff4060",
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
      order: 2,
    },
  },
  image: {
    width: '100%',
    border: "4px solid",
    borderImage: "linear-gradient(90deg, #f18137, #af24dd) 1",
    animation: "$anim-border 2.5s ease-in infinite",
    transition: "transform 0.3s ease-in-out",
  },
  "@keyframes anim-border": {
    "50%": {
      borderImage: "linear-gradient(360deg, #f18137, #af24dd) 1",
    },
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3f51b5",
      },
      "&:hover fieldset": {
        borderColor: "#3f51b5",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3f51b5",
      },
      "& .MuiInputBase-input": {
        color: "#ff4060",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#3f51b5",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#3f51b5",
    },
    "& .MuiInputBase-input": {
      color: "#3f51b5",
    },
    "& .MuiFormLabel-root.Mui-error": {
      color: "#ff4060",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_snv9lo5",
        "template_rac7pwa",
        {
          from_email: email,
          from_name: username,
          message: message,
        },
        "0BrcVc9w_QWNgRp0N" // EmailJS user ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    setEmail("");
    setUsername("");
    setMessage("");
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.contactContainer}>
          <Typography className={classes.contactTitle}>Contact Me</Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              type="email"
              value={email}
              onChange={handleEmailChange}
              label="Email*"
              variant="outlined"
              required
              className={classes.textField}
              fullWidth
            />
            <TextField
              type="text"
              value={username}
              onChange={handleUsernameChange}
              label="Username*"
              variant="outlined"
              required
              className={classes.textField}
              fullWidth
            />
            <TextField
              value={message}
              onChange={handleMessageChange}
              label="Message*"
              variant="outlined"
              multiline
              rows={5}
              required
              className={classes.textField}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.submitButton}
              fullWidth
            >
              <div className={classes.submitButtonInnerCircle} />
              Send
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.imageContainer}>
          <img
            src={selfie}
            alt="Profile"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
}
