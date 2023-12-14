import { AppContext } from './context/ContextApi';
import './App.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Header from "./components/Header"
import Feed from "./components/Feed"
import SearchResult from "./components/SearchResult"
import VideoDetails from "./components/VideoDetails"

function App() {
  return (
    <AppContext>
      <BrowserRouter>
      <div className='flex flex-col h-full'>
        <Header/>  
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
          <Route path='/video/:id' element={<VideoDetails/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </AppContext>
  );
}
//54256bbfbfmsh7d3f8c994aa1d70p1cbecajsnf3b2f008226f
export default App;
