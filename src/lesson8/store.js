const {createEffect, createStore, sample} = require("effector");

export const getCharactersFx = createEffect(async () => {
    const url = `api/character?page=1`;
    const base = "https://rickandmortyapi.com";
    let nextPage = `${base}/${url}`;

    const characters = [];

    while (!!nextPage) {
        const req = await fetch(nextPage);

        const {info, results} = await req.json();

        nextPage = info.next;

        const arr = results.map(({name, id}) => ({name, id}));

        characters.push(...arr);
    }
    return characters;
});

export const $characters = createStore([]).on(
    getCharactersFx.doneData,
    (_, items) => items,
);

export const getCharacterFx = createEffect(async (characterId) => {
    const url = `api/character/${characterId}`;
    const base = "https://rickandmortyapi.com";
    const req = await fetch(`${base}/${url}`);
    return req.json();
});

sample({
    clock: $characters.updates,
    source: $characters,
    fn: (data) => data[0].id,
    target: getCharacterFx
})

export const $character = createStore(null).on(
    getCharacterFx.doneData,
    (_, {name, species, gender}) => ({name, species, gender}),
);

export const $isLoading = createStore('loading...').on(getCharactersFx.doneData, () => 'loaded!');

