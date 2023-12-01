import React, { useState } from 'react';
import { Form, Col, Row, Button, Alert,Card } from 'react-bootstrap';
import Layout from "./Snippets/Layout";
import { singleFileUpload } from '../apifunction';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import ButtonLoad from 'react-bootstrap-button-loader';

function DocUpload(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [theme, setThemeColor] = useState('');
  const[loaderVerify, setLoaderVerify] = useState(false);
  const handleShowLoadVerify = () => setLoaderVerify(true);
  const handleHideLoadVerify = () => setLoaderVerify(false);

  const setTheme = (e) => {
    setThemeColor(e);
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    let file1 = e.target.files[0];
    console.log(file1.name)
    
  };

  // 
  const handleUpload = async () => {
    try {
      handleShowLoadVerify();
      console.log("before");
       await sleep(5*1000);
      console.log("after");
      let email = localStorage.getItem('UserID');
  
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);
  
        const reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
  
        reader.onload = async (event) => {
          const binaryData = event.target.result;
          console.log('binary File:', binaryData, selectedFile.name);
  
          const responseAPI = await singleFileUpload(
            binaryData,
            `543609ec-58ba-4f50-9757-aaf149e5f187`,
            `${email}`,
            `${selectedFile.name}`
          );
  
          // You can implement additional logic based on the response
          if (responseAPI === false) {
            toast.info('Please wait, document upload in progress...');
            // Use setTimeout directly for the delay
            setTimeout(() => {
              // Additional logic if needed after the delay
            }, 120 * 1000);
            handleHideLoadVerify();
          } else {
            console.log('Selected File:', responseAPI);
            toast.success('File uploaded successfully');
          
              handleHideLoadVerify();
      
          }
        };
      } else {
        alert('Please select a file before uploading.');
        handleHideLoadVerify();
      }

    } catch (e) {
      console.log('error', e);
      handleHideLoadVerify();
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
                <br/><br/>
                <Row>
                    <Col md={6} xl={4} xxl={3}>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Select a File:</Form.Label>
                        <Form.Control type="file" onChange={handleFileChange} />
                        </Form.Group>
                        <br/>
                        <ButtonLoad  variant="dark" className="btn-button" loading={loaderVerify} onClick={()=>{handleUpload()}}>
                         Upload
                        </ButtonLoad>
                     </Form>
                    </Col>  
                </Row>
    
      
    </div>
    </Layout>
  );
}

export default DocUpload;
