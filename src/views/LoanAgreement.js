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
                        A Loan Agreement, also known as a term loan, demand
                        loan, or a loan contract, is a contract that documents a
                        financial agreement between two parties, where one is
                        the lender and the other is the borrower.
                      </p>
                    </li>
                    <li>
                      <p>
                        This contract specifies the amount of the loan, any
                        interest charges, the repayment plan, and payment dates.
                        A written contract gives both the borrower and lender a
                        clear outline of the terms of the loan.
                      </p>
                    </li>
                    <li>
                      <p>
                        If the borrower dies before paying off the loan,
                        authorities will use their assets to pay the remainder
                        of the debt.If there is a co-signer, the responsibility
                        for the debt falls to them.
                      </p>
                    </li>
                    <li>
                      <p>
                        The borrower may secure the loan with collateral such as
                        a vehicle, equipment, or jewellery. In this case, the
                        lender may seize the collateral if the borrower cannot
                        repay the full loan amount. The lender may also require
                        the borrower to obtain insurance if using the loan to
                        buy a vehicle.
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
