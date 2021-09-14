import {combine, createEffect, createEvent, createStore,  sample} from "effector";

const $firstName = createStore('Ivan')
const $lastName = createStore('Petrov')
const signIn = createEffect(params => {
    console.log(params)
})

export const submitForm = createEvent();

export const $events = new createStore([]).on(signIn, (state, value) => {
    return [...state, value];
})

sample({
    clock: submitForm /* 1 */,
    source: combine([$firstName, $lastName]) /* 2 */,
    fn: (fullName, password) => {
        return `${fullName} - ${password}`
    } /* 3 */,
    target: signIn /* 4 */,
})
