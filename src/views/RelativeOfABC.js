import React from "react";
import { Card, Container, Row, Form, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const RelativeOfABC = () => {
  const history = useHistory();

  return (
    <Container fluid>
      <Row>
        <Col md="3" />
        <Col md="6">
          <Card>
            <Card.Img
              style={{ width: "100px", margin: "auto" }}
              src={require("../assets/img/relativeOfAbc.jpg")}
            />
            <Card.Body>
              <Card.Title>
                <h3>
                  Are you a relative of ABC Bank Director, Officer, or
                  Stockholder?
                </h3>
              </Card.Title>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "60px",
                }}
              >
                <Button
                  style={{ width: "40%" }}
                  className="btn-fill pull-right"
                  variant="dark"
                >
                  Yes
                </Button>
                <Button
                  style={{ width: "40%" }}
                  variant="outline-secondary"
                  onClick={() => {
                    history.push("/admin/loanDetails");
                  }}
                >
                  No
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3" />
      </Row>
    </Container>
  );
};
