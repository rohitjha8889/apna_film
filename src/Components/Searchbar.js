import React from "react";


function Searchbar(props) {

  


  return (
    <>
      <div className="movie-list" >
          {
          props.searchMovie && props.searchMovie.length > 0?(

         
          props.searchMovie.map((movie, index) => (
           
              <div className=" movie-card" >
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
            
          )) ):(<p>No Movies found</p>)
        }
        </div>

    </>
  );
}

export default Searchbar;
