import React from 'react';
import './homepage.styles.scss';
import About from '../About/about.component';
import Photos from '../Photos/photos.component';
import Contact from '../Contact/contact.component';

const Homepage = () => {
return(
    <div className = {'home-page'}>
        <About />
        <Photos />
        <Contact />
    </div>
    );
};
export default Homepage;