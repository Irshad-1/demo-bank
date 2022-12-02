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

export const EmploymentFinancialDetails = () => {
  const history = useHistory();
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Financial Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Purpose for Opening Account</label>
                      <Form.Control as="select">
                        <option>Demo Text</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Source of Funds</label>
                      <Form.Control as="select">
                        <option>Employment</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Monthly Income</label>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>&#8377;</InputGroup.Text>
                        <Form.Control placeholder="Enter Monthly Income" />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Choose Salary Credit Date</label>
                      <Form.Control as="select">
                        <option>Within 5th</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Employment Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Employment Type</label>
                      <Form.Control as="select">
                        <option>Employed</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Employment Status</label>
                      <Form.Control as="select">
                        <option>Probationary</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Nature of work</label>
                      <Form.Control as="select">
                        <option>Agriculture, Fishing</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Employer Name</label>
                      <Form.Control
                        placeholder="Enter Employer Name"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Employer Address</label>
                      <Form.Control
                        placeholder="Enter Employer Address"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Industry Type</label>
                      <Form.Control as="select">
                        <option>Aviation / Airline</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Position</label>
                      <Form.Control as="select">
                        <option>Demo</option>
                      </Form.Control>
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
              history.push("/admin/loanDetails");
            }}
          >
            Confirm & Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
