import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Banner.css";
import requests from "../requests";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    /* background image */
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,        backdropPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
        {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List </button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 200)}</h1>
      </div>
    </div>
  );
}

export default Banner;
