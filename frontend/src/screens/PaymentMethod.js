import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import '../App.css';

export const PaymentMethod = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    booking: { tickets, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'PayPal'
  );

  useEffect(() => {
    if (!tickets) {
      navigate(`/movie/book-movie/${slug}`);
    }
  }, [tickets, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placebooking');
  };
  return (
    <div>
      <div className="payment_container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className="paymentTitle">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <div className="paypal">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>

          <div className="stripe">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === 'Stripe'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>

          <div className="submit_pay_button">
            <Button className="payment_button" type="submit">
              <Icon icon="akar-icons:arrow-right" /> <span>Continue</span>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
