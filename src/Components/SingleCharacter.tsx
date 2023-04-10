import { FC } from 'react';
import { SingleCharacterType } from '../types';
import { Box } from "@mui/system";

const SingleCharacter: FC<SingleCharacterType> = ({ character }) => {
    return (
        <Box sx={{
            borderRadius: "3px",
            fontWeight: "600",
            padding: "5px",
            background: "#eee"
        }}>
            {character.name}
        </Box>
    );
}

export default SingleCharacter;