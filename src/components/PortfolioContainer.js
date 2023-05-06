import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
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
      case "Blog":
        return <Blog />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
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
        <Tab label="Blog" value="Blog" />
        <Tab label="Contact" value="Contact" />
      </Tabs>
      {renderPage()}
    </div>
  );
}
