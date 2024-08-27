import { Button, Card, Col, Dropdown, Form, InputGroup, Row, Table,Badge} from "react-bootstrap";
import Eye from '../asserts/images/eye-icon.svg'
import SiteLogo from '../asserts/images/site-logo-xxl.svg'

import { Link,useParams,useLocation  } from "react-router-dom";
import { useState,useEffect, useContext } from "react";

import { fetchTaskStatus,fetchSigmadocdetails,getNFTProp,getTennantId,getoriginaldocprop,handleWriteToFile,fetchSigmadocdetailst1,fetchSigmadocdetailst2,executeTruebitTask,executeTask} from '../apifunction';
import CopyIcon from '../asserts/images/copy-icon.svg'
import { DataContext } from "../App";
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import Check from '../asserts/images/check_icon.svg';
import ButtonLoad from 'react-bootstrap-button-loader';
import verify from '../asserts/images/compliant.png'
import arrow from '../asserts/images/up-right-arrow.png'
const DocumentVerification= (props)=>{
    const location = useLocation();
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const[loaderDownload, setLoaderDownload] = useState(false);

    const handleShowLoadDownload = () => setLoaderDownload(true);
    const handleHideLoadDownload = () => setLoaderDownload(false);
    //  const allData = location.state.allData;
    // const id = useContext(DataContext);
    const {sigmaId} = useParams();
    const [documentDetails, setDocumentDetails] = useState(null);
    const [vvdocumentDetails, setvvDocumentDetails] = useState(null);
    const [truebitresult, settruebitresult] = useState(null);
    const [nftproperties, setNftprop] = useState([]);
    const [taskStatus, setTaskStatus] = useState(null);
    const [retries, setRetries] = useState(0);
    const [executionId, setExecutionId] = useState(null);

    const [search, setSearch] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    console.log("all",searchParams);
    const id = searchParams.get('id');
    const searchParams1 = new URLSearchParams(location.search);
    const docsid = searchParams1.get('docid');
    console.log("id",id);
    console.log("docsid",docsid);

    



    const getNFTproperties= async() =>{
      const [success, data] = await fetchSigmadocdetails(id);
      setDocumentDetails(data);
      console.log("datasigma",data);
          let tnId = await getTennantId();
          if(data.uuid){
            let tx = await getNFTProp(data.uuid,tnId);
            // console.log("txhistory",tx)
            setNftprop(tx.output);
            console.log("nftprop",tx)
            // console.log("checksumsigma",documentDetails.md5Checksum)
          }
         
      
      
  }
  
  const getvvproperties= async() =>{
    let tnId = await getTennantId();
    const vvdocs = await getoriginaldocprop(tnId,docsid);
    setvvDocumentDetails(vvdocs);
    console.log("vvdocs",vvdocs)
    // console.log("veevachecksum",vvdocumentDetails.md5Checksum)

       
    
    
}
// useEffect(() =>{getvvproperties()},[])
 

  

  
useEffect(() => {
  const fetchData = async () => {
    await getNFTproperties();
    await getvvproperties();
  };
  fetchData();
}, [id, docsid]);

useEffect(() => {
  const truebitcheck = async () => {
    try {
      if (!documentDetails || !vvdocumentDetails) {
        console.log('Document details are not available.');
        return;
      }

      console.log("checkingre", documentDetails.md5Checksum, vvdocumentDetails.md5Checksum);

      const checksum1 = documentDetails.md5Checksum;
      const checksum2 = vvdocumentDetails.md5Checksum;

      console.log("veevachecksum", checksum2);

      const { success, output, executionId } = await executeTask(checksum1, checksum2);
      settruebitresult(output);
      setExecutionId(executionId);

      console.log("Result from executeTruebitTask:", output, executionId);
    } catch (error) {
      console.error('Error in truebitcheck:', error);
    }
  };

  if (documentDetails && vvdocumentDetails) {
    truebitcheck();
  }
}, [documentDetails, vvdocumentDetails]);

useEffect(() => {
  console.log("truebitresult updated:", truebitresult);
}, [truebitresult]);


// useEffect(() => {
//   let interval;
//   const maxRetries = 10; // Set a limit for retries

//   if (executionId && retries < maxRetries) {
//     const fetchStatus = async () => {
//       const { success, data } = await fetchTaskStatus(executionId);
//       setTaskStatus(data);
//       console.log("Task status:", data);
//       if (data.status === 'Indeterminate') {
//         setRetries(retries + 1);
//         interval = setTimeout(fetchStatus, 5000); // Poll every 5 seconds
//       }
//     };
//     fetchStatus();
//   }
//   return () => clearTimeout(interval); // Cleanup interval on unmount or executionId change
// }, [executionId, retries]);
 
 
   
    function timestampToEpoch(timestamp) {
      const epochTime = new Date(timestamp).getTime() ; // Divide by 1000 to convert to seconds
      return epochTime;
    }
    const downloaddoc = async () => {
      try{
        handleShowLoadDownload();
          let tnId = await getTennantId();
          // let [value, data] = await userDetailWithEmail(localStorage.getItem("UserID"));
          // console.log("app.js role", data.roleType);
          // console.log("hoursvalue1", milliseconds);
          let downloadtapi=await handleWriteToFile(tnId,documentDetails.docChecksum);    
                  
          console.log("recheduldownloadtapiedtime",downloadtapi);
          // console.log("hoursvalue2", milliseconds);
          
          // let Jobrecheduleruser=await jobschedulardetailpost();    
          // console.log("Jobrecheduleruser",Jobrecheduleruser);
          toast.success("Downloaded  successfully");
          // await ticketTableFetch();
          handleHideLoadDownload();
      
        
      }catch(err){
          toast.error(err);
          handleHideLoadDownload();
      }
      }
    

      return ( 
        <div>
                       <ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/>

            <div className="mb-20">
                <Link to="/document-details" className="d-inline-block btn-back align-items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    Back to Document List
                </Link>
            </div>
            <Row className="mb-2">
                <Col md={6} xl={4} xxl={3}>
                    <h4 className="page-title mb-0">Document Verification</h4>
                </Col>
            </Row>

            <Row className="mb-20" style={{minHeight: '40px'}}>
                <Col md={6} className="d-flex align-items-center justify-content-end order-md-1 mb-md-0 mb-2">
                   
                </Col>
                <Col md={6}>
                    {search && (
                        <Form>
                            <InputGroup className="form-search shadow">
                                <Button variant="reset" id="button-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </Button>
                                <Form.Control
                                    aria-describedby="basic-addon1"
                                    aria-label="Write something to search"
                                    placeholder="Write something to search..."
                                />
                            </InputGroup>
                        </Form>
                    )}
                </Col>
            </Row>
            
            <div className="mb-20">
                <Row>
                   
 {vvdocumentDetails?(<>
                          {vvdocumentDetails.data[0]===""||vvdocumentDetails.data[0]===undefined||vvdocumentDetails.data[0]===null?(<>

                     </>):(<>
                     
                      <Col md={12} className="mb-md-0 mb-4">
                        <Table hover responsive>
                            <thead>
                            <tr>
                
                <th><b>Properties</b></th>
                <td><b>Sigma Docs Properties</b></td>
               <td><b>Veeva Docs Properties</b></td>
               <td><b>Verification Status</b></td>
            
                
            </tr>
            </thead>
            <tbody>
                  <tr>
                
                                    <th>Document Name</th>
                                    <td>{documentDetails?.name__v}</td>
                                   <td>{vvdocumentDetails.data[0]?.name__v}</td>
                                   <td colSpan="4" ><div style={{marginLeft:"40px"}}>
    {documentDetails?.name__v === vvdocumentDetails.data[0]?.name__v ? (
      <Badge bg="success">Pass</Badge>
    ) : (
      <Badge bg="danger">Fail</Badge>
    )}</div>
  </td>
                                </tr>
                            
                         
  <tr>
    <th>Document ID</th>
    <td>{documentDetails?.id}</td>
    <td>{vvdocumentDetails.data[0]?.id}</td>
    <td colSpan="4"><div style={{marginLeft:"40px"}}>
    {parseInt(documentDetails?.id) === parseInt(vvdocumentDetails.data[0]?.id) ? (
      <Badge bg="success">Pass</Badge>
    ) : (
      <Badge bg="danger">Fail</Badge>
    )}</div>
  </td>
  </tr>

  <tr>
    <th>Version ID</th>
    <td>{documentDetails?.version_id}</td>
    <td>{vvdocumentDetails.data[0]?.version_id}</td>
    <td colSpan="4"><div style={{marginLeft:"40px"}}>
    {parseInt(documentDetails?.version_id) === parseInt(vvdocumentDetails.data[0]?.version_id) ? (
      <Badge bg="success">Pass</Badge>
    ) : (
      <Badge bg="danger">Fail</Badge>
    )}</div>
  </td>
  </tr>
  <tr>
    <th>Document Global Id</th>
    <td>{documentDetails?.global_id__sys}</td>
    <td>{vvdocumentDetails.data[0]?.global_id__sys}</td>
    <td colSpan="4"><div style={{marginLeft:"40px"}}>
    {documentDetails?.global_id__sys === vvdocumentDetails.data[0]?.global_id__sys
 ? (
      <Badge bg="success">Pass</Badge>
    ) : (
      <Badge bg="danger">Fail</Badge>
    )}</div>
  </td>
  </tr>
  <tr>
  <th>Document Checksum</th>
  <td>{documentDetails?.md5Checksum}</td>
  <td>{vvdocumentDetails.md5Checksum}</td>
  <td colSpan="4">
    <div style={{ marginLeft: "40px" }}>
      {truebitresult !== null ? (
        truebitresult === 'true' ? (
          <Badge bg="success">Pass</Badge>
        ) : (
          <Badge bg="danger">Fail</Badge>
        )
      ) : (
        <Badge bg="warning">Pending</Badge>
      )}
      <Link to={{ pathname: "/truebit-properties", search: `?executionId=${executionId}` }}>
        <img src={arrow} style={{ fillColor: "#0000FF" }} alt="arrow" />
      </Link>
    </div>
  </td>
</tr>
  <tr>
    <th>File Modified Date</th>
    <td>{new Date(timestampToEpoch(documentDetails?.file_modified_date__v)).toLocaleString()}</td>
    <td>{new Date(timestampToEpoch(vvdocumentDetails.data[0]?.file_modified_date__v)).toLocaleString()}</td>
    <td colSpan="4"><div style={{marginLeft:"40px"}}>
    {documentDetails?.file_modified_date__v === vvdocumentDetails.data[0]?.file_modified_date__v
 ? (
      <Badge bg="success">Pass</Badge>
    ) : (
      <Badge bg="danger">Fail</Badge>
    )}</div>
  </td>
  </tr>
  <tr>
    <th>File Created Date</th>
    <td>{new Date(timestampToEpoch(documentDetails?.file_created_date__v)).toLocaleString()}</td>
    <td>{new Date(timestampToEpoch(vvdocumentDetails.data[0]?.file_created_date__v)).toLocaleString()}</td>
    <td colSpan="4"><div style={{marginLeft:"40px"}}>
    {documentDetails?.file_created_date__v === vvdocumentDetails.data[0]?.file_created_date__v
 ? (
      <Badge bg="success">Pass</Badge>
    ) : (
      <Badge bg="danger">Fail</Badge>
    )}</div>
  </td>
  </tr>
  <tr>
    <th>Document Creation Date</th>
    <td>{new Date(timestampToEpoch(documentDetails?.document_creation_date__v)).toLocaleString()}</td>
    <td>{new Date(timestampToEpoch(vvdocumentDetails.data[0]?.document_creation_date__v)).toLocaleString()}</td>
    <td colSpan="4"><div style={{marginLeft:"40px"}}>
    {documentDetails?.document_creation_date__v === vvdocumentDetails.data[0]?.document_creation_date__v
 ? (
      <Badge bg="success">Pass</Badge>
    ) : (
      <Badge bg="danger">Fail</Badge>
    )}</div>
  </td>
  </tr>
  
  <tr>
    <th>Title</th>
    <td>{documentDetails?.name__v}</td>
    <td>{vvdocumentDetails.data[0]?.name__v}</td>
    <td colSpan="4"><div style={{marginLeft:"40px"}}>
    {documentDetails?.name__v === vvdocumentDetails.data[0]?.name__v
 ? (
      <Badge bg="success">Pass</Badge>
    ) : (
      <Badge bg="danger">Fail</Badge>
    )}</div>
  </td>
  </tr>
 
 
</tbody>
                        </Table>
                    </Col>
                      
                     
                     </>)}
                        
                        
                        
                        
                        </>):(<></>)}
                   
                </Row>
            </div>
            {/* /.mb-20 */}
        </div>
     );
}

export default DocumentVerification;