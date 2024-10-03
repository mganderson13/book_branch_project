import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Book Branch</h1>
      <div id="page-body">
        Welcome to Book Branch! Explore, read, share!
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/details/:id" element={<BookDetails />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;