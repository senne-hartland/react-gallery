import { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


  const Gallery = () => {
    return <></>
  }

  const Buttons = () => {
    return <></>
  }

function App() {
  const [history, setHistory] = useState(['cat', 'dog', 'duck', 'catdog', 'seal']);

  const SearchBar = () => {
    return (
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="free-solo-2-demo"
          disableClearable
          options={history.map((option) => option)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    );
  }
  
  const Search = () => {  
    return <>
      <form className='search'>
        <section className='search__section'>
          <ul className="search__section__ul" id="suggestionList">
            <SearchBar />
          </ul>
        </section>
      </form>
    </>
    }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Search />
        <Gallery />
        <Buttons />
      </main>
    </div>
  );
}

export default App;
