import React from "react";
import {
  Card,
  Container,
  Row,
  Form,
  Col,
  Button,
  InputGroup,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const UserDetails = () => {
  let history = useHistory();
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Personal Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>First Name</label>
                      <Form.Control
                        placeholder="Enter First Name"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="4">
                    <Form.Group>
                      <label>Middle Name</label>
                      <Form.Control
                        placeholder="Enter Middle Name"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Last Name</label>
                      <Form.Control
                        placeholder="Enter Last Name"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Date of Birth</label>
                      <Form.Control type="date"></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="4">
                    <Form.Group>
                      <label>Place of Birth</label>
                      <Form.Control
                        placeholder="Enter Place of Birth"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Nationality</label>
                      <Form.Control
                        placeholder="Enter Nationality"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Other Personal Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Income Proof Type</label>
                      <Form.Control
                        placeholder="Enter Income Proof Type"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="4">
                    <Form.Group>
                      <label>Income Proof Number</label>
                      <Form.Control
                        placeholder="Enter Income Proof Number"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Address Proof Type</label>
                      <Form.Control
                        placeholder="Enter Last Name"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="px-1" md="4">
                    <Form.Group>
                      <label>Address Proof Number</label>
                      <Form.Control
                        placeholder="Enter Address Proof Number"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Gender</label>
                      <Form.Control
                        placeholder="Enter Gender"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Contact Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Mobile Number</label>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>+91</InputGroup.Text>
                        <Form.Control placeholder="Enter Mobile Number" />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Email ID</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          placeholder="Enter Email ID"
                          type="text"
                        ></Form.Control>
                        <Button variant="secondary">Verify</Button>
                        <p style={{ fontSize: "11px", color: "red" }}>
                          Click on verify to receive on OTP to validate your
                          email address.
                        </p>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Address Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Address Line 1</label>
                      <Form.Control
                        placeholder="Enter Address Line 1"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="4">
                    <Form.Group>
                      <label>Address Line 2</label>
                      <Form.Control
                        placeholder="Enter Address Line 2"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Address Line 3</label>
                      <Form.Control
                        placeholder="Enter Address Line 3"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="px-1" md="4">
                    <Form.Group>
                      <label>City</label>
                      <Form.Control
                        placeholder="Enter City"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Place</label>
                      <Form.Control
                        placeholder="Enter Gender"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Zip Code</label>
                      <Form.Control
                        placeholder="Enter Zip Code"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <Button className="btn-fill pull-right" variant="secondary">
            Cancel
          </Button>
          <Button
            variant="success"
            className="btn-fill pull-right"
            onClick={() => {
              history.push("/admin/employmentFinancialDetails");
            }}
          >
            Confirm & Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
