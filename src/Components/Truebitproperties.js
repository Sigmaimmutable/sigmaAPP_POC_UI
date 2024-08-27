import { Button, Card, Col, Dropdown, Form, InputGroup, Row, Table, Badge, Modal, Toast } from "react-bootstrap";
import Eye from '../asserts/images/eye-icon.svg'
import SiteLogo from '../asserts/images/site-logo-xxl.svg'
import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { fetchSigmadocdetails, getNFTProp, getTennantId, handleWriteToFile, fetchTaskStatus } from '../apifunction';
import CopyIcon from '../asserts/images/copy-icon.svg'
import { DataContext } from "../App";
import { ToastContainer, Zoom, Bounce, toast } from 'react-toastify';
import Check from '../asserts/images/check_icon.svg';
import ButtonLoad from 'react-bootstrap-button-loader';
import { ethers } from "ethers";
import { contractAddress, contractABI } from './ContractABI';

const Truebitdetails = (props) => {
    const location = useLocation();
    const { sigmaId } = useParams();
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const [loaderDownload, setLoaderDownload] = useState(false);
    const handleShowLoadDownload = () => setLoaderDownload(true);
    const handleHideLoadDownload = () => setLoaderDownload(false);
    const [documentDetails, setDocumentDetails] = useState(null);
    const [nftproperties, setNftprop] = useState([]);
    const [nftdetails, setNftdetails] = useState([]);
    const [taskStatus, setTaskStatus] = useState(null);
    const [retries, setRetries] = useState(0);
    const [search, setSearch] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    const executionId = searchParams.get('executionId');
    const [transcriptDetails, setTranscriptDetails] = useState(null);

    console.log("Execution ID:", executionId);

    useEffect(() => {
      let interval;
      const maxRetries = 10;
  
      if (executionId && retries < maxRetries) {
          const fetchStatus = async () => {
              const details = await fetchTaskStatus(executionId);
              setTranscriptDetails(details);
              console.log("Task status:", details);
          };
          fetchStatus();
      }
      return () => clearTimeout(interval);
  }, [executionId, retries]);
  

    function timestampToEpoch(timestamp) {
        const epochTime = new Date(timestamp).getTime();
        return epochTime;
    }

    const downloaddoc = async () => {
        try {
            handleShowLoadDownload();
            let tnId = await getTennantId();
            console.log("Tennant ID:", tnId);
            console.log("Document Details:", documentDetails?.docChecksum);
            let downloadtapi = await handleWriteToFile(tnId, documentDetails.docChecksum);
            console.log("Download API:", downloadtapi);
            toast.success("Downloaded successfully");
            handleHideLoadDownload();
        } catch (err) {
            toast.error(err);
            handleHideLoadDownload();
        }
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(nftdetails.tokenOwner)
            .then(() => {
                toggleShowA();
                toast.success('Copied successfully!', {
                    position: 'bottom-right',
                    autoClose: 4000,
                    closeButton: false,
                    draggable: false,
                });
            })
            .catch((error) => {
                console.error('Error copying text:', error);
            });
    };

    return (
        <div>
            <ToastContainer position='bottom-right' draggable={false} transition={Zoom} autoClose={4000} closeOnClick={false} />
            <div className="mb-20">
                <Link to="/document-details" className="d-inline-block btn-back align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    Back to Document List
                </Link>
            </div>
            <Row className="mb-2">
                <Col md={6} xl={4} xxl={3}>
                    <h4 className="page-title mb-0">Truebit Execution Details</h4>
                </Col>
            </Row>
            <Row className="mb-20" style={{ minHeight: '40px' }}>
                <Col md={6} className="d-flex align-items-center justify-content-end order-md-1 mb-md-0 mb-2">
                    {/* Document Details Table */}
                </Col>
                <Col md={6}>
                    {search && (
                        <Form>
                            <InputGroup className="form-search shadow">
                                <Button variant="reset" id="button-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
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
            {transcriptDetails ? (
            <div className="mb-20">
                <Row>
                    <Col md={8}>
                        <Table hover responsive>
                            <thead>
                                <tr>
                                    <th>ExecutionId</th>
                                    <td>{transcriptDetails.executionId}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>signerAddress</th>
                                    <td>{transcriptDetails.signerAddress}</td>
                                </tr>
                                <tr>
                                    <th>timestamp</th>
                                    <td>
                                        {transcriptDetails.timestamp
                                            ? new Date(timestampToEpoch(transcriptDetails.timestamp)).toLocaleString()
                                            : 'N/A'}
                                    </td>
                                </tr>
                                <tr>
                                    <th>transcriptHash</th>
                                    <td>{transcriptDetails.transcriptHash}</td>
                                </tr>
                                <tr>
                                    <th>type</th>
                                    <td>{transcriptDetails.type}</td>
                                </tr>
                                <tr>
                                    <th>chainId</th>
                                    <td>{transcriptDetails.chainId}</td>
                                </tr>
                                <tr>
                                    <th>BlockNumber</th>
                                    <td>{transcriptDetails.blockNumber}</td>
                                </tr>
                                <tr>
                                    <th>Network</th>
                                    <td>{transcriptDetails.ledgerName}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        ) : (
            <div>Loading...</div>
        )}
    </div>
);

       
  
}

export default Truebitdetails;
