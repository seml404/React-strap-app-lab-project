import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
export default function Blog() {
  return (
    <>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 8 }).map((_) => (
            <Col>
              <Card>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
