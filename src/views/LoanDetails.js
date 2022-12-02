import React from "react";
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

export const LoanDetails = () => {
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
          <Card bg="info">
            <Card.Body>
              <Card.Title>
                <h3 style={{ color: "white" }}>Personal Loan Details</h3>
              </Card.Title>
              <Card.Text>
                Get the funds you need - as you need it, when you need it.
              </Card.Text>
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
                      Installment
                    </h4>
                    <h4
                      style={{
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      ₹ 2,555.85
                    </h4>
                  </div>
                </ListGroup.Item>
              </ListGroup>
              <Card.Text>
                Customers can check the status of their personal loan
                application by themselves and get a better understanding of when
                to expect the money
              </Card.Text>
            </Card.Body>
          </Card>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              style={{ width: "80%" }}
              className="btn-fill pull-right"
              variant="success"
              onClick={() => {
                history.push("/admin/loanAgreement");
              }}
            >
              Loan Agreement
            </Button>
          </div>
        </Col>
        <Col md="3" />
      </Row>
    </Container>
  );
};
