import React from 'react'
import { useHistory } from 'react-router';
import Swal from 'sweetalert2'
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


const ScanYouaddress = () => {
    const history = useHistory();
    const getDetails = () => {
        Swal.fire({

            imageUrl: 'https://assets-global.website-files.com/5f689f82910c6b4f1ffb855b/613b1f91b195318100f7d27e_aadhar%20card%402x-min.jpg',
            confirmButtonText: "Confirm"
        })
            .then(() =>
               history.push("/admin/documentation")
            )
    }
  return (
    <>
    <Container fluid>
        <Row>
            <Col md="2"></Col>
            <Col md="8">
                <Card>
                    <Card.Header>
                        <Card.Title as="h4" style={{ fontWeight: "700" }} >Choose Address Proof</Card.Title>
                        <p className='text-success'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                            Nam et dolor tempor,ornare felis sit amet, ultricies ligula. </p>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="5"> <Card>
                                    <Card.Header>

                                        <img
                                            alt="intimage"
                                            style={{ width: "150px", height: "100px" }}
                                            src={require("../assets/img/Aadhar.png")}
                                        />
                                        <Card.Title as="h4">Aadhar</Card.Title>

                                    </Card.Header>

                                </Card></Col>
                                <Col md="5"> <Card>
                                    <Card.Header>

                                        <img
                                            alt="intimage"
                                            style={{ width: "150px", height: "100px" }}
                                            src={require("../assets/img/driving licence.png")}
                                        />
                                        <Card.Title as="h4">Driving Licensce</Card.Title>

                                    </Card.Header>

                                </Card></Col>

                            </Row>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="5"> <Card>
                                    <Card.Header>

                                        <img
                                            alt="intimage"
                                            style={{ width: "150px", height: "100px" }}
                                            src={require("../assets/img/passport.png")}
                                        />
                                        <Card.Title as="h4">Passport</Card.Title>

                                    </Card.Header>

                                </Card></Col>
                                <Col md="5"> <Card>
                                    <Card.Header>

                                        <img
                                            alt="intimage"
                                            style={{ width: "150px", height: "100px" }}
                                            src={require("../assets/img/NREGA.png")}
                                        />
                                        <Card.Title as="h4">NREGA</Card.Title>

                                    </Card.Header>

                                </Card></Col>

                            </Row>


                            <Button
                                className="btn-fill "
                                variant="info"
                                style={{ width: "200px" }}
                                onClick={getDetails}
                            >
                                Upload Now
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

export default ScanYouaddress