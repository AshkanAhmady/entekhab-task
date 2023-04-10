import Loading from "./Loading";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/toolkitHooks";
import { fetchCharacters } from "../Redux/characters/charactersSlice";
import styles from "./CharacterList.module.css"

const CharacterList = () => {
    const dispatch = useAppDispatch()
    const { loading, data, error } = useAppSelector((state) => state.characters);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    if (loading) return <Loading />;

    if (error) return <p>{error}</p>;

    return (
        <div className={styles.characterList}>
            {data.map((character, index) => {
                return <div key={index}>{character.name}</div>
            })}
        </div>
    );
}

export default CharacterList;