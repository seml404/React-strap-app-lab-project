import React from "react";
import { Container, Col, Row, Card, Button, CardDeck } from "react-bootstrap";
import CarouselBox from "../components/CarouselBox";

import cardImg1 from "../assets/card_img1.jpeg";
import cardImg2 from "../assets/card_img2.jpeg";
import cardImg3 from "../assets/card_img3.jpeg";
import cardImg4 from "../assets/card_img4.jpeg";

export default function Home() {
  return (
    <>
      <CarouselBox></CarouselBox>
      <Container>
        <h2 className="text-center m-4">Our team</h2>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card text="warning" bg="primary" border="danger">
              <Card.Img variant="top" src={cardImg1} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="danger">Some text for Button</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card text="warning" bg="primary" border="danger">
              <Card.Img
                variant="top"
                src={cardImg2}
                className="d-block w-100"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="danger">Some text for Button</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card text="warning" bg="primary" border="danger">
              <Card.Img
                variant="top"
                src={cardImg3}
                className="d-block w-100"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="danger">Some text for Button</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card text="warning" bg="primary" border="danger">
              <Card.Img
                variant="top"
                src={cardImg4}
                className="d-block w-100"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="danger">Some text for Button</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

{
  /* <Row xs={1} md={2} className="g-4"> */
}
