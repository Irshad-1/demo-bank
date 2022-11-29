import React from 'react';
import { useHistory } from 'react-router';
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

const TermsConditions = () => {
  const history = useHistory();
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">General terms & conditions</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <ol>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam et dolor tempor, ornare felis sit amet, ultricies ligula.
                      ras feugiat mi at arcu consectetur, tincidunt facilisis neque
                      auctor. Cras et euismod quam. Fusce at lacus eget tellus
                      efficitur convallis. </p></li>
                    <li>
                      <p>
                        Nulla eget placerat lacus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Curabitur et placerat dolor.
                        Nam sodales neque sed eros sodales lobortis. Ut vehicula
                        nulla nec lectus bibendum volutpat. Nam porta ultricies.
                      </p></li>
                    <li>
                      <p>
                        Donec nisi massa, efficitur et felis quis, aliquet luctus sapien.
                        Praesent in ligula nec metus condimentum feugiat nec eu
                        purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                      </p></li><li>
                      <p>
                        Sed vel purus sit amet ex tincidunt ornare. Cras dolor dui,
                        egestas non arcu sed, elemen tum dignissim elit. Vivamus
                        vel ex euismod, porta magna ma lesuada, dictum eros.
                        Proin sed ligula ac eros pharetra ferme ntum id sapien.
                      </p></li>
                    <li>
                      <p>
                        Maecenas ornare, dui et dictum fermentum, purus ex conseq
                        uat elit, eget iaculis felis sem pharetra diam.</p></li>
                  </ol>
                  <br></br>
                  <Col md="12">
                    {/* <Col md="8">
                    </Col> */}
                    <Col md="12" >
                      <span><Form.Check /></span>
                      <label>By checking this box, I agree to receive promotional &
                        marketing content from DEMO Bank</label>
                    </Col>

                  </Col>
                  <Card.Header>
                <Card.Title as="h4">General </Card.Title>
              </Card.Header>
                  <br></br>
                  <ol>
                    <li>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam et dolor tempor, ornare felis sit amet, ultricies ligula.
                        ras feugiat mi at arcu consectetur, tincidunt facilisis neque
                        auctor. Cras et euismod quam. Fusce at lacus eget tellus
                        efficitur convallis. </p></li>
                    <li>
                      <p>
                        Nulla eget placerat lacus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Curabitur et placerat dolor.
                        Nam sodales neque sed eros sodales lobortis. Ut vehicula
                        nulla nec lectus bibendum volutpat. Nam porta ultricies.
                      </p>
                    </li>

                  </ol>
                  <br></br>
                  <Col md="12">
                    {/* <Col md="8">
                    </Col> */}
                    <Col md="12" >
                      <span><Form.Check /></span>
                      <label>By checking this box, I agree to receive promotional &
                        marketing content from DEMO Bank</label>
                    </Col>

                  </Col>

                  <br></br>

                  <Button
                    className="btn-fill pull-right"
                  // type="submit"
                  // variant="info"
                  // style={{backgroundColor:"green", border:"green"}}
                  onClick={()=> history.push("/admin/documentation")}
                  >
                    Agree & Continue
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </Container>
    </>
  )
}

export default TermsConditions