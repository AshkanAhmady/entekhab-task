import { Box } from "@mui/system";
import CharacterList from './Components/CharacterList';

const appStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

function App() {
  return (
    <Box sx={appStyles}>
      <h1>rick and morty characters</h1>
      <CharacterList />
    </Box>
  );
}

export default App;
