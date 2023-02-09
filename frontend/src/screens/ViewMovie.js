import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Icon } from '@iconify/react';
import data from '../data';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ViewMovie = () => {
  const params = useParams();
  const { slug } = params;

  const movie = data.movies.find((movieOne) => {
    return movieOne.slug === slug;
  });

  console.log(movie);

  return (
    <div className="view_details_container">
      <Helmet>
        <title>{movie.title}</title>
      </Helmet>
      <div className="view_movie_image">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="view_movie_details">
        <h1>{movie.title}</h1>
        <h5>{`${movie.genre} - ${movie.running_time} - View Time: ${movie.view_time}PM`}</h5>
        <p>{movie.description}</p>

        <div className="booking_buttons">
          <Link
            style={{ textDecoration: 'none' }}
            to={`/movie/book-movie/${slug}`}
          >
            <Button className="book_movie">
              <Icon icon="akar-icons:pointer-hand" />
              <span>Book Movie</span>
            </Button>
          </Link>

          <Link
            style={{ textDecoration: 'none' }}
            to={`/movie/view-trailer/${movie.slug}`}
          >
            <Button className="view_movie">
              <Icon icon="akar-icons:play" />
              <span>Play Trailer</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewMovie;
