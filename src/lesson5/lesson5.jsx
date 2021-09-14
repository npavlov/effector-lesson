import React, {useRef} from "react";
import {$store, submitForm} from "./store";
import {useStore} from "effector-react";

export const Lesson5 = () => {
    const store = useStore($store);

    const ref = useRef(null);

    return <div>
        <div>Set name:
            <input type="text" ref={ref}/>
            <button onClick={() => {
                submitForm(ref.current.value);
                ref.current.value = '';
            }
            }>Click me!
            </button>
        </div>
        <div>Current store: {store}</div>
    </div>;
}