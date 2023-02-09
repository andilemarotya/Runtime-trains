import { createContext, useReducer, useState } from 'react';

export const Store = createContext();

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

  paymentMethod: localStorage.getItem('paymentMethod')
    ? localStorage.getItem('paymentMethod')
    : '',

  booking: {
    tickets: localStorage.getItem('tickes')
      ? JSON.parse(localStorage.getItem('tickets'))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'PROCEED_TO_PAY': {
      const newItem = action.payload;

      if (state.booking.tickets.length === 0) {
        const cartMoviedAddOne = {
          ...state,
          booking: {
            ...state.booking,
            tickets: [...state.booking.tickets, action.payload],
          },
        };

        localStorage.setItem('tickets', JSON.stringify(cartMoviedAddOne));

        return cartMoviedAddOne;
      }

      const itemChoice = Object.values(Object.values(newItem)[0])[1];

      const itemCart = Object.values(
        Object.values(state.booking.tickets[0])[0]
      )[1];

      if (itemCart === itemChoice) {
        const cartMovieAddMany = {
          ...state,
          booking: {
            ...state.booking,
            tickets: [newItem],
          },
        };

        localStorage.setItem('tickets', JSON.stringify(cartMovieAddMany));

        return cartMovieAddMany;
      }

      const cartMovieAddExt = {
        ...state,
        booking: {
          ...state.booking,
          tickets: [...state.booking.tickets, action.payload],
        },
      };

      localStorage.setItem('tickets', JSON.stringify(cartMovieAddExt));
      return cartMovieAddExt;
    }

    case 'DELETE_SEAT': {
      const itemRemoved = action.payload;
      const cartMovie = {
        ...state,
        booking: {
          ...state.booking,
          tickets: [itemRemoved],
        },
      };

      localStorage.setItem('tickets', JSON.stringify(cartMovie));

      return cartMovie;
    }

    case 'USER_SIGNIN': {
      return { ...state, userInfo: action.payload };
    }

    case 'USER_SIGNOUT': {
      return {
        ...state,
        userInfo: null,
        booking: { tickets: [], paymentMethod: '' },
      };
    }

    case 'SAVE_PAYMENT_METHOD': {
      return {
        ...state,
        booking: {
          ...state.booking,
          paymentMethod: action.payload,
        },
      };
    }

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
