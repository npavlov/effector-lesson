import React from "react";
import { $playerPosition, api} from "./store";
import {useStore} from "effector-react";

export const Lesson2 = () => {

    const store = useStore($playerPosition);

    return <div>
        <div>Turn left: <button onClick={() => {api.moveLeft(5)}}>Click me!</button></div>
        <div>Turn right: <button onClick={() => {api.moveRight(10)}}>Click me!</button></div>
        <div>{store}</div>
    </div>;
}