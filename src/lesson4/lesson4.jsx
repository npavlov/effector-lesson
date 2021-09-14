import React from "react";
import {$store, bar, foo} from "./store";
import {useStore} from "effector-react";

export const Lesson4 = () => {
    const store = useStore($store);

    return <div>
        <div>Foo: <button onClick={foo}>Click me!</button></div>
        <div>Bar: <button onClick={bar}>Click me!</button></div>
        <div>Current store: {store}</div>
    </div>;
}