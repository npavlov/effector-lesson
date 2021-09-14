import {split, createEffect, createEvent, forward, createStore} from 'effector'

export const messageReceived = createEvent()
const showTextPopup = createEvent()
const playAudio = createEvent()
const reportUnknownMessageType = createEffect(({type}) => {
    console.log('unknown message:', type)
})

split({
    source: messageReceived,
    match: {
        text: msg => msg.type === 'text',
        audio: msg => msg.type === 'audio',
    },
    cases: {
        text: showTextPopup,
        audio: playAudio,
        __: reportUnknownMessageType,
    },
})

showTextPopup.watch(({value}) => {
    console.log('new message:', value)
})

export const $store = createStore({});

forward({
    from: playAudio,
    to: $store,
});