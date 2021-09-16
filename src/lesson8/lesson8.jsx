import React, {useEffect} from "react";
import {useStore} from "effector-react";
import {$character, $characters, $isLoading, getCharacterFx, getCharactersFx, reset} from "./store";

export const Lesson8 = () => {
    const characters = useStore($characters);

    const character = useStore($character);

    const isLoading = useStore($isLoading);

    useEffect( () => {
        getCharactersFx();

        return () => {
            reset();
        }
    }, []);

    const onSelectCharacter = ({target}) => {
        getCharacterFx(target.value);
    }

    return <div>
        <div>{isLoading}</div>
        <div>
            <select name="select" onChange={onSelectCharacter}>
                {characters.map(({name, id}) => <option key={id} value={id}>{name}</option>)}
            </select>
        </div>
        {character && <div>
            <h1>Info</h1>
            <p>Name: {character.name}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
        </div>}
    </div>;
}
