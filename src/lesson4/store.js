import {createEvent, merge, restore} from 'effector'

export const foo = createEvent()
export const bar = createEvent()
const baz = merge([foo, bar])
baz.watch(v => console.log('merged event triggered: ', v))

export const $store = restore(baz, 'none');