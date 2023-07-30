import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// import clsx from "clsx"

import { AppBar, Toolbar, Typography, Drawer, IconButton, List, ListItem, ListItemText} from "@material-ui/core";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#222",
    height: "100%",
    fontFamily: "'Bruno Ace SC', cursive",

  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    background: "linear-gradient(to right, #ff4060, #3f51b5)",
    fontFamily: "'Press Start 2P', cursive",
  },
  footer: {
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginTop: theme.spacing(4),
  },
  icon: {
    width: '60px',
    height: '60px',
    color: '#fff',
    borderRadius: '50%',
    outline: '2px solid #fff',
    transitionProperty: 'outline-offset, outline-color, background-color',
    transitionDuration: '0.25s',
    '&:hover': {
      outlineOffset: '4px',
      animation: '$shake 0.25s',  // Added animation on hover
    },
  },
  github: {
    '&:hover': {
      backgroundColor: '#2ea44f',
      outlineColor: '#2ea44f',
    },
  },
  linkedIn: {
    '&:hover': {
      backgroundColor: '#0077b5',
      outlineColor: '#0077b5',
    },
  },
  '@keyframes shake': {
    '10%': {
      transform: 'rotate(15deg)',
    },
    '20%': {
      transform: 'rotate(-15deg)',
    },
    '30%': {
      transform: 'rotate(15deg)',
    },
    '40%': {
      transform: 'rotate(-15deg)',
    },
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
  drawerButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
    fontFamily: "'Press Start 2P', cursive",
    "& .MuiListItemText-primary": {
      transition: "0.3s",
      "&:hover": {
        textShadow: "3px 3px #05e6ff, 6px 6px #f7052d",
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
    height: "100%",
    boxSizing: "border-box",
    minHeight: "calc(100vh - 64px)",
  },
  title: {
    fontFamily: "'Press Start 2P', cursive",
    color: "#fff", 
    transition: "0.3s",
    "&:hover": {
      textShadow: "3px 3px #05e6ff, 6px 6px #3f51b5",
    },
  },
}));

export default function PortfolioContainer() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setDrawerOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Resume":
        return <About handlePageChange={handlePageChange} />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      // case "Shop":
      //   return <Shop />;
      default:
        return <Home />;
    }
  };

  const drawer = (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        {['Home', 'Resume', 'Projects', 'Contact'].map((text) => (
          <ListItem button key={text} onClick={(event) => handlePageChange(text)}>
            <ListItemText primary={text} classes={{ primary: classes.list }} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Press+Start+2P&display=swap');
      </style>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.header}>
          <Button onClick={() => handlePageChange("Home")}>
            
            <Typography variant="h6" className={classes.title}>
              Jacob
            </Typography>
          </Button>
          <IconButton edge="end" className={classes.drawerButton} color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor={'right'} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {drawer}
      </Drawer>

      <div className={classes.page}>{renderPage()}</div>
      
      <div
        className={classes.footer}
        style={{ position: "fixed", bottom: "0", width: "100%" }}
      >
        <div className={classes.buttonContainer}>
          <IconButton 
            className={`${classes.icon} ${classes.github}`} 
            onClick={() => window.location.href="https://github.com/jacobgoreham"}>
            <GitHubIcon fontSize="large" />  {/* Adjusted size */}
          </IconButton>
          <IconButton 
            className={`${classes.icon} ${classes.linkedIn}`} 
            onClick={() => window.location.href="https://www.linkedin.com/in/jacob-goreham-52a013179/"}>
            <LinkedInIcon fontSize="large" />  {/* Adjusted size */}
          </IconButton>
        </div>
      </div>

    </div>
  );
}

