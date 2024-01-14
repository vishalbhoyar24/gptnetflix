import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="mt:0  md:-mt-52 pl-4 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

        <MovieList title={"top rating"} movies={movies.nowTopRatedMovies} />
        <MovieList title={"popular"} movies={movies.nowPopularMovies} />
        <MovieList
          title={"upcoming movies"}
          movies={movies.nowUpcomingMovies}
        />
        <MovieList title={"horror movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
