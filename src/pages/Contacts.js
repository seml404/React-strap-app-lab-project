import React, { Component } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
export default function Contacts() {
  return (
    <>
      <Container style={{ maxWidth: "500px" }}>
        <h1 className="text-center">Contact us</h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" placeholder="Message" rows={10} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
