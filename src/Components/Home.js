import React, { useEffect } from "react";
import '../CSS/home.css'
import Aos from "aos";
import 'aos/dist/aos.css'

function Home(props) {

  useEffect(()=>{
    Aos.init({
      offset:300,
      duration: 1500,
    });
  })






  return (
    <>
    <h1 data-aos="zoom-in-up">Top Rated</h1>
     
        <div className="movie-list">
          {props.top_film.map((movie, index) => (
           
              <div className=" movie-card" data-aos="zoom-in-up">
                <img
                  src={`${props.baseUrl}w300${movie.poster_path}`}
                  className="card-img-top movie-image"
                  alt="Images"
                />
                <div className="details">
                <p className="title">{movie.original_title}</p>
                <p className="rating"><span>{movie.vote_average}</span> /10</p>
                </div>
              </div>
            
          ))}
        </div>
      
      <h1 data-aos="zoom-in-up">Popular Film</h1>

      <div className="movie-list">
          {props.popular_film.map((movie, index) => (
           
              <div className=" movie-card" data-aos="zoom-in-up">
                <img
                  src={`${props.baseUrl}w300${movie.poster_path}`}
                  className="card-img-top movie-image"
                  alt="Images"
                />
                <div className="details">
                <p className="title">{movie.original_title}</p>
                <p className="rating"><span>{movie.vote_average}</span> /10</p>
                </div>
              </div>
            
          ))}
        </div>
      <h1 data-aos="zoom-in-up">Upcoming Film</h1>

      <div className="movie-list">
          {props.popular_film.map((movie, index) => (
           
              <div className=" movie-card" data-aos="zoom-in-up">
                <img
                  src={`${props.baseUrl}w300${movie.poster_path}`}
                  className="card-img-top movie-image"
                  alt="Images"
                />
                <div className="details">
                <p className="title">{movie.original_title}</p>
                <p className="rating"><span>{movie.vote_average}</span> /10</p>
                </div>
              </div>
            
          ))}
        </div>
    </>
  );
}

export default Home;
