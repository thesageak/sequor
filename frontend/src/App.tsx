import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home.tsx'
import GlobalLayout from './layouts/GlobalLayout.tsx';
import MediaDetailsLayout from './layouts/MediaDetailsLayout.tsx';
import SearchResults from './pages/search/SearchResults.tsx';


function App() {
  return (
    <Routes>
      <Route path='/' element={<GlobalLayout/>} >
        <Route index element={<Home />} />
        <Route path='search' element={<SearchResults />} />
        <Route path='manga/:id' element={<MediaDetailsLayout/>}/>
      </Route>
    </Routes>
  )
}

export default App
