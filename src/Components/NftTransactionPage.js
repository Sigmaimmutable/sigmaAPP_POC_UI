import { Badge, Button, Card, Col, Row, Table, Toast, ToastContainer } from "react-bootstrap";
import CopyIcon from "../asserts/images/copy-icon.svg";
import Check from "../asserts/images/check_icon.svg";
import Wallet from "../asserts/images/wallet-icon.svg";
import { useState, useEffect } from "react";
import { getSuiTransaction, createUserVisits } from "../apifunction";
import { useLocation, Link } from "react-router-dom";
import "./NftTransactionPage.css";

function NftTransactionPage() {
  const [showA, setShowA] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [totalGas, setTotalGas] = useState(0.00000);
  const location = useLocation();
  const txnHash = location.state?.object;

  const toggleShowA = () => setShowA(!showA);

  useEffect(() => {
    if (txnHash) {
      fetchTransactionDetails();
    }
  }, [txnHash]);

  const fetchTransactionDetails = async () => {
    try {
      const algoAddress = localStorage.getItem("UserID");
      const networkType = "type";
      const walletType = "Admin";

      await createUserVisits(algoAddress, networkType, walletType);
      const txndetails = await getSuiTransaction(txnHash);
      setTransactionDetails(txndetails.result);
      const gasdet = txndetails.result.effects.gasUsed;

        // Access the correct keys and calculate the total gas
        const gas = 
        parseInt(gasdet.computationCost) + 
        parseInt(gasdet.nonRefundableStorageFee) + 
        parseInt(gasdet.storageCost) - 
        parseInt(gasdet.storageRebate);
        setTotalGas(gas);
        console.log("Total Gas:", gas);
    } catch (error) {
      console.error("Error fetching transaction details:", error);
    }
  };

  const formatDateTime = (timestamp) => {
    const dateObj = new Date(Number(timestamp));
    return dateObj.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const calculateTimeAgo = (timestamp) => {
    const currentTime = new Date();
    const previousTime = new Date(Number(timestamp));
    const timeDifference = Math.abs(currentTime - previousTime) / 1000;

    if (timeDifference < 60) return "a few seconds ago";
    if (timeDifference < 3600) return `${Math.floor(timeDifference / 60)} minutes ago`;
    if (timeDifference < 86400) return `${Math.floor(timeDifference / 3600)} hours ago`;
    if (timeDifference < 2592000) return `${Math.floor(timeDifference / 86400)} days ago`;
    if (timeDifference < 31536000) return `${Math.floor(timeDifference / 2592000)} months ago`;
    return `${Math.floor(timeDifference / 31536000)} years ago`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toggleShowA();
  };

  return (
    <div>
      <ToastContainer position="bottom-end" className="p-3 position-fixed" style={{ zIndex: 1 }}>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Body>
            <div className="d-flex px-2 align-items-center">
              <img src={CopyIcon} alt="CopyIcon" className="me-2" />
              Copied successfully!
            </div>
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <Row className="mb-20">
        <Col md={6} xl={4} xxl={3}>
          <Link to="/admin/nft-transactions-report" className="d-inline-block me-auto btn-back align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Back to NFT Transactions
          </Link>
        </Col>
      </Row>

      <Row className="gx-3 mb-lg-4 mb-2">
        <Col xs={12} className="mb-3">
          <div className="info-card d-flex flex-column justify-content-between">
            <h6 className="d-flex align-items-center">Transaction</h6>
            <p style={{ color: "white" }} className="mb-0 text-break">
            <a 
            href={`https://suiscan.xyz/testnet/tx/${transactionDetails?.digest || txnHash?.digest}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: "white", textDecoration: "underline" }}
          >{transactionDetails?.digest || txnHash?.digest || "N/A"}</a>
            </p>
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
                  <td>{transactionDetails?.digest || "N/A"}</td>
                  <td>
                    <Button variant="reset" onClick={() => copyToClipboard(transactionDetails?.transactionDigest)}>
                      <img src={CopyIcon} alt="CopyIcon" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Block</td>
                  <td>{transactionDetails?.checkpoint || "N/A"}</td>
                  <td>
                    <Button variant="reset" onClick={() => copyToClipboard(transactionDetails?.checkpoint)}>
                      <img src={CopyIcon} alt="CopyIcon" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>From</td>
                  <td>
                    <Badge pill bg="secondary" className="text-truncate">
                      <img src={Wallet} alt="Wallet" /> {transactionDetails?.effects?.created[0]?.owner?.AddressOwner || "N/A"}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="reset" onClick={() => copyToClipboard(transactionDetails?.transaction?.sender)}>
                      <img src={CopyIcon} alt="CopyIcon" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>To</td>
                  <td>
                    <Badge pill bg="secondary" className="text-truncate">
                      <img src={Wallet} alt="Wallet" /> {"0x604f7248a1454c44a2e95e363c714d715eada5b5ae41e75fa1ce343e7aee2c25"}
                    </Badge>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Gas</td>
                  <td>{totalGas ? (totalGas / 1e9).toFixed(9) : "0.0000" || "N/A"}</td>
                  <td>
                    <Button
                      variant="reset"
                      onClick={() => copyToClipboard(transactionDetails?.gasUsed?.computationCost)}
                    >
                      <img src={CopyIcon} alt="CopyIcon" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>
                    <Badge pill bg="success">
                      <img src={Check} alt="Check" />
                      {transactionDetails?.effects?.status?.status || "N/A"}
                    </Badge>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Timestamp</td>
                  <td>
                    {transactionDetails?.timestampMs
                      ? `${formatDateTime(transactionDetails.timestampMs)} (${calculateTimeAgo(
                          transactionDetails.timestampMs
                        )})`
                      : "N/A"}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Input Data</td>
                  <td>
                    <textarea readOnly>{transactionDetails?.transaction?.data || "N/A"}</textarea>
                  </td>
                  <td>
                    <Button
                      variant="reset"
                      onClick={() => copyToClipboard(transactionDetails?.transaction?.data)}
                    >
                      <img src={CopyIcon} alt="CopyIcon" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default NftTransactionPage;
