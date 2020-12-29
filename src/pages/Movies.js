import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    fetch('http://srapi.herokuapp.com/v1/movies')
    .then((response) => response.json())
    .then((data) => {
      setMovies(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(true);
      setLoading(false);
    });
  }, []);

  return (
    <div className="Movies">
      {isLoading && <p>Loading...</p>}
      {hasError && <p>An error has occurred</p>}
      <div><Link to="/movies/create">Create movie</Link></div>
      {movies.map((movie) => (
        <div key={movie.id} className="Movie">
          <h2><Link to={`/movies/${movie.id}`}>{movie.title}</Link></h2>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
