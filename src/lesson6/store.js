import {createEffect, attach, createEvent, restore, createStore} from 'effector'

const original = createEffect(params => {
    console.log('Original effect called with', params)
});

export const setData = createEvent();

const data = restore(setData, 0);

const setAttachedStore = createEvent();

export const newEffect = attach({
    effect: original,
    source: data,
    mapParams: (params, data) => {
        const combined = `Created effect called with ${params} and data: ${data}`
        console.log(combined)

        setAttachedStore({params, data});

        return {params, data}; //фактически на этой строчке мы вызываем эффект original с приаттаченным стором
    },
})

export const $attachedData = createStore('').on(setAttachedStore, (_, value) => {
    return JSON.stringify(value);
});
