import { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
    const outputRef = useRef<HTMLLIElement>(null);
    const [suggestion, setSuggestion] = useState([''])

    const RenderList = () => {
      return <>{suggestion.map(sugge => <li>{sugge}</li>)}</>
    }

    return <>
      <form>
        <input className="search-section__input" type="search" id="searchText" ref={inputRef}/>
        <input type="submit" className="button-2 search-button" id="searchButton" value="Search" onClick={() => {
            const inputVal = inputRef.current?.value || '';
            setSuggestion(suggestion =>  [...suggestion, inputVal])
            outputRef.current!.textContent = inputVal || '';
          }}></input>
          <ul className="search-section__ul" id="suggestionList">
            <RenderList />
          </ul>
      </form>
    </>
  }

  const Gallery = () => {
    return <></>
  }

  const Buttons = () => {
    return <></>
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
