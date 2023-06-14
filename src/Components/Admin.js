import { Badge, Button, Card, Col, ListGroup, Row, Table, Toast, ToastContainer } from "react-bootstrap";
import CopyIcon from '../asserts/images/copy-icon.svg'
import Check from '../asserts/images/check_icon.svg'
import Wallet from '../asserts/images/wallet-icon.svg'
import RestAPI from '../asserts/images/rest_api.svg'
import { Link } from "react-router-dom";
import { useState } from "react";

function Admin() {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    setTimeout(() => {
        setShowA(false)
    }, 1200)

    return ( 
        <div>
            <ToastContainer 
                position={"bottom-end"}
                className="p-3 position-fixed"
                style={{ zIndex: 1 }}>
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Body><div className="d-flex px-2 align-items-center"><img src={CopyIcon} alt="CopyIcon" className="me-2" /> Copped successfully!</div></Toast.Body>
                </Toast>
            </ToastContainer>
            <Row className="mb-20">
                <Col md={6} xl={4} xxl={3}>
                    <h4 className="page-title mb-0">Admin</h4>
                </Col>
            </Row>

            <Row className="gx-3 mb-lg-4 mb-2">
                <Col xs={6} lg={4} className="mb-3">
                    <div className="info-card info-card-5 d-flex flex-column justify-content-between">
                        <h4 className="d-flex align-items-center">Nodes Deployed</h4>
                        <h3 className="mb-0">03</h3>
                    </div>
                </Col>
                <Col xs={6} lg={4} className="mb-3">
                    <div className="info-card info-card-6 d-flex flex-column justify-content-between">
                        <h4 className="d-flex align-items-center">Provider</h4>
                        <h3 className="mb-0">Polygon-edge</h3>
                    </div>
                </Col>
                <Col xs={12} lg={4} className="mb-3">
                    <div className="info-card info-card-7 d-flex flex-column justify-content-between">
                        <h4 className="d-flex align-items-center">Total Users</h4>
                        <h3 className="mb-0">Testnode2</h3>
                    </div>
                </Col>
            </Row>

            <Row className="gx-xl-5">
                <Col md={7} className="mb-md-0 mb-4">
                    <Card>
                        <Table hover responsive>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>peAPI1</td>
                                    <td width="50"></td>
                                </tr>
                                <tr>
                                    <td>Node ID</td>
                                    <td>u0neuhe1id</td>
                                    <td>
                                        <Button variant="reset" onClick={() => {navigator.clipboard.writeText('u0neuhe1id'); toggleShowA();}}>
                                            <img src={CopyIcon} alt="CopyIcon" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Node size</td>
                                    <td>small</td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Owner</td>
                                    <td>Default Organization</td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td><Badge pill bg="success"><img src={Check} alt="Check" /> Started</Badge></td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Region</td>
                                    <td>AWS us-east-2</td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Creation date</td>
                                    <td>04-06-2023</td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Last updated date</td>
                                    <td>05-06-2023</td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Blockchain Node ID</td>
                                    <td>Approved</td>
                                    <td>
                                        <Button variant="reset" onClick={() => {navigator.clipboard.writeText('Approved'); toggleShowA();}}>
                                            <img src={CopyIcon} alt="CopyIcon" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Consensus role</td>
                                    <td>001</td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Consensus ID</td>
                                    <td>Sigma Admin</td>
                                    <td>
                                        <Button variant="reset" onClick={() => {navigator.clipboard.writeText('Sigma Admin'); toggleShowA();}}>
                                            <img src={CopyIcon} alt="CopyIcon" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Runtime version</td>
                                    <td>US-East North Carolin</td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>User account</td>
                                    <td><Badge pill bg="secondary" className="text-truncate"><img src={Wallet} alt="Wallet" /> Default | 0xf27fbjsbfgfjwkfn354654rfwkjiruqgyuv32dasf2507ebc</Badge></td>
                                    <td>
                                        <Button variant="reset">
                                            <img src={CopyIcon} alt="CopyIcon" />
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card>
                        <Card.Header>
                            <h5>Connect your node</h5>
                            <p>Send transactions to the blockchain network using these endpoints along with valid application credentials.</p>
                        </Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex py-3 align-items-center">
                                <div className="list-icon">://</div>
                                <div className="list-content pe-2 flex-grow-1">
                                    <h6 className="mb-1 text-truncate">JSON/RPC HTTP endpoint</h6>
                                    <p className="text-truncate">https://u0o0486kj4-u0nfhhfbnbdshsjf-d.io/</p>
                                </div>
                                <div className="list-copy">
                                    <Button variant="reset" onClick={() => {navigator.clipboard.writeText('https://u0o0486kj4-u0nfhhfbnbdshsjf-d.io/'); toggleShowA();}}>
                                        <img src={CopyIcon} alt="CopyIcon" />
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex py-3 align-items-center">
                                <div className="list-icon">://</div>
                                <div className="list-content pe-2 flex-grow-1">
                                    <h6 className="mb-1 text-truncate">JSON/RPC Web socket endpoint</h6>
                                    <p className="text-truncate">https://u0o0486kj4-u0nfhhfbnbdshsjf-d.io/</p>
                                </div>
                                <div className="list-copy">
                                    <Button variant="reset" onClick={() => {navigator.clipboard.writeText('https://u0o0486kj4-u0nfhhfbnbdshsjf-d.io/'); toggleShowA();}}>
                                        <img src={CopyIcon} alt="CopyIcon" />
                                    </Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex py-3 align-items-center">
                                <div className="list-icon"><img src={RestAPI} alt="RestAPI" /></div>
                                <div className="list-content pe-2 flex-grow-1">
                                    <h6 className="mb-1 text-truncate">REST API Gateway</h6>
                                    <p className="text-truncate">https://u0o0486kj4-u0nfhhfbnbdshsjf-d.io/</p>
                                </div>
                                <div className="list-copy">
                                    <Button variant="reset" onClick={() => {navigator.clipboard.writeText('https://u0o0486kj4-u0nfhhfbnbdshsjf-d.io/'); toggleShowA();}}>
                                        <img src={CopyIcon} alt="CopyIcon" />
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                        <Card.Footer className="d-block">
                            <Row>
                                <Col sm={6} className="mb-sm-0 mb-2">
                                    <Link to="/" className="w-100 btn-dark btn-button">Connect App</Link>
                                </Col>
                                <Col sm={6}>
                                    <Link to="/" className="w-100 btn-dark btn-button">Import Smart Contract</Link>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
     );
}

export default Admin;