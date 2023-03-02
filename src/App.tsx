import { Routes, Route } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Search from "./search";
const App = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};
export default App;