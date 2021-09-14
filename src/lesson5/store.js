import {createEffect, createEvent, createStore, guard} from 'effector'

const callEvent = createEffect()
export const submitForm = createEvent()

guard({
    source: submitForm,
    filter: user => user.length > 0 && user[0].toUpperCase() === user[0],
    target: callEvent,
})

export const $store = createStore('').on(callEvent, () => `Called at ${new Date()}`);