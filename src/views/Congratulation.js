import React from 'react';
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col
  } from "react-bootstrap";
  import { useHistory } from "react-router-dom";

export const Congratulation = () => {
    const history = useHistory();
  return (
    <Container fluid>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Congratulations</Card.Title>
              <img
                      alt="intimage"
                  
                      src={require("../assets/img/congratulations.jpg")}
                    />
            </Card.Header>
            <Card.Body>
              
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ornare orci, nec rutrum elit. Cras porta consectetur dui. 

In sit amet velit vitae ex ultricies viverra quis a leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ac ullamcorper justo. 

Sed vel nulla at odio tempor ullamcorper at in nunc. Curabitur eget magna volutpat, ornare odio vitae, rutrum mi. 
            </Card.Text>
                
                <Button
                  className="btn-fill pull-right"
                  variant="info"
                  onClick={() => {
                    history.push("/admin/landingPage");
                  }}
                >
                  Go To Dashboard
                </Button>
                <div className="clearfix"></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
