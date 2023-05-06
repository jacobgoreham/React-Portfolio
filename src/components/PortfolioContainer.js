import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

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
    "& .MuiTabs-root": {
      display: "flex",
      justifyContent: "center",
    },
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
  page: {
    backgroundColor: "#333",
    padding: "20px",
    height: "calc(100% - 64px)",
    boxSizing: "border-box",
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
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Typography variant="h6">My App</Typography>
          <div className={classes.icon}>{/* Insert Icon here */}</div>
        </Toolbar>
      </AppBar>
      <Tabs
        value={currentPage}
        onChange={handlePageChange}
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabs}
      >
        <Tab label="Home" value="Home" />
        <Tab label="About" value="About" />
        <Tab label="Projects" value="Projects" />
        <Tab label="Contact" value="Contact" />
      </Tabs>
      <div className={classes.page}>{renderPage()}</div>
    </div>
  );
}
