import React, { useState, useEffect } from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    netflixIntro: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      color: 'linear-gradient(to right, #ff4060, #3f51b5)',
      fontSize: '5em',
      animation: `$fadeOut 3s ${theme.transitions.easing.easeIn} forwards`,
      zIndex: 100,
      fontFamily: "'Press Start 2P'",
    },
    "@keyframes fadeOut": {
      "0%": {
        backgroundColor: 'black',
        fontSize: '5em',
      },
      "100%": {
        backgroundColor: '#222222',
        fontSize: '20em',
      },
    },
  }));
  
  

const App = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        </style>
        <div className={classes.netflixIntro}>
          J
        </div>
      </>
    );
  }

  return <PortfolioContainer />;
};

export default App;
