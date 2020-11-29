import React, { useState, useEffect } from 'react';

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
      {movies.map((movie) => (
        <div key={movie.id} className="Movie">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;