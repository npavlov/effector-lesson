import React from "react";
import {$greeting, decreaseBalance, increaseBalance, setName} from "./store";
import {useStore} from "effector-react";

export const Lesson1 = () => {

    const store = useStore($greeting);

    return <div>
        <div>Set name: <input type="text" onChange={e => {
            setName(e.target.value);
        }
        }/></div>
        <div>Increase balance: <button onClick={increaseBalance}>Click me!</button></div>
        <div>Decrease balance: <button onClick={decreaseBalance}>Click me!</button></div>
        <div>{store}</div>
    </div>;
}