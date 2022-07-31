import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar';
import image from '../../assets/images/sports-image.jpg';
import { Link } from 'react-router-dom';
// import { AuthCheck } from 'reactfire';

interface Sports{
    title: string;
}

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
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
      },
      button_text: {
        color: "white",
        textDecoration: "none",
      },
    });

export const Home = ( props: Sports) => {
    const classes = useStyles();

    return (
        <>
        <Navbar />
        <div className={`${classes.background}`}>
          <div className={classes.main_text}>
            <h1>{props.title}</h1>
            <Button>
              <Link to="/Sportspage" className={classes.button_text}>
                Sports List
              </Link>
            </Button>
          </div>
        </div>
      </>
    );
  };