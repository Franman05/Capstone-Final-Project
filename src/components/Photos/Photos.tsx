import React from 'react';
import { Navbar } from '../../components/Navbar'
import image from '../../assets/images/sports-image.jpg';
import flag from '../../assets/images/flag-football.jpg';
import soccer from '../../assets/images/soccer-play.jpg';
import ball from '../../assets/images/kickball-play.jpg';
import tennis from '../../assets/images/tennis-pros.jpg';
import volley from '../../assets/images/volleyball_Coed.jpg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    background: {
      backgroundImage: `url(${image})`,
      width: "100%",
      height: "200%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "absolute",
      zIndex: -1,
    },
    main_text: {
      textAlign: "center",
      position: "relative",
      top: "60%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      flexDirection: "column",
    },
  });

export const Photos = () => {
    const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={`${classes.background}`}>
        <div className={classes.main_text}>
            <h3>Sports Images</h3>
      <img src={ tennis } className="img-thumbnail" alt="Tennis"></img>
      <h3> Tennis Games</h3>
      <img src={ flag } className="img-thumbnail" alt="Football"></img>
      <h3>Flag Football Games</h3>
      <img src={ soccer } className="img-thumbnail" alt="Soccer"></img>
      <h3>Soccer Games</h3>
      <img src={ ball } className="img-thumbnail" alt="Kickball"></img>
      <h3>KickBall Games</h3>
      <img src={ volley } className="img-thumbnail" alt="Volleyball"></img>
      <h3>Volleyball Games</h3>
        </div>
    </div>
    </>
  );
};