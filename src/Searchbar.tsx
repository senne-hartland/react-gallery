import './app.css';
import { useRef } from 'react';
import { createApi } from 'unsplash-js';
import { SearchProp, GalleryProp } from './types';


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

const Searchbar = ({ historyText , setHistory} : SearchProp, {setImages} : GalleryProp) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLParagraphElement>(null);
    const ShowSuggestions = () => {
      return <> <ul className='search__section__ul' >{historyText.map(hist => {
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
        if (!historyText.includes(inputRef.current.value)) {
          setHistory([inputRef.current.value, ...historyText])
        }
        fetchingPhotos(inputRef.current.value).then(result => setImages(result!))
      }
    }

    const SearchBar2 = () => {
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
  
    return (
      <div className="App">
        <main>
          <SearchBar2 />
        </main>
      </div>
    );
  }

export {Searchbar}