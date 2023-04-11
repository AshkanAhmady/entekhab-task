import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/toolkitHooks";
import { fetchCharacters } from "../../Redux/characters/actions";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import SingleCharacter from "../SingleCharacter/SingleCharacter";
import { mapBoxStyles, paginationStyles } from "./styles";

const CharacterList = () => {
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1)
    const { loading, data, error } = useAppSelector((state) => state.characters);

    useEffect(() => {
        dispatch(fetchCharacters({ query: `query {characters(page: ${page}) {results {name}}}` }));
    }, [dispatch, page]);

    if (loading) return <CircularProgress color="secondary" />;
    if (error) return <p>{error}</p>;
    return (
        <>
            <Box sx={mapBoxStyles}>
                {data.map((character, index) => {
                    return <SingleCharacter key={index} character={character} />
                })}
            </Box>
            <Box sx={paginationStyles}>
                <Button disabled={page === 1} onClick={() => setPage(page - 1)} variant="contained">Prev</Button>
                <Typography variant="h5">
                    {page}
                </Typography>
                <Button onClick={() => setPage(page + 1)} variant="contained">Next</Button>
            </Box>
        </>
    );
}

export default CharacterList;