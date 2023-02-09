import React, { useContext, useState } from 'react';
import './App.css';
import logo from './assets/runtime_terror_logo.png';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Icon } from '@iconify/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import MainPage from './screens/MainPage';
import ViewMovie from './screens/ViewMovie';
import MovieTrailer from './screens/MovieTrailer';
import ChooseSeating from './screens/ChooseSeating';
import { Store } from './Store';
import SignIn from './screens/SignIn';

import styled from 'styled-components';
import SignUp from './screens/SignUp';
import { PaymentMethod } from './screens/PaymentMethod';
import { PlaceOrder } from './screens/PlaceOrder';

const DropDownContainer = styled('div')`
  width: 10.5em;
  margin: 0 auto;
`;
const DropDownHeader = styled('div')`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #204679;
`;

const DropDownListContainer = styled('div')``;

const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  margin-top: 0.4em;
  border-radius: 5px;
  padding-left: 1em;
  background: #159bb0;
  color: #214542;
  text-decoration: 'none';
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 16px;
  &:first-child {
    padding-top: 1em;
  }
  &:last-child {
    padding-bottom: 0.2em;
  }
`;

const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ['Profile', 'Order History', 'Sign Out'];

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { booking, userInfo } = state;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('paymentMethod');
  };

  console.log(state.booking.tickets.length);

  return (
    <BrowserRouter>
      <div>
        <header>
          <ToastContainer position="bottom-center" limit={1} />
          <Navbar>
            <Container className="nav-contents">
              <LinkContainer to="/">
                <Navbar.Brand className="logo-box">
                  <img src={logo} alt="Logo" />
                </Navbar.Brand>
              </LinkContainer>

              <Nav className="me-auto buttons">
                {state.booking.tickets.length === 0 ? (
                  <div className="tickets_none">
                    <Button className="order_history">
                      <Icon icon="icon-park-outline:transaction-order" />
                      <span>Ticket</span>
                    </Button>
                  </div>
                ) : (
                  <Link
                    className="badge_cont"
                    style={{ textDecoration: 'none' }}
                    to="/placebooking"
                  >
                    <div>
                      <Button className="order_history">
                        <Icon icon="icon-park-outline:transaction-order" />
                        <span>Ticket</span>
                      </Button>
                    </div>
                    {booking.tickets.length > 0 && (
                      <div className="badge_icon">{booking.tickets.length}</div>
                    )}
                  </Link>
                )}

                {userInfo ? (
                  <DropDownContainer>
                    <DropDownHeader className="view_profile" onClick={toggling}>
                      {userInfo.name}
                      <Icon icon="gridicons:dropdown" />
                    </DropDownHeader>
                    {isOpen && (
                      <DropDownListContainer>
                        <DropDownList>
                          <ListItem onClick={onOptionClicked('Profile')}>
                            <Link
                              style={{ textDecoration: 'none' }}
                              to="/profile"
                              className="dropdown-item"
                            >
                              Profile
                            </Link>
                          </ListItem>
                          <ListItem onClick={onOptionClicked('Order History')}>
                            <Link
                              style={{ textDecoration: 'none' }}
                              to="/orderhistory"
                              className="dropdown-item"
                            >
                              Order History
                            </Link>
                          </ListItem>
                          <ListItem onClick={onOptionClicked('Sign Out')}>
                            <Link
                              style={{ textDecoration: 'none' }}
                              to="#signout"
                              className="dropdown-item"
                              onClick={signoutHandler}
                            >
                              Sign Out
                            </Link>
                          </ListItem>
                        </DropDownList>
                      </DropDownListContainer>
                    )}
                  </DropDownContainer>
                ) : (
                  <Link
                    style={{ textDecoration: 'none' }}
                    className="nav-link"
                    to="/signin"
                  >
                    <Button className="view_profile">
                      <Icon icon="ant-design:user-outlined" />
                      <span>Sign In</span>
                    </Button>
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>

        <main>
          <Routes>
            <Route path="/placebooking" element={<PlaceOrder />} />
            <Route path="/movie/book-movie/:slug" element={<ChooseSeating />} />
            <Route path="/payment/:slug" element={<PaymentMethod />} />
            <Route
              path="/movie/view-trailer/:slug"
              element={<MovieTrailer />}
            />
            <Route path="/movie/:slug" element={<ViewMovie />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
