import React from "react";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
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
                We are informing you that our bank has received your application
                for Personal Loan . We are happy to inform you that your
                Personal Loan request has been approved and is currently being
                processed. Further, we inform you that we have sent an email
                containing attached documents. Also we have sent you the terms
                and conditions of the loans sanctioned. We would like to
                schedule your meeting with the finance officer of the company
                for any further information and clarifications that you might
                wish to know.
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
  );
};
