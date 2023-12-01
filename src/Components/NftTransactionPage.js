import { Badge, Button, Card, Col, ListGroup, Row, Table, Toast, ToastContainer } from "react-bootstrap";
import CopyIcon from '../asserts/images/copy-icon.svg'
import Check from '../asserts/images/check_icon.svg'
import Wallet from '../asserts/images/wallet-icon.svg'
import RestAPI from '../asserts/images/rest_api.svg'
import { useState,useEffect } from "react";
import {OrgAdminmailcheckget2, getTennantId, nodeDetails,createUserVisits,getTxInputBase } from "../apifunction";
import { useLocation, Link } from 'react-router-dom';
import "./NftTransactionPage.css";
import base64 from 'base-64';

function NftTransactionPage({}) {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    const [noteDecodeStatus, setNoteDecodeStatus] = useState(false);
    const [noteDecoded, setNoteDecoded] = useState("");
    const [transInput, setTransInput] = useState([]);
    const location = useLocation();
    const txnHash = location.state?.object;

    console.log("txnHash", txnHash);

    setTimeout(() => {
        setShowA(false)
    }, 1200)
    
    useEffect(() => {
        userdata();
      }, []);
      
      const userdata = async () => {
        let algoAddress = localStorage.getItem("UserID");
        let networkType = "type";
        let walletType = "Admin";
      
        try {
          await createUserVisits(algoAddress, networkType, walletType);
          console.log("Update successful13");
        } catch (error) {
          console.error("Error updating:", error);
        }
      };

      const formatDateTime = (timestamp1) => {
        const timestamp = parseInt(timestamp1) * 1000;
        const dateObj = new Date(timestamp);
        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        };
    
        const formattedDateTime = dateObj.toLocaleString('en-US', options);
        return formattedDateTime;
      };

      const calculateTimeAgo = (timestamp1) => {
        const timestamp = parseInt(timestamp1) * 1000;
        const currentTime = new Date();
        const previousTime = new Date(timestamp);
        const timeDifference = Math.abs(currentTime - previousTime) / 1000; // Convert milliseconds to seconds
    
        if (timeDifference < 60) {
          return 'a few seconds ago';
        } else if (timeDifference < 3600) {
          const minutes = Math.floor(timeDifference / 60);
          return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < 86400) {
          const hours = Math.floor(timeDifference / 3600);
          return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < 2592000) {
          const days = Math.floor(timeDifference / 86400);
          return `${days} day${days !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < 31536000) {
          const months = Math.floor(timeDifference / 2592000);
          return `${months} month${months !== 1 ? 's' : ''} ago`;
        } else {
          const years = Math.floor(timeDifference / 31536000);
          return `${years} year${years !== 1 ? 's' : ''} ago`;
        }
      };

      function handleChange(event) { 
    
        const height = event.target.scrollHeight; 
        const rows = event.target.rows; 
        const rowHeight = 15; 
        const trows = Math.ceil(height / rowHeight) - 1; 
        console.log(height, rows
            , trows); 
        
      }

      const decodeBase64 = async (note) => {
        if (note) {
            try {
                const decoded = base64.decode(note);
                console.log("decoded", decoded);
                setNoteDecoded(decoded);
                setNoteDecodeStatus(true);
            } catch (error) {
                console.error('Error decoding Base64:', error);
            }
        }
    }

    const decodeText = async () => {
        setNoteDecodeStatus(false);
    }

//       const getTranscInputAvalanche = async() => {
//         // Define the API endpoint URL
//     const apiUrl =`https://api.basescan.org/api?module=proxy&action=eth_getTransactionByHash&txhash=${txnHash.hash}&apikey=AHSJCJMCVE468EJBIJ9KC1X4ZR7JVHKJE9`;

//   // Make the GET request to the API
//   axios
//     .get(apiUrl)
//     .then((response) => {
//       // Handle the response data here
//       console.log("Avalanche TxInput",response.data); // This will be the ERC-721 transactions data
//       setTransInput(response.data.result); // Assuming 'result' contains the transaction data
//       console.log("Checking...",transInput.input)
//     })
//     .catch((error) => {
//       // Handle errors
//       console.error('Error fetching data:', error);
//     });
//     }

    // const getTranscInputBase = async() =>{
    //     try{
    //         let [istrue, transactionInput] = await getTxInputBase(txnHash.hash);
    //         console.log("Avalanche TxInput",transactionInput.result);
    //         setTransInput(transactionInput.result);
    //         console.log("Checking...",transInput.input);
    //     }
    //     catch(e){
    //         console.log("Api ERROR:", e);
    //     }
    // }
    // useEffect(() =>{
    //     console.log(txnHash);
    //     txnHash && getTranscInputBase();
    //     console.log("check Input",transInput.input);
    // },[txnHash,transInput])

    return ( 
        <div>
              
            <ToastContainer 
                position={"bottom-end"}
                className="p-3 position-fixed"
                style={{ zIndex: 1 }}>
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Body><div className="d-flex px-2 align-items-center"><img src={CopyIcon} alt="CopyIcon" className="me-2" /> Copied successfully!</div></Toast.Body>
                </Toast>
            </ToastContainer>
            <Row className="mb-20">
                <Col md={6} xl={4} xxl={3}>
                        <Link to="/admin/nft-transactions-report" className="d-inline-block me-auto btn-back align-items-center"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                            Back to NFT Transactions
                        </Link>
                </Col>
            </Row>

            <Row className="gx-3 mb-lg-4 mb-2">
                <Col xs={12} className="mb-3">
                    <div className="info-card d-flex flex-column justify-content-between">
                        <h6 className="d-flex align-items-center">Transaction</h6>
                        <p style={{color: "white"}} className="mb-0 text-break"><a href={`https://algoexplorer.io/tx/${txnHash.id}`} target="_blank"  
                                        style={{color: 'inherit', cursor: 'pointer', }}>{txnHash?.id}</a></p>
                    </div>
                </Col>
            </Row>

            <Row className="gx-xl-5">
                <Col md={12} className="mb-md-0 mb-4">
                    <Card>
                        <Table hover responsive>
                            <tbody>
                           
                                <tr>
                                    <td>Hash</td>
                                    <td className="text-break" title={txnHash? txnHash.id : ''}>{txnHash? txnHash.id : ''}</td>
                                    <td width="50">
                                        <Button variant="reset" onClick={() => {navigator.clipboard.writeText(txnHash.id); toggleShowA();}}>
                                            <img src={CopyIcon} alt="CopyIcon" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Block</td>
                                    <td>{txnHash? txnHash['confirmed-round'] : ''}</td>
                                    <td>
                                        <Button variant="reset" onClick={() => {navigator.clipboard.writeText(txnHash['confirmed-round']); toggleShowA();}}>
                                            <img src={CopyIcon} alt="CopyIcon" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>From</td>
                                    <td><Badge pill bg="secondary" className="text-truncate"><img src={Wallet} alt="Wallet" /> Default | { txnHash ? txnHash.sender : ""}</Badge></td>
                                    <td>
                                        <Button variant="reset" onClick={() => {navigator.clipboard.writeText(txnHash.sender); toggleShowA();}}>
                                            <img src={CopyIcon} alt="CopyIcon" />
                                        </Button>
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td>To</td>
                                    <td><Badge pill bg="secondary" className="text-truncate"><img src={Wallet} alt="Wallet" /> Symbol | { txnHash ? txnHash.to : ""}</Badge></td>
                                    <td>
                                        <Button variant="reset" onClick={() => {navigator.clipboard.writeText(txnHash.to); toggleShowA();}}>
                                            <img src={CopyIcon} alt="CopyIcon" />
                                        </Button>
                                    </td>
                                </tr> */}
                                <tr>
                                    <td>Fee</td>
                                    <td>{txnHash ? txnHash.fee : ''}</td>
                                    <td>
                                        <Button variant="reset" onClick={() => {navigator.clipboard.writeText(txnHash.fee); toggleShowA();}}>
                                            <img src={CopyIcon} alt="CopyIcon" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td><Badge pill bg="success"><img src={Check} alt="Check" />Success</Badge></td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Timestamp</td>
                                    <td>{txnHash? <>{formatDateTime(txnHash['round-time'])} ({calculateTimeAgo(txnHash['round-time'])}) </> : ''}</td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Input Data</td>
                                    {noteDecodeStatus ? (
                                        <>
                                            <td>
                                                <Button variant="secondary" className="me-2" onClick={() => decodeText()}>
                                                    Base64
                                                </Button>
                                                <textarea readOnly value={noteDecoded}></textarea>
                                            </td>
                                            <td>
                                                <Button variant="reset" onClick={() => {navigator.clipboard.writeText(noteDecoded); toggleShowA();}}>
                                                    <img src={CopyIcon} alt="CopyIcon" />
                                                </Button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>
                                                <Button variant="secondary" className="me-2" onClick={() => decodeBase64(txnHash.note)}>
                                                    Text
                                                </Button>
                                                <textarea readOnly value={txnHash.note || ''}></textarea>
                                            </td>
                                            <td>
                                                <Button variant="reset" onClick={() => {navigator.clipboard.writeText(txnHash.note); toggleShowA();}}>
                                                    <img src={CopyIcon} alt="CopyIcon" />
                                                </Button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                                {/* <tr>
                                    <td>{transInput.input}</td>
                                </tr> */}
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </div>
     );
}

export default NftTransactionPage;