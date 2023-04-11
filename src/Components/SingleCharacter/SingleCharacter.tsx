import { FC } from 'react';
import { SingleCharacterType } from '../../types';
import { Box } from "@mui/system";
import { singleCharacterStyles } from './styles';

const SingleCharacter: FC<SingleCharacterType> = ({ character }) => {
    return (
        <Box sx={singleCharacterStyles}>
            {character.name}
        </Box>
    );
}

export default SingleCharacter;