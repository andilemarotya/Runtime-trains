import Button from 'react-bootstrap/esm/Button';
import { Helmet } from 'react-helmet-async';
import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { Icon } from '@iconify/react';

import SignInImage from '../assets/Nope.jpg';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';

export default function SignIn() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });

      ctxDispatch({ type: 'USER_SIGNIN', payload: data });

      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error('Invalid email or password');
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="signin-container">
      <Container className="signin-details">
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <h1 className="signin_title">Sign In</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="email_container" controlId="email">
            <Form.Label className="email_icon">
              <Icon className="icon_signin" icon="ant-design:mail-outlined" />
            </Form.Label>
            <Form.Control
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="email_input"
            />
          </Form.Group>
          <Form.Group className="email_container" controlId="password">
            <Form.Label className="email_icon">
              <Icon className="icon_signin" icon="bx:lock" />
            </Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="email_input"
            />
          </Form.Group>
          <div className="signin_signup_container">
            <Button type="submit" className="sign_in_button">
              <Icon icon="bi:send" />
              <span>Sign In</span>
            </Button>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/signup?redirect=${redirect}`}
            >
              <Button className="register-button">
                <Icon icon="ant-design:user-add-outlined" />
                <span>Sign Up</span>
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
      <Container className="signin-image">
        <img src={SignInImage} alt="A Nope Movie" />
      </Container>
    </Container>
  );
}
