import { useState } from 'react';
import './app.css';
import {Searchbar} from './Searchbar'
import {Gallery} from './Gallery'

const Search = () => {
  const [history, setHistory] = useState(['cat', 'dog', 'duck', 'catdog', 'seal']);  
  const [images, setImages] = useState(['data:image/jpeg;base64,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']);  

  return (
    <div className="App">
      <main>
            <Searchbar historyText={history} setHistory={setHistory} setImages={setImages}  />
            <Gallery images={images} setImages={setImages} />
      </main>
    </div>
  );
}

export default Search;
