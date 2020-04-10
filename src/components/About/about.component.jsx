import React from 'react';
import './about.styles.scss';
import bgImg from '../../images/bgImage.jpg'; 

const About = () => {
return(
    <div className = {'about-page'}>
        <p>Front End Developer.<br/>Currently working for Intercontinental Exchange.</p>
        <img src={bgImg} className= {'about-me-img'} alt='about me'></img>
    </div>
    );
};
export default About;