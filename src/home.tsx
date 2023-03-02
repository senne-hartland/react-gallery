import { SetStateAction } from 'react';
import {Searchbar} from './Searchbar'

const Home = () => {

    return (<>
        <h1>home</h1>
        <Searchbar historyText={[]} setHistory={function (value: SetStateAction<string[]>): void {
        throw new Error('Function not implemented.');
      } } />
      </>
    );
  };
  export default Home;