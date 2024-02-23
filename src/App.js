import './App.css';
import Home from './components/Home'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
function App() {
  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[])
  return (
    <div>
     <Home/>
     <Blogs/>
     <Pagination/>
    </div>
  );
}

export default App;
