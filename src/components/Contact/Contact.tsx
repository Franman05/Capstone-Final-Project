import React from "react";
import { Navbar } from "../Navbar";
import image from '../../assets/images/sports-image.jpg';
import { makeStyles } from "@material-ui/core";
import me from '../../assets/images/gio.jpg';

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
      top: "20%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      flexDirection: "column",
    },
  });

export const Contact = () => {
    const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={`${classes.background}`}>
        <div className={classes.main_text}>
        <img src={ me } className="img-fluid" alt="..."></img>
      <h3>Contact Me directly</h3>
      <h3> <a href='https://github.com/franman05'>Git Hub</a> <br></br>
          <a href='https://www.linkedin.com/in/frances-kentris'>Linkedin </a> <br></br>
          <a href='mailto:kentrisfrancis@gmail.com'>Email </a> <br></br>
          </h3>          
      </div>
      </div>
    </div>
  );
};