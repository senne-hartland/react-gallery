import './app.css';
import { createApi } from 'unsplash-js';
import { SearchProp} from './types';
import ShowSuggestions from './ShowSuggestions';

const unsplash = createApi({
	accessKey: 'O3jf0Le_tBem9sMo0Y2Nlis9VKNAVqEsTDPUzZWetb4',
});

const fetchingPhotos = async (keyword: string) => {
	const unsplashObj = await unsplash.search
		.getPhotos({ query: keyword, orientation: 'landscape' })
		.then(result => result);
	const imagesArray = unsplashObj.response?.results;
  const outputArray : string[] = []
  imagesArray?.forEach(item => {
    outputArray.push(item.urls.small)
  })
	return outputArray;
};


const Searchbar = ({ historyText , setHistory, inputRef, outputRef, setImages} : SearchProp) => {
  const searchSuggestions = () => {
    if (inputRef.current?.value) { 
      if (!historyText.includes(inputRef.current.value)) {
        setHistory([inputRef.current.value, ...historyText])
      }
      fetchingPhotos(inputRef.current.value).then(result => setImages(result!))
    }
  }
    return <>
      <div className="App">
        <main>
          <form action='' onSubmit={(event) => event.preventDefault()} className='search'>
            <section className='search__section'>
              <div>
              <input className='search__section__input' ref={inputRef} onKeyUp={() => {
                const inputVal = inputRef.current?.value;
                outputRef.current!.textContent = inputVal || '';
              }}/>
              <ShowSuggestions inputRef={inputRef} historyText={historyText} />
                <p ref={outputRef}>
                </p>
              </div>
              <input type='hidden'></input>
              <button className='search-button button-2' onClick={searchSuggestions}>
                Search
              </button>
            </section>
          </form>
      </main>
    </div>

  </>
  };

export {Searchbar}