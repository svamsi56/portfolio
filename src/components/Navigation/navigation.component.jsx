import React from 'react';
import './navigation.styles.scss';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={'nav-bar'}>
            <ul className={'nav-list'}>
                <li className={'nav-list-item'}><NavLink exact to='/' activeClassName={'active-link'}> Home </NavLink></li>
                <li className={'nav-list-item'}><NavLink exact to='/about' activeClassName={'active-link'}> About </NavLink></li>
                <li className={'nav-list-item'}><NavLink exact to='/photos' activeClassName={'active-link'}> Photos </NavLink></li>
                <li className={'nav-list-item'}><NavLink exact to='/contact' activeClassName={'active-link'}> Contact </NavLink></li>
            </ul>
        </nav>
    );
};
export default Navigation;
