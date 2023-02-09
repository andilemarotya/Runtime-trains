import Button from 'react-bootstrap/esm/Button';
import { Helmet } from 'react-helmet-async';
import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { Icon } from '@iconify/react';

import SignUpImage from '../assets/Top_Gun_Maverick.jpg';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';

export default function SignUp() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (password !== comfirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      const { data } = await Axios.post('/api/users/signup', {
        name,
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
          <title>Sign Up</title>
        </Helmet>
        <h1 className="signin_title">Sign Up</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="email_container" controlId="name">
            <Form.Label className="email_icon">
              <Icon className="icon_signin" icon="ant-design:user-outlined" />
            </Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="email_input"
            />
          </Form.Group>
          <Form.Group className="email_container" controlId="email">
            <Form.Label className="email_icon">
              <Icon className="icon_signin" icon="ant-design:mail-outlined" />
            </Form.Label>
            <Form.Control
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              placeholder="Create a password"
              className="email_input"
            />
          </Form.Group>
          <Form.Group className="email_container" controlId="comfirmPassword">
            <Form.Label className="email_icon">
              <Icon className="icon_signin" icon="bx:lock" />
            </Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setComfirmPassword(e.target.value)}
              placeholder="Comfirm your password"
              className="email_input"
            />
          </Form.Group>
          <div className="signin_signup_container">
            <Button type="submit" className="sign_in_button">
              <Icon icon="bi:send" />
              <span>Sign Up</span>
            </Button>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/signin?redirect=${redirect}`}
            >
              <Button className="register-button">
                <Icon icon="ant-design:user-outlined" />
                <span>Sign In</span>
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
      <Container className="signin-image">
        <img src={SignUpImage} alt="Top Gun" />
      </Container>
    </Container>
  );
}
