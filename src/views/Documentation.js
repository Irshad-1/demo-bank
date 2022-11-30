import React from 'react'
import { useHistory } from 'react-router';
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
const Documentation = () => {
    const history = useHistory();
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="2"></Col>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Let us get to know you
                                    more by completing
                                    the next steps:</Card.Title>

                            </Card.Header>
                            <Card.Body>
                                <Form>


                                    <Button
                                        className="btn-fill "
                                        variant="info"
                                        style={{ width: "640px" }}
                                        onClick={()=> history.push("/admin/scanyouid")}
                                    >

                                        <h4>Scan you ID</h4>

                                        <p>Nam et dolor tempor ametla.</p>

                                    </Button>
                                    <br></br>
                                    <br></br>
                                    <Button
                                        className="btn-fill "
                                        variant="info"
                                        style={{ width: "640px", backgroundColor: "skyBlue", border: "skyBlue" }}
                                        onClick={()=> history.push("/admin/imagedocumentation")}
                                    >


                                        <h4>Take your selfie</h4>

                                        <p>Nam et dolor tempor ametla.</p>

                                    </Button>
                                    <br></br>
                                    <br></br>
                                    <Button
                                        className="btn-fill "
                                        variant="info"
                                        style={{ width: "640px", backgroundColor: "yellowGreen", border: "yellowGreen" }}
                                        onClick={()=> history.push("/admin/user")}
                                    >

                                        <h4>Fillout details</h4>

                                        <p>Nam et dolor tempor ametla.</p>

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

export default Documentation