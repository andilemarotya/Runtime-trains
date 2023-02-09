import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Icon } from '@iconify/react';
import data from '../data';
import Thortitle from '../assets/Thor_Love_and_Thunder_Title.png';
import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MainPage = () => {
  // const [moviesBackend, setMoviesBackend] = useState([]);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const result = await axios.get('/api/movies');
  //     setMoviesBackend(result.data);
  //   };
  //   fetchMovies();
  // }, []);

  const promotedMovie = data.movies.find((movie) => {
    return movie.title === 'Thor: Love and Thunder';
  });

  // const promotedMovieBackend = moviesBackend.filter((movie) => {
  //   return movie.title === 'Thor: Love and Thunder';
  // });

  const [active, setActive] = useState('now_showing');
  const [movieCategory, setMovieCategory] = useState('now_showing');

  const [movies, setMovies] = useState(
    data.movies.filter((movie) => {
      return movie.release_state === 'now_showing';
    })
  );

  const filterMovies = (movie_state) => {
    setActive(movie_state);
    setMovieCategory(movie_state);
    filterFunction(movie_state);
  };

  const filterFunction = (movies_filtered) => {
    const filter = data.movies.filter(
      (movie) => movie.release_state === movies_filtered
    );
    setMovies(filter);
  };

  return (
    <div>
      {/* This section is for the promoted movie, which is Thor: Love and Thunder */}
      <section className="promoted_movie_box">
        {/* This the image box */}
        <div className="promoted_movie_image">
          <img src={promotedMovie.image} alt={promotedMovie.title} />
        </div>

        {/* This is the content box */}
        <div className="promoted_movie_contents">
          <Helmet>
            <title>{'Main Page'}</title>
          </Helmet>
          <h1 className="now_showing_title">Now Showing</h1>
          <div className="thortitle_box">
            <img src={Thortitle} alt={promotedMovie.title} />
          </div>
          <div className="booking_buttons">
            <Link
              style={{ textDecoration: 'none' }}
              to={`/movie/book-movie/${promotedMovie.slug}`}
            >
              <Button className="book_movie">
                <Icon icon="tabler:hand-click" />
                <span>Book Movie</span>
              </Button>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/movie/${promotedMovie.slug}`}
            >
              <Button className="view_movie">
                <Icon icon="mdi:magnify-plus-outline" />
                <span>View Movie</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* This section is for the all featured movies, which is Thor: Love and Thunder */}
      <section className="movies">
        <div className="movie_states">
          <h3
            onClick={() => filterMovies('now_showing')}
            className={active === 'now_showing' ? active : 'deactive'}
          >
            Now Showing
          </h3>
          <div className="divider"></div>
          <h3
            onClick={() => filterMovies('coming_soon')}
            className={active === 'coming_soon' ? active : 'deactive'}
          >
            Coming Soon
          </h3>
        </div>

        <div className="movies_categorised">
          {movies.map((movie) => (
            <div key={movie.slug}>
              <MovieCard
                img={movie.image}
                title={movie.title}
                genre={movie.genre}
                slug={movie.slug}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
