import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Typography, Tabs, Tab } from "@material-ui/core";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#333",
    height: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    color: "#fff",
  },
  tabs: {
    "& .MuiTab-root": {
      textTransform: "none",
      fontSize: "1.1rem",
      minWidth: 0,
      marginRight: theme.spacing(3),
      "&:last-child": {
        marginRight: 0,
      },
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: "10px",
      },
      "&.Mui-selected": {
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: "10px",
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
      backgroundColor: "rgba(0,0,0,0.1)",
      borderRadius: "10px",
    },
    "&.Mui-selected": {
      backgroundColor: "rgba(0,0,0,0.2)",
      borderRadius: "10px",
    },
  },
  page: {
    backgroundColor: "#333",
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
      <AppBar position="static">
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
    </div>
  );
}
