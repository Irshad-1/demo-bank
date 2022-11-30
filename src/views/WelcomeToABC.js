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

export const WelcomeToABC = () => {
  const history = useHistory();

  return (
    <div>
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="card-user">
                <div className="card-image"></div>
                <Card.Body>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="intimage"
                        className="avatar border-gray"
                        src={require("../assets/img/int.jpg")}
                      />

                      <h1 className="title">Welcome to Demo Bank</h1>
                    </a>
                    <h4 style={{ width: "60%", margin: "40px auto" }}>
                      Thank you for accepting the offer. Avail of you loan now.
                      but first you need to set your password and passcode.
                    </h4>
                  </div>
                </Card.Body>
                <br></br>
                <br></br>

                <div className="button-container mr-auto ml-auto">
                  <Button
                    className="btn-fill pull-right"
                    variant="success"
                    onClick={() => {
                      history.push("/admin/setPassword");
                    }}
                  >
                    Agree & Continue
                  </Button>
                </div>
                <br></br>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};
