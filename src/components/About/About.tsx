import React from 'react';
import { Navbar } from '../../components/Navbar'
import pic from '../../assets/images/picture-in-florida.jpg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    background: {
      backgroundImage: `url(${pic})`,
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
      top: "10%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      flexDirection: "column",
    },
  });

export const About = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div className={`${classes.background}`}>
              <div className={classes.main_text}>
                <h3>About Me</h3>
                <h3>Hello! My name is Frances Kentris, I am currently a Truck driver in Denver Colorado <br></br>
                and I have been for the past eight years. For the past six months I have been <br></br>
                studying to become a software engineer. Even though it has be challenging I love every bit about being websites.<br></br></h3>

                <h3> I love to spend most my freetime playing football, <br></br> going to the gym and hanging out with my family.
                    <br></br> I play semi pro football currently <br></br> and also do flag football and other events that 
                    are exciting for my family and I <br></br> (mud runs, marathons, Obstacle Course, ETC).<br></br>Any thing I can do
                    to get outside I will do!!. Love the outdoors and staying in shape. Love video games and watching movies(action,adventure,horror,comedy).
                </h3>

                <h3>
                    I made this site to show the different kinds of Intramual Sports that are out there<br></br>
                    Also how any gender and age can play if you ever find yourself wanting something active to do..<br></br>
                    It also gives the opporunity to add sports that people might not know exist. Things like racquet ball, bowling tournments,
                    <br></br> laser tag competitions, swimming meets, and etc. Options are limitless!!!
                </h3>
        </div>
       </div>
    </div>
    );
};