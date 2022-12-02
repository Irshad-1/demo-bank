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
  const [checked, setChecked] = React.useState(0)
  const history = useHistory();
  const findOne = () => {
    console.log("saving and loan Account")
  }

  const onCheck = (e) =>{
          if(checked === 0 && e === 1){
            setChecked(true);
          }else if(checked === 0 && e === 2) {
            setChecked(false);
          }else if( e === 2) {
            setChecked(false);
          }else if( e === 1){
            setChecked(true)
          }
  }
  return (
    <div>

      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <h4 style={{ fontWeight: 600 }}> What would you like to open?</h4>
            </Col>
            <Col md="2">

            </Col>

            <Col md="4" >
              <Card className='card-user' onClick={findOne} style={ !checked ? { backgroundColor: "yellowGreen", color: "white"  } : { backgroundColor:"orange", color: "white"}}>
                <br></br>
                <Card.Title as="h4">&nbsp;&nbsp; Saving Account    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <input type="checkbox" style={{ height: "20px", width: "20px" }} checked={checked} onChange={()=> onCheck(1)}/>
                </Card.Title>

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
                      <p>A moody person can be a good lover but not a good investor. There’s nothing like the vices of over investment and under investment</p>
                    </ul>
                  </ol>


                </div>

              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user" onClick={findOne} style={ checked ? { backgroundColor: "skyBlue", color: "white" } : {backgroundColor:"orange", color:"white"}}>
                <br></br>
                <Card.Title as="h4">&nbsp;&nbsp; Loan Account   &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <input type="checkbox" style={{ height: "20px", width: "20px" }} checked={ checked===0 ? checked : !checked} onChange={()=> onCheck(2)}/>
                </Card.Title>

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
                      <p>A moody person can be a good lover but not a good investor. There’s nothing like the vices of over investment and under investment</p>
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
                disabled={checked === 0}
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