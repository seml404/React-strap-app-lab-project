import React, { Component } from "react";
import { Tab, Nav, Col, Row } from "react-bootstrap";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

export default function About() {
  return (
    <>
      <div className="about-tabs-container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img className="tabImg" src={img1}></img>
                  <p>lorem</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img className="tabImg" src={img2}></img>
                  <p>lorem</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img className="tabImg" src={img3}></img>
                  <p>lorem</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}
