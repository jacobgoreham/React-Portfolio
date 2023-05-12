import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
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
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#ff4060",
    marginBottom: theme.spacing(2),
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
    borderRadius: "50%",
    marginLeft: "auto",
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
        // Add any further actions after successful email sending
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Handle error cases if necessary
      });
    console.log("Email: ", email);
    console.log("Username: ", username);
    console.log("Message: ", message);
    // add code to send the email, username and message to your server
    // using an HTTP request or any other method that you prefer
    setEmail("");
    setUsername("");
    setMessage("");
  };

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <div className={classes.contactContainer}>
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
                color="primary"
                disableElevation
              >
                Send
              </Button>
            </form>
          </div>
          <img
            src="../images/selfie.png"
            alt="Profile"
            className={classes.image}
          />
        </CardContent>
      </Card>
    </div>
  );
}
