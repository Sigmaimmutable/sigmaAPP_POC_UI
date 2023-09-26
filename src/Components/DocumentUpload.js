import React, { useState } from 'react';
import { Form, Col, Row, Button, Alert,Card } from 'react-bootstrap';
import Layout from "./Snippets/Layout";

function DocUpload(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [theme, setThemeColor] = useState('');

  const setTheme = (e) => {
    setThemeColor(e);
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can implement the file upload logic here.
      console.log('Selected File:', selectedFile);
      // Add your code to upload the file to a server or perform any desired actions.
    } else {
      alert('Please select a file before uploading.');
    }
  };

  return (
    <Layout getThemeMode={(e) => setTheme(e)} roleType = {props.roleType} getIProfile = {props.getIProfile}>
    <div className="container-fluid">
                <Row className="mb-3">
                    <Col md={6} xl={4} xxl={3}>
                        <h2 className="font-bold">Sigma File Upload</h2>
                        {/* <p>Document Dashboard Summary</p> */}
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xl={4} xxl={3}>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Select a File:</Form.Label>
                        <Form.Control type="file" onChange={handleFileChange} />
                        </Form.Group>
                        <Button variant="dark" onClick={handleUpload}>
                         Upload
                        </Button>
                     </Form>
                    </Col>  
                </Row>
    
      
    </div>
    </Layout>
  );
}

export default DocUpload;
