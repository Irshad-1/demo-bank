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

const imageCaptureDocumentation = () => {
    const history = useHistory();
    const findOne = () => {
        console.log("saving and loan Account")
    }
  return (
    <>
    <Container fluid>
      <Row>
      <Col md="12">
       <h4 style={{fontWeight:600}}>Now it’s time for a selfie</h4>
       </Col>
       <Col md="3">
        
       </Col>

        <Col md="6" >
          <Card className='card-user' onClick={findOne} style={{backgroundColor:"orange", color:"white"}}>
          <img
                      alt="intimage"
                  
                      src={require("../assets/img/selfie2.png")}
                    />
              <br></br>
           <Card.Title as="h4">&nbsp;&nbsp; Saving Account</Card.Title>
            
                <p>&nbsp; &nbsp; Bank hasbeen this convenient</p>
              <div>                  
                <ol>
                 <ul>
                  <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nam et dolor tempor, ornare felis sit amet, ultricies ligula.</p></li>
 
<li><p>Ras feugiat mi at arcu consectetur, tincidunt facilisis neque 
auctor. Cras et euismod quam. Fusce at lacus eget tellus 
efficitur convallis. </p></li>

<li><p>Nulla eget placerat lacus. Interdum et malesuada fames ac 
ante ipsum primis in faucibus. </p></li>

<li><p>Curabitur et placerat dolor. Nam sodales neque sed eros sodales lobortis.</p></li>

<li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nam et dolor tempor, ornare felis sit amet, ultricies ligula.</p></li>
 
<li><p>Ras feugiat mi at arcu consectetur, tincidunt facilisis neque 
auctor. Cras et euismod quam. Fusce at lacus eget tellus 
efficitur convallis. </p></li>


                 
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
                    history.push("/admin/imagecapture");
                  }}
                  style={{marginLeft:"-20px"}}
                >
                  Continue with Selfie Scan  
                </Button>
          </Col> 
      </Row>
      
    </Container>
  </>
  )
}

export default imageCaptureDocumentation