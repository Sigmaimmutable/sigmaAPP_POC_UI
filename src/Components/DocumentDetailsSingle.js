import { Button, Card, Col, Dropdown, Form, InputGroup, Row, Table } from "react-bootstrap";
import Eye from '../asserts/images/eye-icon.svg'
import SiteLogo from '../asserts/images/site-logo-xxl.svg'
import { Link } from "react-router-dom";
import { useState } from "react";

function DocumentDetailsSingle() {
    const [search, setSearch] = useState(false);
    return ( 
        <div>
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
                    <h4 className="page-title mb-0">Document Details</h4>
                </Col>
            </Row>

            <Row className="mb-20" style={{minHeight: '40px'}}>
                <Col md={6} className="d-flex align-items-center justify-content-end order-md-1 mb-md-0 mb-2">
                    <Dropdown size="sm" className="me-2">
                        <Dropdown.Toggle variant="gray" className="btn-gray-black" id="dropdown-basic">
                            Download
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-filter">
                            <Dropdown.Item href="#/action-1">word</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">csv</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">pdf</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">png</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">jpeg</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to="/resource-persist-job" className="me-2 btn-outline-gray btn-outline-gray-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="d-block" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>
                    </Link>
                    <Button variant="outline-gray" onClick={() => setSearch(!search)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="d-block" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </Button>
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
                    <Col md={4} className="mb-md-0 mb-4">
                        <Card className="border">
                            <Card.Body className="text-center p-xl-3">
                                <img src={SiteLogo} alt="SiteLogo" className="img-fluid" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Table hover responsive>
                            <thead>
                                <tr>
                                    <th>Document Name</th>
                                    <th>Document1</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Token ID</th>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <th>Document ID</th>
                                    <td>12345</td>
                                </tr>
                                <tr>
                                    <th>Version ID</th>
                                    <td>17244</td>
                                </tr>
                                <tr>
                                    <th>Document Date</th>
                                    <td>05-06-2023</td>
                                </tr>
                                <tr>
                                    <th>File Modified Date</th>
                                    <td>10-06-2023</td>
                                </tr>
                                <tr>
                                    <th>File Created Date</th>
                                    <td>04-06-2023</td>
                                </tr>
                                <tr>
                                    <th>Document Creation Date</th>
                                    <td>05-06-2023</td>
                                </tr>
                                <tr>
                                    <th>NFT Creation Status</th>
                                    <td>Approved</td>
                                </tr>
                                <tr>
                                    <th>UUID</th>
                                    <td>001</td>
                                </tr>
                                <tr>
                                    <th>Createby</th>
                                    <td>Sigma Admin</td>
                                </tr>
                                <tr>
                                    <th>Region</th>
                                    <td>US-East North Carolin</td>
                                </tr>
                                <tr>
                                    <th>Type</th>
                                    <td>Single</td>
                                </tr>
                                <tr>
                                    <th>Title</th>
                                    <td>SIGMA DOCS</td>
                                </tr>
                                <tr>
                                    <th>Source Vault ID</th>
                                    <td>1002</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
            {/* /.mb-20 */}
        </div>
     );
}

export default DocumentDetailsSingle;