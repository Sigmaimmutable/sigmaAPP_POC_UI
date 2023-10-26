import React, { useState } from 'react';
import { Form, Col, Row, Button, Alert,Card } from 'react-bootstrap';
import Layout from "./Snippets/Layout";
import { singleFileUpload } from '../apifunction';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';

function DocUpload(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [theme, setThemeColor] = useState('');

  const setTheme = (e) => {
    setThemeColor(e);
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    let file1 = e.target.files[0];
    console.log(file1.name)
    
  };

  const handleUpload = async() => {
    let email=localStorage.getItem('UserID')
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      // let binaryData = null;
      // Convert the file to binary data
      const reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onload = async (event) => {
        const binaryData = event.target.result;

        // // Send the binary data to the backend
        // axios.post(`/v1/uploadsigmafieldconfig/${tid}/${mail}`, binaryData)
        //   .then((response) => {
        //     // Handle the response from the backend, e.g., show a success message.
        //   })
        //   .catch((error) => {
        //     // Handle any errors, e.g., show an error message.
        //   });
        console.log('binary File:', binaryData,selectedFile.name);
        const responseAPI = await singleFileUpload(binaryData,`543609ec-58ba-4f50-9757-aaf149e5f187`,`${email}`,`${selectedFile.name}`)
      // You can implement the file upload logic here.
      console.log('Selected File:', responseAPI);
      toast.success("File uploaded Successfully");
      };
      
      // Add your code to upload the file to a server or perform any desired actions.
    } else {
      alert('Please select a file before uploading.');
    }
  };

  return (
    <Layout getThemeMode={(e) => setTheme(e)} roleType = {props.roleType} getIProfile = {props.getIProfile}>
    <div className="container-fluid">
    <ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/>
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
