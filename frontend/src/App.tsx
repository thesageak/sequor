import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home.tsx'
import SearchResults from './pages/search/SearchResults.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<SearchResults />} />
    </Routes>
  )
}

export default App
