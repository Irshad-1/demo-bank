import React from 'react'
import Swal from 'sweetalert2'
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


const ScanYouId = () => {
    const history = useHistory();
    
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="2"></Col>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4" style={{ fontWeight: "700" }} >Upload Your Pan card</Card.Title>
                                <p className='text-success'>This Pan Card Identification needs for you ID verification<br></br>
                                    Your Pan Card details will be safe</p>
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
                                                    src={require("../assets/img/panCard.png")}
                                                />
                                                <Card.Title as="h4">Pan card</Card.Title>

                                            </Card.Header>

                                        </Card></Col>

                                    </Row>


                                    <Button
                                        className="btn-fill "
                                        variant="info"
                                        style={{ width: "200px" }}
                                        onClick={()=> history.push("/admin/scanyourid")}
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

export default ScanYouId