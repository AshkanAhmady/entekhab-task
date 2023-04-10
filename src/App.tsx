import { Box } from "@mui/system";
import CharacterList from './Components/CharacterList';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>rick and morty characters</h1>
      <CharacterList />
    </Box>
  );
}

export default App;
