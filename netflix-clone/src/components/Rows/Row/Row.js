import React, { useEffect, useState } from 'react';
import './row.css';
import axios from '../../../utils/axios'; // Adjust the path to match the correct location
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/w500"; // TMDB image base URL

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.error('Error fetching trailer: ', error));
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [fetchUrl]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name || movie.title}
            className={`row_poster ${isLargeRow ? 'row_posterLarge' : ''}`}
          />
        ))}
      </div>
      {trailerUrl && (
        <div className="trailer">
          <iframe
            width="100%"
            height="390"
            src={`https://www.youtube.com/embed/${trailerUrl}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Trailer"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Row;
