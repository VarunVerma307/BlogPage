import React, { useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

const Blogs = () => {
    const {loading,posts}=useContext(AppContext);
  return (
    <div>
      {loading?(<Spinner/>):
      (
        posts.length===0?
        (
            <div><p>No Post Found</p></div>
        )
        :
        (posts.map((post)=>{
            return(
                <Card post={post} />
            )
           
        })
        )
      )}
    </div>
  )
}

export default Blogs
