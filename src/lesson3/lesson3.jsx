import React, {useRef} from "react";
import {$events, submitForm} from "./store";
import {useStore} from "effector-react";

export const Lesson3 = () => {

    const store = useStore($events);

    const ref = useRef(null);

    return <div>
        <div>Set password:
            <input type="text" ref={ref}/>
            <button onClick={() => {
                submitForm(ref.current.value);
                ref.current.value = '';
            }
            }>Click me!
            </button>
        </div>
        <div>{store.map(item => <p>{item}</p>)}</div>
    </div>;
}