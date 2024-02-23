import { createContext, useState } from "react";
import React from 'react';
import {baseUrl} from "../baseUrl";

export const AppContext=createContext();

function AppContextProvider({children}){
   const [loading,setloading]=useState(false);
   const [pages,setpages]=useState(1);
   const [posts,setposts]=useState([]);
   const [totalPages,settotalPages]=useState(null);



async function fetchBlogPosts(page=1){
   setloading(true);
     const url=`${baseUrl}?page=${page}`;
   try{
          const response=await fetch(url);
          const data=await response.json();
          console.log(data);
          setpages(data.page);
          setposts(data.posts);
          settotalPages(data.totalPages);
   }
   catch(error){
         console.log("Error in fetching data");
         setpages(1);
         setposts([]);
         settotalPages(null);
   }
   setloading(false); 
}
function handlePageContent(page){
    setpages(page);
    fetchBlogPosts(page);
}
   const value={
    loading,
    setloading,
    pages,
    setpages,
    posts,
    setposts,
    totalPages,
    settotalPages,
    fetchBlogPosts,
    handlePageContent
   }
   return <AppContextProvider value={value}>
    {children}
   </AppContextProvider>
}

export default AppContextProvider;

