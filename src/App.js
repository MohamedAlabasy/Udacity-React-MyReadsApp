import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';

import Home from './pages/Home'
import Search from './pages/Search'
import EmptyStates from './pages/emptyStates'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/search' exact element={<Search />} />

        <Route path='*' element={<EmptyStates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
