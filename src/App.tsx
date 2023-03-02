import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import About from "./about";
import Home from "./home";
import Search from "./search";
const App = () => {
  return ( <>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="navbar">
            <ul>
                <li>
                    <Link className='anchor button-2' to="/">Home</Link>
                </li>
                <li>
                    <Link className='anchor button-2' to='/search'>Search</Link>
                </li>
                <li>
                    <Link className='anchor button-2' to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    </header>
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </>);
};
export default App;