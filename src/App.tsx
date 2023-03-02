import { SetStateAction, SyntheticEvent, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
	accessKey: 'O3jf0Le_tBem9sMo0Y2Nlis9VKNAVqEsTDPUzZWetb4',
});

// const fetchingPhotos = async (keyword: string) => {
// 	const unsplashObj = await unsplash.search
// 		.getPhotos({ query: keyword, orientation: 'landscape' })
// 		.then(result => result);
// 	return unsplashObj;
// };

  const Buttons = () => {
    return <></>
  }

function App() {
  const [history, setHistory] = useState(['cat', 'dog', 'duck', 'catdog', 'seal']);
  const inputRef = useRef<HTMLInputElement>(null)
  
  const SearchBar = () => {
    // const [searchValue, setSearchValue] = useState('');
    const searchValue = useRef('');
    const userTypeIn = ''

    const handleSearchChange = () => {
      if (inputRef.current) {
        inputRef.current.value = userTypeIn

        console.log('here is the usert type', userTypeIn)
        console.log('here is the value', inputRef.current.value)
        console.log('Logging inputRef: ', inputRef)
        // return searchValue
      }
      // setSearchValue(event.target.value);
    };
  
    const handleSearchSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      // setHistory([...history, searchValue]);
      // setSearchValue('');
    };
  
    return <>
    <form onSubmit={handleSearchSubmit} className='search'>
      <section className='search__section'>
      <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        disableClearable
        options={history.map((option) => option)}
        renderInput={(params) => (
          <TextField {...params}
            label="Search input"
            value={searchValue}
            onChange={handleSearchChange}
            InputProps={{...params.InputProps, type: 'search',}}
            ref={inputRef}
          />
        )}
       />
      </Stack>
      </section>
    </form>
  </>
  };
  
  // const Gallery = async() => {
  //   const unsplashObj = await fetchingPhotos(searchValue);
  //   unsplashObj.response?.results.map(item => {
  //   return  <>
  //     <div className='flip-card'>
  //       <div className='flip-card-inner'>
  //         <div className='flip-card-front'> 
  //         <img src={item.urls.small} className='foundimages' alt={item.alt_description || 'no information for this image'} /> 
  //         </div>
  //         <div className='flip-card-back'>
  //         <p className='text-alt-info'></p>
  //         </div>
  //       </div>
  //     </div>
  //     </>
  //   })
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <SearchBar />
        {/* <Gallery /> */}
        <Buttons />
      </main>
    </div>
  );
}

export default App;
