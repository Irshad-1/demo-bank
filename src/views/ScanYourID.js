import React from 'react'
import ImageCapture from 'react-image-data-capture';
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
const ScanYourID = () => {
    const history = useHistory();
  const [imgSrc, setImgSrc] = React.useState(null);
  const [imgFile, setImgFile] = React.useState(null);
  const onCapture = (imageData) => {
    // read as webP
    setImgSrc(imageData.webP);
    // read as file
    setImgFile(imageData.file);
    // read as blob
    // imageData.blob
  };

  // Use useCallback to avoid unexpected behaviour while rerendering
  const onError = React.useCallback((error) => { console.log(error) }, []);

  // Use useMemo to avoid unexpected behaviour while rerendering
  const config = React.useMemo(() => ({ video: true }), []);
  /*
    { video: true } - Default Camera View
    { video: { facingMode: environment } } - Back Camera
    { video: { facingMode: "user" } } - Front Camera
  */

  // imgFile can be used as a file upload field form submission
  const formData = new FormData();
  formData.append("file", imgFile);

  return (
    <>
    <Row>
      <Col md='2'></Col>
      <Col md='4'>
        <Card style={{height:"300px", border:"2px solid orange"}}>
          <div style={{marginLeft:"15px"}}>
          <div>Capture Pan Card:</div>
          <ImageCapture
            onCapture={onCapture}
            onError={onError}
            width={300}
            userMediaConfig={config}
            
          />
          </div>
        </Card>
      </Col>
      <Col md="4">
        <Card style={{height:"300px", border:"2px solid orange"}}>
        <div style={{marginLeft:"15px"}}>
        <div>Captured Pan Card:</div>
          {imgSrc &&
            <div >
              <img src={imgSrc} alt="captured-img" />
            </div>
          }
        </div>
        </Card>
      </Col>
    </Row>
    <Row>
     
        <Col md='5'>
        </Col>
        <Col md='4'>
        <Button
                className="btn-fill pull-right"
                variant="info"
                onClick={() => {
                  history.push("/admin/scanyouraddress");
                }}
                style={{marginLeft:"28px"}}
              >
                Continue
              </Button>
        </Col>
     
    </Row>



  </>
  )
}

export default ScanYourID