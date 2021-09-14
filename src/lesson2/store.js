import {createStore, createApi} from 'effector'

export const $playerPosition = createStore(0)

// create events and attach them to store
export const api = createApi($playerPosition, {
    moveLeft: (state, n) => state - n,
    moveRight: (state, n) => state + n,
})

$playerPosition.watch(pos => {
    console.log('position', pos)
})
// => position 0
