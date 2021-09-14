import React from 'react';
import {Link} from "react-router-dom";

export const Header = () => {

    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/lesson1">Lesson 1 (createStore, restore)</Link>
            </li>
            <li>
                <Link to="/lesson2">Lesson 2 (createApi)</Link>
            </li>
            <li>
                <Link to="/lesson3">Lesson 3 (sample, combine)</Link>
            </li>
            <li>
                <Link to="/lesson4">Lesson 4 (merge)</Link>
            </li>
            <li>
                <Link to="/lesson5">Lesson 5 (Guard)</Link>
            </li>
            <li>
                <Link to="/lesson6">Lesson 6 (Attach)</Link>
            </li>
            <li>
                <Link to="/lesson7">Lesson 7 (Split, Forward)</Link>
            </li>
        </ul>
    </nav>;
}