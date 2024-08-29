import { Button, Card, Col, Dropdown, Form, InputGroup, Row, Table,Badge, Tab, Tabs} from "react-bootstrap";
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
import arrow from '../asserts/images/up-right-arrow.png';
import DocumentCheck from "./DocumentCheck";
import TruebitCheck from './TruebitCheck';

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

    const [selectedTab, setSelectedTab] = useState('Stasis'); // State to track the selected tab

    const handleTabChange = (tabKey) => {
        setSelectedTab(tabKey);
    };
    



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
            <Tabs
                defaultActiveKey="Sigma"
                id="uncontrolled-tab-example"
                className="custom-tabs justify-content-between px-4 px-lg-5"
                onSelect={(eventKey) => handleTabChange(eventKey)}
                >
                <Tab eventKey="Sigma" title="Sigma">
                    <DocumentCheck selectedTab={selectedTab} veevaDetails={vvdocumentDetails} docDetails={documentDetails}/>
                </Tab>
                <Tab eventKey="Truebit" title="Truebit">
                    <TruebitCheck selectedTab={selectedTab}  veevaChechsum={vvdocumentDetails?.md5Checksum} sigmaChecksum={documentDetails?.md5Checksum}/>
                </Tab>
            </Tabs>
        </div>
            
     );
}

export default DocumentVerification;