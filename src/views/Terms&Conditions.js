import React,{useState} from 'react';
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
  const [firstState, setFirstState] = useState(false);
  const [secondState, setSecondState] = useState(false);
  const history = useHistory();
  console.log(firstState,secondState)

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
                    <li><p>A Loan Agreement, also known as a term loan, demand loan, or a loan contract, is a contract that documents a financial agreement between two parties, where one is the lender and the other is the borrower.</p></li>
                    <li>
                      <p>
                      This contract specifies the amount of the loan, any interest charges, the repayment plan, and payment dates.<br></br> 
                      A written contract gives both the borrower and lender a clear outline of the terms of the loan.
                      </p></li>
                    <li>
                      <p>
                      If the borrower dies before paying off the loan, authorities will use their assets to pay the remainder of the debt.<br></br>
                      If there is a co-signer, the responsibility for the debt falls to them.
                      </p></li><li>
                      <p>
                      The borrower may secure the loan with collateral such as a vehicle, equipment, or jewellery.<br></br>
                       In this case, the lender may seize the collateral if the borrower cannot repay the full loan amount.<br></br>
                       The lender may also require the borrower to obtain insurance if using the loan to buy a vehicle.
                      </p></li>
                    <li>
                      <p>
                      The borrower repays the entire loan amount at once (either by a specific date or upon notice to repay).</p></li>
                  </ol>
                  <br></br>
                  <Col md="12">
                    {/* <Col md="8">
                    </Col> */}
                    <Col md="12" >

                      <span><input type="checkbox" value="firstState" onChange={()=> setFirstState((e) => !e)}/> </span>

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
                      <p>This contract specifies the amount of the loan, any interest charges, the repayment plan, and payment dates.<br></br> 
                      A written contract gives both the borrower and lender a clear outline of the terms of the loan.</p></li>
                    <li>
                      <p>
                      The borrower may secure the loan with collateral such as a vehicle, equipment, or jewellery.<br></br>
                       In this case, the lender may seize the collateral if the borrower cannot repay the full loan amount.<br></br>
                       The lender may also require the borrower to obtain insurance if using the loan to buy a vehicle.
                      </p>
                    </li>

                  </ol>
                  <br></br>
                  <Col md="12">
                    {/* <Col md="8">
                    </Col> */}
                    <Col md="12" >

                      <span><input type="checkbox" value="secondState" onChange={()=> setSecondState((e) => !e)}/>  </span> 
                      
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
                  disabled={!firstState && !secondState}
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