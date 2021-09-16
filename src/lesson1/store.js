import {createStore, combine, createEvent, restore} from 'effector'

export const setName = createEvent();

export const increaseBalance = createEvent();

export const decreaseBalance = createEvent();

const balance = createStore(0)
    .on(increaseBalance, (state) => state + 1000)
    .on(decreaseBalance, (state) => state - 1000);

const username = restore(setName, 'Ivan'); //Равнозначны

// const username = createStore('Ivan').on(setName, (_, value) => value);

export const $greeting = combine(balance, username, (balance, username) => {
    return `Hello, ${username}. Your balance is ${balance}`
})
