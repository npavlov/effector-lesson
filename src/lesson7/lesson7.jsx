import React from "react";
import {$store, messageReceived} from "./store";
import {useStore} from "effector-react";
export const Lesson7 = () => {
    const store = useStore($store);

    return <div>
        <div>Send image: <button onClick={() => {
            messageReceived({
                type: 'image',
                imageUrl: '...',
            });
        }
        }>Click me!</button></div>
        <div>Send text: <button onClick={() => {
            messageReceived({
                type: 'text',
                value: 'Hello',
            });
        }
        }>Click me!</button></div>
        <div>Send audio: <button onClick={() => {
            messageReceived({
                type: 'audio',
                value: 'Eron don don',
            })
        }
        }>Click me!</button></div>
        <div>Store: {JSON.stringify(store)}</div>
    </div>;
}