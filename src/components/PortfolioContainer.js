import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Typography, Tabs, Tab } from "@material-ui/core";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#222",
    height: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    background: "linear-gradient(to right, #ff4060, #3f51b5)",
  },
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: theme.spacing(2),
  },
  icon: {
    color: "#fff",
  },
  tabs: {
    "& .MuiTab-root": {
      textTransform: "none",
      fontSize: "1.1rem",
      color: "#ff4060",
      minWidth: 0,
      marginRight: theme.spacing(3),
      "&:last-child": {
        marginRight: 0,
      },
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
      },
      "&.Mui-selected": {
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: "10px",
        color: "#3f51b5",
        fontFamily: "Bruno Ace SC",
      },
    },
  },
  tabsFlexContainer: {
    justifyContent: "center",
  },
  tabsScroller: {
    flexGrow: 0,
  },
  tabRoot: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "10px",
    },
    "&.Mui-selected": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "10px",
    },
  },
  page: {
    backgroundColor: "#222",
    padding: "20px",
    height: "calc(100% - 64px)",
    boxSizing: "border-box",
  },
  title: {
    fontFamily: "Bruno Ace SC",
  },
}));

export default function PortfolioContainer() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About handlePageChange={handlePageChange} />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={classes.root}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');
      </style>

      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.header}>
          <Typography variant="h6" className={classes.title}>
            Jacob
          </Typography>
          <div className={classes.icon}>{/* Insert Icon here */}</div>

          <a
            href="https://github.com/jacobgoreham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className={classes.icon} />
          </a>
        </Toolbar>
      </AppBar>
      <Tabs
        value={currentPage}
        onChange={handlePageChange}
        indicatorColor="primary"
        textColor="primary"
        classes={{
          root: classes.tabs,
          flexContainer: classes.tabsFlexContainer,
          scroller: classes.tabsScroller,
        }}
      >
        <Tab
          label="About Me"
          value="Home"
          classes={{ root: classes.tabRoot }}
        />
        <Tab label="Resume" value="About" classes={{ root: classes.tabRoot }} />
        <Tab
          label="Portfolio"
          value="Projects"
          classes={{ root: classes.tabRoot }}
        />
        <Tab
          label="Contact"
          value="Contact"
          classes={{ root: classes.tabRoot }}
        />
      </Tabs>

      <div className={classes.page}>{renderPage()}</div>
      <div className={classes.footer}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://www.linkedin.com/in/jacob-goreham-52a013179/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#3f51b5",
              color: "#FFFFFF",
              borderRadius: "5px",
              padding: "10px 20px",
              margin: "10px",
              textDecoration: "none",
              fontFamily: "Space Mono",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LinkedInIcon style={{ marginRight: "10px" }} />
            LinkedIn
          </a>

          <a
            href="https://github.com/jacobgoreham"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#3f51b5",
              color: "#FFFFFF",
              borderRadius: "5px",
              padding: "10px 20px",
              margin: "10px",
              textDecoration: "none",
              fontFamily: "Space Mono",
              fontSize: "16px",
            }}
          >
            <GitHubIcon style={{ marginRight: "5px" }} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
