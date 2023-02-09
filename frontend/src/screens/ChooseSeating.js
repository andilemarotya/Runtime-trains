import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../data';
import seating_image from '../assets/seating_arrangement.png';
import Button from 'react-bootstrap/esm/Button';
import { Icon } from '@iconify/react';
import '../App.css';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';

const ChooseSeating = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const movie = data.movies.find((movieOne) => {
    return movieOne.slug === slug;
  });

  const [chosenSeats, setChosenSeats] = useState([]);

  const [addSeat, setAddSeat] = useState({
    seating: '',
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldname = event.target.getAttribute('name');
    const fieldvalue = event.target.value.toUpperCase();

    const seatData = { ...addSeat };
    seatData[fieldname] = fieldvalue;

    setAddSeat(seatData);
  };

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const isSeatAdded = chosenSeats.find(
      (seatFound) => seatFound.seating === addSeat.seating
    );

    if (isSeatAdded) {
      return window.alert(`Seat ${addSeat.seating} has already been selected.`);
    }

    const newSeat = {
      seating: addSeat.seating,
    };

    const newMovieTicket = {
      movieChoie: movie,
      seatChoice: [...chosenSeats, newSeat],
    };

    ctxDispatch({
      type: 'PROCEED_TO_PAY',
      payload: { ...newMovieTicket, quantity: 1 },
    });

    const newChosenSeats = [...chosenSeats, newSeat];

    setChosenSeats(newChosenSeats);
  };

  const handleDeleteClick = (seat) => {
    const newSeats = [...chosenSeats];

    const removed = newSeats.filter((reSeat) => reSeat.seating !== seat);

    const newMovieTicketRemoved = {
      movieChoie: movie,
      seatChoice: [removed],
    };

    ctxDispatch({
      type: 'DELETE_SEAT',
      payload: { newMovieTicketRemoved },
    });

    setChosenSeats(removed);
  };

  const paymentHandler = () => {
    navigate(`/signin?redirect=/payment/${slug}`);
  };
  return (
    <div className="choose_seating_container">
      <Helmet>
        <title>{'Choose Seating'}</title>
      </Helmet>
      <div className="seating_image">
        <img src={seating_image} alt="Seating Arangement" />
      </div>

      <div className="seating_details">
        <h4>{`Choose your seat(s) (e.g. C1)`}</h4>

        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="seating"
            required="required"
            placeholder="e.g. C1"
            onChange={handleAddFormChange}
          />

          <button type="submit">
            <Icon icon="ant-design:plus-outlined" />
            <span>Add seat</span>
          </button>
        </form>

        <h6>{`You have selected the following seats:`}</h6>

        <table>
          <thead>
            <tr>
              <th>Seat</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {chosenSeats.map((seat) => (
              <tr key={seat.seating}>
                <td>{seat.seating}</td>
                <td>{movie.price}</td>
                <td>
                  <button onClick={() => handleDeleteClick(seat.seating)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h6>
          Which amounts to <span>{`R${chosenSeats.length * movie.price}`}</span>
        </h6>

        {state.booking.tickets.length === 0 ? (
          <Button className="proceed_payment">
            <Icon icon="ic:baseline-shopping-cart-checkout" />
            <span>Proceed to Payment</span>
          </Button>
        ) : (
          <Button className="proceed_payment" onClick={paymentHandler}>
            <Icon icon="ic:baseline-shopping-cart-checkout" />
            <span>Proceed to Payment</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChooseSeating;
