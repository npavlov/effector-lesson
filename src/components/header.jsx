import React from 'react';
import {Link, useLocation} from "react-router-dom";

import './style.css';

const navLinks = [
    {path: '/', name: 'Home'},
    {path: '/lesson1', name: 'Lesson 1 (createStore, restore)'},
    {path: '/lesson2', name: 'Lesson 2 (createApi)'},
    {path: '/lesson3', name: 'Lesson 3 (sample, combine)'},
    {path: '/lesson4', name: 'Lesson 4 (merge)'},
    {path: '/lesson5', name: 'Lesson 5 (Guard)'},
    {path: '/lesson6', name: 'Lesson 6 (Attach)'},
    {path: '/lesson7', name: 'Lesson 7 (Split, Forward)'},
    {path: '/lesson8', name: 'Lesson 8 (working with API)'},
]

export const Header = () => {

    const {pathname} = useLocation();

    return <nav>
        <ul>
            {navLinks.map(item => {
                const className = item.path === pathname ? "active" : "";

                return <li key={item.path}>
                    <Link to={item.path} className={className}>{item.name}</Link>
                </li>
            })}
        </ul>
    </nav>;
}
