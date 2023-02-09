import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';
import data from '../data';
import { Helmet } from 'react-helmet-async';

const MovieTrailer = () => {
  const params = useParams();
  const { slug } = params;

  const movie = data.movies.find((movieOne) => {
    return movieOne.slug === slug;
  });

  return (
    <div className="movie_trailer_container">
      <Helmet>
        <title>{movie.title}</title>
      </Helmet>
      <ReactPlayer className="react_player_trailer" url={movie.trailer} />
    </div>
  );
};

export default MovieTrailer;
