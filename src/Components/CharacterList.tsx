import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/toolkitHooks";
import { fetchCharacters } from "../Redux/characters/actions";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import SingleCharacter from "./SingleCharacter";

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
            <Box sx={{
                background: "#fff",
                padding: "20px",
                width: "450px",
                borderRadius: "10px",
                boxShadow: "0 0 15px 2px #eee",
                display: "flex",
                flexWrap: "wrap",
                gap: "10px"
            }}>
                {data.map((character, index) => {
                    return <SingleCharacter key={index} character={character} />
                })}
            </Box>
            <Box sx={{ display: "flex", marginTop: '1rem', gap: "5px" }}>
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