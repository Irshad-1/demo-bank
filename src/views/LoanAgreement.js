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
import SignatureCanvas from "react-signature-canvas";

const LoanAgreement = () => {
  const history = useHistory();
  const sigPad = React.useRef(null);
  const [state, setState] = React.useState(false);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Loan Agreement</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <ol>
                    <li>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam et dolor tempor, ornare felis sit amet, ultricies
                        ligula. ras feugiat mi at arcu consectetur, tincidunt
                        facilisis neque auctor. Cras et euismod quam. Fusce at
                        lacus eget tellus efficitur convallis.{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        Nulla eget placerat lacus. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus. Curabitur et placerat
                        dolor. Nam sodales neque sed eros sodales lobortis. Ut
                        vehicula nulla nec lectus bibendum volutpat. Nam porta
                        ultricies.
                      </p>
                    </li>
                    <li>
                      <p>
                        Donec nisi massa, efficitur et felis quis, aliquet
                        luctus sapien. Praesent in ligula nec metus condimentum
                        feugiat nec eu purus. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </li>
                    <li>
                      <p>
                        Maecenas ornare, dui et dictum fermentum, purus ex
                        conseq uat elit, eget iaculis felis sem pharetra diam.
                      </p>
                    </li>
                  </ol>
                  <br></br>
                  <h4>Signature *</h4>
                  <SignatureCanvas
                    penColor="green"
                    ref={sigPad}
                    canvasProps={{
                      width: 500,
                      height: 200,
                      className: "sigCanvas",
                      style: {
                        border: "1px solid black",
                        backgroundColor: "#cccccc",
                        borderRadius: "10px",
                        display: "block",
                        marginBottom: "50px",
                      },
                    }}
                  />
                  <Button
                    onClick={() => {
                      setState((prev) => !prev);
                    }}
                    className={
                      state ? "btn-fill pull-right" : "btn btn-primary"
                    }
                    variant={state && "primary"}
                  >
                    &#10004;
                  </Button>
                  <Button
                    disabled={state}
                    onClick={() => {
                      sigPad.current.clear();
                    }}
                  >
                    &#x2716;
                  </Button>
                  {state && (
                    <Button
                      className="btn-fill pull-right"
                      variant="success"
                      style={{ display: "block", marginTop: "30px" }}
                      onClick={() => {
                        history.push("/admin/welcome");
                      }}
                    >
                      Agree & Continue
                    </Button>
                  )}
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

export default LoanAgreement;
