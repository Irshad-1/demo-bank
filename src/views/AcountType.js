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

const AcountType = () => {
    const history = useHistory();
    const findOne = () => {
        console.log("saving and loan Account")
    }
  return (
    <div>
        
         <>
      <Container fluid>
        <Row>
        <Col md="12">
         <h4 style={{fontWeight:600}}> What would you like to open?</h4>
         </Col>
         <Col md="2">
          
         </Col>

          <Col md="4" >
            <Card className='card-user' onClick={findOne} style={{backgroundColor:"yellowGreen", color:"white"}}>
                <br></br>
             <Card.Title as="h4">&nbsp;&nbsp; Saving Account</Card.Title>
              
                  <p>&nbsp; &nbsp; Bank hasbeen this convenient</p>
                <div>                  
                  <ol>
                   <ul>
                    <li><p>Easy and fast account opening</p></li>
                    <li><p>No initial deposit require</p></li>
                    <li><p>No maintaining balance</p></li>
                    </ul>  
                  </ol>
                 
                </div>
                <p>&nbsp; &nbsp; Intrested in growing your money?</p>
                <div>  
                <ol>
                 <ul>
                    <p>Sed at diam tempor massa digissim vesti bulum. Integer dui nisi, euismod a ultricsa, eleifend eu nunc. Morbi ruturm arcu vitae feugiat euismod. Phasellus pharetra risus emmper tellus tincidunt, vel rutrum elit sodales</p>
                 </ul>
                    </ol>                
                 
                 
                </div>
             
            </Card>
          </Col> 
          <Col md="4">
            <Card className="card-user" onClick={findOne} style={{backgroundColor:"skyBlue", color:"white"}}>
                <br></br>
            <Card.Title as="h4">&nbsp;&nbsp; Loan Account</Card.Title>
              
              <p>&nbsp; &nbsp; Bank hasbeen this convenient</p>
            <div >                  
              <ol>
               <ul>
                <li><p>Easy and fast account opening</p></li>
                <li><p>No initial deposit require</p></li>
                <li><p>No maintaining balance</p></li>
                </ul>  
              </ol>
             
            </div>
            <p>&nbsp; &nbsp; Intrested in growing your money?</p>
            <div>  
            <ol>
             <ul>
                <p>Sed at diam tempor massa digissim vesti bulum. Integer dui nisi, euismod a ultricsa, eleifend eu nunc. Morbi ruturm arcu vitae feugiat euismod. Phasellus pharetra risus emmper tellus tincidunt, vel rutrum elit sodales</p>
             </ul>
                </ol>                
             
             
            </div>
            
            </Card>
            
          </Col> 

          <Col md="5">

          </Col>
          <Col >
          <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={() => {
                      history.push("/admin/userverification");
                    }}
                  >
                  &nbsp;   Apply Now &nbsp;  &nbsp; 
                  </Button>
            </Col> 
        </Row>
        
      </Container>
    </>
    </div>
    
  )
}

export default AcountType