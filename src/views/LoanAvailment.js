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

export const LoanAvailment = () => {
    const history = useHistory();
  return (
    <Container fluid>
      <Row>
        <Col md="3" />
        <Col md="6">
            <Card>
            <Card.Header>
                <Card.Title as="h4">Loan Availment</Card.Title>
              </Card.Header>
              <h3>Tenor</h3>
              <div style={{display:"flex",justifyContent:"space-around"}}>
                
                <Button
                className="btn-fill pull-right"
                variant="dark" style={{paddingLeft:"40px",paddingRight:"40px"}}>
                6 Months
              </Button>
                <Button
                className="btn-fill pull-right"
                variant="primary" style={{paddingLeft:"40px",paddingRight:"40px"}}>
                12 Months
              </Button>
                <Button
                className="btn-fill pull-right"
                variant="dark" style={{paddingLeft:"40px",paddingRight:"40px"}}>
                18 Months
              </Button>
              </div>
              <h3>Loan Amount</h3>
              <div style={{display:"flex",justifyContent:"space-around"}}>
              <Button
                className="btn-fill pull-right"
                variant="dark" style={{paddingLeft:"40px",paddingRight:"40px"}}>
                    15K</Button>
                    <Button
                className="btn-fill pull-right"
                variant="primary" style={{paddingLeft:"40px",paddingRight:"40px"}}>
                    30K</Button>
                    <Button
                className="btn-fill pull-right"
                variant="dark" style={{paddingLeft:"40px",paddingRight:"40px"}}>
                    45K</Button>
                    <Button
                className="btn-fill pull-right"
                variant="dark" style={{paddingLeft:"40px",paddingRight:"40px"}}>
                    60K</Button>
              </div>
              <Card bg="info" style={{border:"1px solid black",padding:"20px",margin:"10px",borderRadius:"20px"}}>
              <Card.Header>
                <Card.Title as="h2">₹ 30,000.00</Card.Title>
              </Card.Header>
              <Card.Body>
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
              </ListGroup>
              
              </Card.Body>
              </Card>
              <Form.Group>
                      <label>Purpose</label>
                      <Form.Control as="select">
                        <option>Purchase of household appliance</option>
                      </Form.Control>
                    </Form.Group>
                    <p style={{ fontSize: "13px",padding:"10px" }}>
                    Your loan proceeds will be credited to the XXXIIIX XIIXIX 
savings account.
                      </p>
            </Card>
            <Button className="btn-fill pull-right" variant="secondary">
            Avail Later
          </Button>
          <Button
            variant="success"
            className="btn-fill pull-right"
            onClick={() => {
              history.push("/admin/loanSummary");
            }}
          >
            Avail Now
          </Button>
        </Col>
        <Col md="3"/>
        </Row>
        </Container>
  )
}
