import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';
import { Store } from '../Store';
import '../App.css';

export const PlaceOrder = () => {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    booking: { tickets, paymentMethod },
  } = state;

  var seatsChosen = [];

  const sizeArray = Object.values(Object.values(tickets[0])[1]).length;

  const newThing = Object.values(Object.values(tickets)[0])[1];

  for (var i = 0; i < sizeArray; i++) {
    var chosen = Object.values(Object.values(newThing)[i])[0];
    seatsChosen = [...seatsChosen, chosen];
  }

  return (
    <div className="placeOrder_container">
      <Helmet>
        <title>Place Order</title>
      </Helmet>
      <h1 className="placeOrderTitle">Place Your Order</h1>
      <Row className="row_wrap">
        <Col className="column1">
          <Card className="card1">
            <Card.Body>
              <Card.Title className="card_title">Movie Details</Card.Title>
              <Card.Text className="card_text">
                <div className="texts">
                  <strong>Title:</strong>
                  {Object.values(Object.values(tickets[0])[0])[0]}
                </div>

                <div className="texts">
                  <strong>Genre:</strong>
                  {Object.values(Object.values(tickets[0])[0])[3]}
                </div>
                <div className="texts">
                  <strong>Running Time</strong>
                  {Object.values(Object.values(tickets[0])[0])[4]}
                </div>
                <div className="texts">
                  <strong>Ticket Price:</strong>
                  {Object.values(Object.values(tickets[0])[0])[9]}{' '}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card2">
            <Card.Body>
              <Card.Title className="card_title">Payment Details</Card.Title>
              <Card.Text className="card_text">
                <strong>Payment Method:</strong>
                {paymentMethod}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="column2">
          <Card className="card3">
            <Card.Body>
              <Card.Title className="card_title order_summary">
                Order Summary
              </Card.Title>
              <ListGroup varient="flush" className="card_text">
                <ListGroup.Item>
                  <Row>
                    <Col className="card_text paddingdown">
                      <span>Seats chosen:</span>
                      {seatsChosen}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col className="card_text paddingdown">
                      <span>Price per seat:</span>
                      {Object.values(Object.values(tickets[0])[0])[9]}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col className="subtotal card_text paddingdown">
                      <span>SubTotal:</span>
                      <strong>
                        R
                        {Object.values(Object.values(tickets[0])[0])[9] *
                          seatsChosen.length}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <Button className="sign_in_button placeorder">
                        <Icon icon="fluent:payment-28-regular" />
                        <span>Place Order</span>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
