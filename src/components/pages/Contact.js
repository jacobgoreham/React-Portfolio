import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import selfie from "../images/selfie.png"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "100vh",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(2),

    borderRadius: theme.spacing(1),
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222222",
    padding: theme.spacing(2),
    width: "80%",
  },
  content: {
    display: "flex",
    alignItems: "center",
    width: "100%",
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
    padding: theme.spacing(1), // Increase the padding
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    width: "70%",
    "& .MuiInputBase-input": {
      color: "#ff4060",
    },
  },
  image: {
    width: "50%",
    height: "50%",
    border: "4px solid",
    borderImage: "linear-gradient(90deg, #f18137, #af24dd) 1",
    animation: "$anim-border 2.5s ease-in infinite",
    transition: "transform 0.3s ease-in-out", // Add transition for smooth hover effect
  
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
        // Handle error cases if necessary
      });
    console.log("Email: ", email);
    console.log("Username: ", username);
    console.log("Message: ", message);
    setEmail("");
    setUsername("");
    setMessage("");
  };

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <div className={classes.contactContainer}>
            <Typography className={classes.title}>Contact Me</Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                type="email"
                value={email}
                onChange={handleEmailChange}
                label="Email*"
                variant="outlined"
                required
                className={classes.textField}
              />
              <TextField
                type="text"
                value={username}
                onChange={handleUsernameChange}
                label="Username*"
                variant="outlined"
                required
                className={classes.textField}
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
              />
             <Button
                type="submit"
                variant="contained"
                className={classes.submitButton}
              >
                <div className={classes.submitButtonInnerCircle} />
                Send
              </Button>
            </form>
          </div>
          <img
            src={selfie}
            alt="Profile"
            className={classes.image}
          />
        </CardContent>
      </Card>
    </div>
  );
}