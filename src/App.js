import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Favourite from "./Components/Favourite";
import Searchbar from "./Components/Searchbar";

function App() {

  const [top_film, update_top_film] = useState([]);
  const [popular_film, update_popular_film] = useState([]);
  const [upcoming_film, update_upcoming_film] = useState([]);
  const [searchMovie, updateSearchMovie] = useState([]);
  const [searchVal, updateSearchVal] = useState('');

  


  const baseUrl = 'https://image.tmdb.org/t/p/';
//  Top Film

  const fetchDataTopFilm = async () =>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=75c3ecc712050ec8a382f2d7323094a0`)

    const jsonData = await data.json()

    const top_rated_film = jsonData.results
    // console.log(top_rated_film)
    update_top_film(top_rated_film)
  }
useEffect(()=>{
  fetchDataTopFilm()
},[])


// Popular Film

  const fetchDataPopularFilm = async () =>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=75c3ecc712050ec8a382f2d7323094a0`)

    const jsonData = await data.json()

    const pop_film = jsonData.results;
    // console.log(pop_film)
    update_popular_film(pop_film)
  }
useEffect(()=>{
  fetchDataPopularFilm()
},[])


//  upcoming Movies



const fetchDataUpcoming = async () =>{
  const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=75c3ecc712050ec8a382f2d7323094a0`)

  const jsonData = await data.json()

  const upcoming = jsonData.results;
  // console.log(pop_film)
  update_upcoming_film(upcoming)
}
useEffect(()=>{
fetchDataUpcoming()
},[])



//  Search Movies data fetch 



const fetchData_SearchMovie = async()=>{
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=75c3ecc712050ec8a382f2d7323094a0&&query=${searchVal}`);
  const jsonData = await data.json();
  const search = jsonData.results;
  updateSearchMovie(search)
  }
  useEffect(()=>{
  fetchData_SearchMovie();
  },[searchVal]);
  
  const changeHandler = (e)=>{
    updateSearchVal(e.target.value);
    
  }


  return (
    <>
    <BrowserRouter>
      <Navbar searchVal={searchVal} changeHandler={changeHandler}/>
    <Routes>
      <Route path="/apna_film" element={ <Home top_film={top_film} baseUrl={baseUrl} popular_film={popular_film} upcoming_film={upcoming_film}/>}/>
      
    <Route path="apna_film/favourite" element={<Favourite/>}/>
    <Route path="apna_film/search"  element={<Searchbar searchMovie={searchMovie} baseUrl={baseUrl}/>}/>

      
    </Routes>
    
    
    </BrowserRouter>

    </>
  );
}

export default App;
