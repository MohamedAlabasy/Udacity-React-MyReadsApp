import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Book/Home'
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
