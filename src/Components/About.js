import React from "react";
import aboutimage from './img/kungfu2.jpg';

const About = () => {
    return <div>


        <h1>REACT  ASSIGNMENT : 1</h1>
        <center><h2>ABOUT US</h2></center>
        <br></br>
        <center><img src={aboutimage} width="350" height="250"></img></center>
        <br></br>
        <center><p> Kung Fu Panda is a 2008 American computer-animated action comedy film produced by DreamWorks Animation and distributed by Paramount Pictures. ... 
            The film is set in a version of ancient China populated by anthropomorphic animals and revolves around a bumbling panda named Po, a kung fu enthusiast. </p></center>



    </div>;
};

export default About;