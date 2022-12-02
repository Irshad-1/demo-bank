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

export const ForgotPassword = () => {
  const history = useHistory();
  return (
    <Container fluid>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Forgot Password</Card.Title>
              <img
                alt="intimage"
                src={require("../assets/img/Mobilenumber.jpg")}
              />
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <h5 className="text-success">
                    &nbsp;&nbsp;&nbsp;Enter your registered mobile number
                  </h5>

                  <Col className="pl-1" md="12">
                    <Form.Group>
                      <label htmlFor="exampleInputEmail1">Mobile Number</label>
                      <Form.Control
                        placeholder="Enter Mobile Number"
                        type="number"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                {/* <br></br>
              <br></br> */}

                <Button
                  className="btn-fill pull-right"
                  variant="info"
                  onClick={() => {
                    history.push("/admin/authentication");
                  }}
                >
                  Confirm
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
