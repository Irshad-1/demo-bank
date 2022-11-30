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

const SetPassword = () => {
  const history = useHistory();
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="4"></Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Set Password</Card.Title>
                <img
                  alt="intimage"
                  src={require("../assets/img/setPassword.jpg")}
                />
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pl-1" md="12">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <Form.Control
                          placeholder="Enter Password"
                          type="otp"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="12">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Confirm Password
                        </label>
                        <Form.Control
                          placeholder="Enter Confirm Password"
                          type="otp"
                        ></Form.Control>
                      </Form.Group>
                      <p style={{ fontSize: "13px", color: "red" }}>
                        Password should be 6 characters
                      </p>
                    </Col>
                  </Row>

                  {/* <br></br>
              <br></br> */}

                  <Button
                    className="btn-fill pull-right"
                    variant="info"
                    onClick={() => {
                      history.push("/admin/login");
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
    </>
  );
};

export default SetPassword;
