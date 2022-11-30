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

export const Fatca = () => {
  const history = useHistory();

  const [state, setState] = React.useState("");
  const handleChange = (e) => {
    console.log("Hello");
    setState(e.target.value);
  };
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">FATCA</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="12">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label
                        style={{
                          color: "#0FB8C2",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        I am a U.S. citizen
                      </label>
                      <input
                        type="radio"
                        value="usCitizen"
                        style={{ marginTop: "-6px", marginLeft: "10px" }}
                        checked={state === "usCitizen"}
                        onChange={handleChange}
                      />
                      <label
                        style={{
                          color: "#439ACB",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        I am not a U.S. citizen
                      </label>
                      <input
                        type="radio"
                        value="notUsCitizen"
                        style={{ marginTop: "-6px", marginLeft: "10px" }}
                        checked={state === "notUsCitizen"}
                        onChange={handleChange}
                      />
                      <label
                        style={{
                          color: "#3DB264",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        I am not a U.S. citizen, but I have one of the following
                        U.S.
                      </label>
                      <input
                        type="radio"
                        value="notUsCitizenBut"
                        checked={state === "notUsCitizenBut"}
                        onChange={handleChange}
                        style={{ marginTop: "-6px", marginLeft: "10px" }}
                      />
                    </div>
                    <ul>
                      <li style={{ color: "#3DB264" }}>Birthplace</li>
                      <li style={{ color: "#3DB264" }}>Green card</li>
                      <li style={{ color: "#3DB264" }}>
                        Residence pr P.O. box
                      </li>
                      <li style={{ color: "#3DB264" }}>Telephone mumber</li>
                      <li style={{ color: "#3DB264" }}>
                        Tax Identification Number
                      </li>
                    </ul>
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
              history.push("/admin/relativeOfAbc");
            }}
          >
            Confirm & Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
