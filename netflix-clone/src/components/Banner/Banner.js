// src/components/Banner/Banner.js

import React, { useEffect, useState } from 'react';
import './banner.css'; // Ensure the case matches the actual filename
import axios from "../../utils/axios"; // Adjust the path based on your directory structure
import requests from "../../utils/requests"; // Adjust the path based on your directory structure

const Banner = () => {
  const [movie, setMovie] = useState({}); // Initialize movie state as an empty object

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request); // Fetch Netflix Originals
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length) // Get a random movie
          ]
        );
      } catch (error) {
        console.error("Failed to fetch movie data:", error); // Handle errors
      }
    };
    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, // Set background image
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1> {/* Display movie title */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
      <h1 className="banner_description">{movie?.overview}</h1> Display movie overview
      </div>
      <div className="banner--fadeBottom" /> {/* Fade effect at the bottom */}
    </header>
  );
};

export default Banner;