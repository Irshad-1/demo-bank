import React from 'react';
import {
    Card,
    Container,
    Row,
    Form,
    Col,
    Button,
    ListGroup,
  } from "react-bootstrap";
  import { useHistory } from "react-router-dom";

export const LoanSummary = () => {
    const history = useHistory();
  return (
    <Container fluid>
      <Row>
        <Col md="3" />
        <Col md="6">
          <h3 style={{ textAlign: "center" }}>Congratulations!</h3>
          <p style={{ textAlign: "center" }}>
            Your personal loan has been approved. See approved terms below.
          </p>
          <Card bg="success">
            <Card.Body>
              <Card.Title>
                <h3 style={{ color: "white" }}>Personal Loan Details</h3>
              </Card.Title>
              <ListGroup>
                <ListGroup.Item>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4 style={{ fontWeight: "bold", margin: "0px" }}>
                      Loan Amount
                    </h4>
                    <h4 style={{ fontWeight: "bold", margin: "0px" }}>
                      ₹ 75,000.00
                    </h4>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4
                      style={{
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      Loan Tenure
                    </h4>
                    <h4
                      style={{
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      36 Months
                    </h4>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4
                      style={{
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      Interest Rate
                    </h4>
                    <h4
                      style={{
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      1.89%
                    </h4>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4
                      style={{
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      Fees & Charges 
                    </h4>
                    <h4
                      style={{
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                     ₹ 300.00
                    </h4>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4
                      style={{
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      Net Proceeds
                    </h4>
                    <h4
                      style={{
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                    ₹ 29,700.00
                    </h4>
                  </div>
                </ListGroup.Item>
              </ListGroup>
              
            </Card.Body>
          </Card>
          <Card bg="primary">
            <Card.Body>
              <Card.Title>
                <h3 style={{ color: "white" }}>Installment Details</h3>
              </Card.Title>
              <ListGroup>
                <ListGroup.Item>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4 style={{ fontWeight: "bold", margin: "0px" }}>
                    Installment
                    </h4>
                    <h4 style={{ fontWeight: "bold", margin: "0px" }}>
                    ₹ 1,400.33
                    </h4>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4
                      style={{
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                    Due Date
                    </h4>
                    <h4
                      style={{
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      31.12.2022
                    </h4>
                  </div>
                </ListGroup.Item>
              </ListGroup>
              
            </Card.Body>
          </Card>
          <Button className="btn-fill pull-right" variant="secondary">
            Cancel
          </Button>
          <Button
            variant="success"
            className="btn-fill pull-right"
            onClick={() => {
              history.push("/admin/authentication");
            }}
          >
            Confirm
          </Button>
        </Col>
        <Col md="3" />
      </Row>
    </Container>
  )
}
