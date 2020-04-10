import React, {useState, useEffect} from 'react';
import './image.styles.scss';

const Image = (props) => {
   return (
    <div className = {'image-box'}>
        <img src={props.links} alt= 'txt' className={'image'}/>
    </div>
   );
}
export default Image;