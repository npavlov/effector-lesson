import React from "react";
import {$attachedData, newEvent, setData,} from "./store";
import {useStore} from "effector-react";

export const Lesson6 = () => {
    const store = useStore($attachedData);

    return <div>
        <div>Set one store  (number): <input type="text" onChange={e => {
            setData(+(e.target.value));
        }
        }/></div>
        <div>Set other store (text): <input type="text" onChange={async e => {
            await newEvent(e.target.value);
        }
        }/></div>
        <div>Attached store: {store}</div>
    </div>;
}