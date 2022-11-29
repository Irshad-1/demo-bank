import React from 'react'
import { useHistory } from 'react-router-dom';
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
  
const UserVerification = () => {
  const history = useHistory();
  return (
    <>
    <Container fluid>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Enter mobile number</Card.Title>
              <img
                      alt="intimage"
                  
                      src={require("../assets/img/Mobilenumber.jpg")}
                    />
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                
                    <h5 className="text-success">&nbsp;&nbsp;&nbsp; May we know your mobile Number</h5>
                    
                  <Col className="pl-1" md="12">
                    <Form.Group>
                      <label htmlFor="exampleInputEmail1">
                       Mobile Number
                      </label>
                      <Form.Control
                        placeholder="Enter Mobile Number"
                        type="number"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
           
              {/* <br></br>
              <br></br> */}
              
                
                <Button
                  className="btn-fill pull-right"
                  variant="info"
                  onClick={() => {
                    history.push("/admin/otpverification");
                  }}
                >
                  Confirm
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

export default UserVerification