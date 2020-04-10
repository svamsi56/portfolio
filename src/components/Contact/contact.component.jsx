import React from 'react';
import './contact.styles.scss';

const Contact = () => {
return(
    <div className={'contact-page'}>
        <h1>Let's chat!</h1>
        <h2>
            <span>Reach out for a project or just to say hello!</span>
        </h2>
        <form className = {'contact-form'}>
            <fieldset className = {'field-set'}>
                <label for='full-name' className = {'field-set-lbl'}>Full Name</label>
                <input type="text" className = {'field-set-input'}></input>
            </fieldset>
            <fieldset className = {'field-set'}>
                <label for='email' className = {'field-set-lbl'}>Email</label>
                <input type="email" className = {'field-set-input'}></input>
            </fieldset>
            <fieldset className = {'field-set-txt'}>
                <label for='message'className = {'field-set-lbl'}>Message</label>
                <textarea rows= "5" className = {'field-set-txt'}></textarea>
            </fieldset>
                <button type = 'button' className = 'contact-btn' > Send </button>
        </form>
    </div>
    );
};
export default Contact;
