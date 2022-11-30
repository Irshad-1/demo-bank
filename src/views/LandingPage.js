import React from 'react'
import { useHistory } from "react-router-dom";
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

const LandingPage = () => {
  const history = useHistory()
  return (
    <div>
         <>
      <Container fluid>
        <Row>
      
          <Col md="12">
            <Card className="card-user">
              <div className="card-image">
               
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="intimage"
                      className="avatar border-gray"
                      src={require("../assets/img/int.jpg")}
                    />
                    
                    
                    <h1 className="title">Demo Bank</h1>
                  </a>
                  <h3 className="description">Experiance</h3>
                </div>
                <h3 className="description text-center">
                  Evaluated Bank  <br></br>
                  
                </h3>
              </Card.Body>
              <br></br>
              <br></br>
              
              
               <div className="button-container mr-auto ml-auto">
               <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={()=>{
                      history.push("/admin/login")
                    }}
                  >
                   Login
                  </Button>
                  &nbsp; &nbsp; &nbsp;
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={() => {
                      history.push("/admin/acountType");
                    }}
                  >
                     Start
                  </Button>
               
              </div>
              <br></br>
            </Card>
          </Col> 
        </Row>
      </Container>
    </>
    </div>
  )
}

export default LandingPage