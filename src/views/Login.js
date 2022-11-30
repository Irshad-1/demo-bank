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
  InputGroup,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";


export const Login = () => {
  const history = useHistory();

  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Container fluid>
      <Row>
        <Col md="3" />
        <Col md="6">
          <Card className="card-user">
            <Card.Header>
              <Card.Title as="h2">Login</Card.Title>
            </Card.Header>

            <Card.Body>
              <div className="author">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="intimage"
                    className="avatar border-gray"
                    src={require("../assets/img/int.jpg")}
                  />

                  <h2 className="title">Welcome to Demo Bank</h2>
                </a>
                <h4 style={{ width: "80%", margin: "40px auto" }}>
                  Thank you for accepting the offer. Avail of you loan now. but
                  first you need to set your password and passcode.
                </h4>
              </div>
            </Card.Body>
            <br></br>
            <br></br>
            <Form>
              <Row>
                <Col style={{ margin: "auto" }} className="pr-1" md="8">
                  <Form.Group>
                    <label>Mobile Number</label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>+91</InputGroup.Text>
                      <Form.Control
                        defaultValue="9331982298"
                        placeholder="Enter Mobile Number"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col style={{ margin: "auto" }} className="pr-1" md="8">
                  <Form.Group>
                    <label>Password</label>
                    <InputGroup>
                      <Form.Control
                        defaultValue="demo@gmail.com"
                        placeholder="Enter Email ID"
                        type={showPassword ? "text" : "password"}
                      ></Form.Control>
                      <Button
                        variant="secondary"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? "Hide.." : "Show"}
                      </Button>
                    </InputGroup>
                    <a
                      style={{
                        fontSize: "14px",
                        textAlign: "right",
                        display: "block",
                        color: "#577B63",
                        margin: "15px",
                        cursor:"pointer"
                      }}
                      
                      onClick={() => {
                        history.push("/admin/forgotPassword");
                      }}
                    >
                      Forgot your password?
                    </a>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <div className="button-container mr-auto ml-auto">
              <Button
                className="btn-fill pull-right"
                variant="success"
                onClick={() => {
                  history.push("/admin/loanAvailment");
                }}
              >
                Agree & Continue
              </Button>
            </div>
            <br></br>
          </Card>
        </Col>
        <Col md="3" />
      </Row>
    </Container>
  );
};
