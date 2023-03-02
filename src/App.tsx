import { SetStateAction, SyntheticEvent, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
	accessKey: 'O3jf0Le_tBem9sMo0Y2Nlis9VKNAVqEsTDPUzZWetb4',
});

const fetchingPhotos = async (keyword: string) => {
	const unsplashObj = await unsplash.search
		.getPhotos({ query: keyword, orientation: 'landscape' })
		.then(result => result);
	const imagesArray = unsplashObj.response?.results;
  const outputArray : string[] = []
  imagesArray?.map(item => {
    outputArray.push(item.urls.small)
  })
	return outputArray;
};

console.log(fetchingPhotos('cow'))

  const Buttons = () => {
    return <></>
  }

function App() {
  const [history, setHistory] = useState(['cat', 'dog', 'duck', 'catdog', 'seal']);  
  const [images, setImages] = useState(['']);  
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLParagraphElement>(null);
  
  const ShowSuggestions = () => {
    return <> <ul className='search__section__ul' >{history.map(hist => {
      if(inputRef.current) {
          return <li className='' key={hist}>{hist}</li>
       } else {
        return <li></li>
       }
      }
    )}
  </ul>
</>
}
    
  const searchSuggestions = () => {
    if (inputRef.current?.value) { 
      if (!history.includes(inputRef.current.value)) {
        setHistory([inputRef.current.value, ...history])
      }
      fetchingPhotos(inputRef.current.value).then(result => setImages(result!))
    }
  }
  
  const SearchBar = () => {
    return <>
    <form onSubmit={(event) => event.preventDefault()} className='search'>
      <section className='search__section'>
        <div>
        <input className='search__section__input' ref={inputRef} onKeyUp={() => {
          const inputVal = inputRef.current?.value;
          outputRef.current!.textContent = inputVal || '';
        }}/>
        <ShowSuggestions />
      <p ref={outputRef}>
      </p>
      </div>
      <button className='search-button button-2' onClick={searchSuggestions}>
        Search
      </button>
      </section>
    </form>
  </>
  };

  const Gallery = () => {
    return  <> <div className='images-area' >
    {images.map(item => 
    <div className='flip-card'>
    <div className='flip-card-inner'>
      <div className='flip-card-front'> 
        <img src={item} className='foundimages'/>
      </div>
      <div className='flip-card-back'>
        <p className='text-alt-info'>"info"</p>
      </div>
    </div></div>)}</div></>
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <SearchBar />
        <Gallery />
        <Buttons />
      </main>
    </div>
  );
}

export default App;
