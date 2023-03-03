import { SetStateAction } from 'react';
import {Searchbar} from './Searchbar'
import { Search } from './search';

const Home = () => {
    return (<>
        <h1>home</h1>
        <Search/>
        {/* <Searchbar historyText={history} setHistory={setHistory} inputRef={inputRef} outputRef={outputRef} setImages={setImages}/> */}
      </>
    );
  };
  export default Home;