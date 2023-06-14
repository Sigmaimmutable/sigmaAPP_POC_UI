import { Button, Card, Col, Dropdown, Form, InputGroup, Row, Table } from "react-bootstrap";
import Eye from '../asserts/images/eye-icon.svg'
import SiteLogo from '../asserts/images/site-logo-xxl.svg'
import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "./Snippets/Layout";

function JobDetails() {
    const [search, setSearch] = useState(false);
    return ( 
        <div>
            <Row className="mb-2">
                <Col md={6} xl={4} xxl={3}>
                    <h4 className="page-title mb-0">Job Details</h4>
                </Col>
            </Row>

            <Row className="mb-20" style={{minHeight: '40px'}}>
                <Col xs={8} md={4} className="d-flex align-items-center">
                    <h6 className="me-3 mb-0 text-muted">Links:</h6>
                    <Dropdown size="sm" className="me-2">
                        <Dropdown.Toggle variant="gray" className="rounded-pill" id="dropdown-basic">
                            Select
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-filter">
                            <Dropdown.Item href="#/action-1">Tesla v1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Tesla v2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Tesla v3</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Tesla v4</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Tesla v5</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="gray" className="btn-gray-black rounded-pill">Submit</Button>
                </Col>
                <Col xs={'auto'} className="ms-md-0 ms-auto order-md-1">
                    <Button variant="outline-gray" className="me-0" onClick={() => setSearch(!search)}>
                        {search ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="d-block" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        ):(
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="d-block" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        )}
                    </Button>
                </Col>
                <Col md={4} lg={3} className="ms-auto mt-md-0 mt-2 mb-md-0 mb-3">
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
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th width="84">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Dropdown size="sm" className="me-2">
                                        <Dropdown.Toggle variant="reset" id="dropdown-basic">
                                            <img src={Eye} alt="Eye" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-filter-table">
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-1`}
                                                    label={`Show/Hide Columns`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-2`}
                                                    label={`Favourites`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-3`}
                                                    label={`Id`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-4`}
                                                    label={`File Name`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-5`}
                                                    label={`Document Name`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-6`}
                                                    label={`State`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-7`}
                                                    label={`Global Id`}
                                                />
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Form.Check
                                        className="mb-0 check-single"
                                        type='checkbox'
                                        id={`default-8`}
                                    />
                                </div>
                            </th>
                            <th className="text-center">Job id</th>
                            <th className="text-center">Job name</th>
                            <th className="text-center">Job run by</th>
                            <th className="text-center">Company</th>
                            <th className="text-center">Start time</th>
                            <th className="text-center">Completion time</th>
                            <th className="text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="84">
                                <div className="d-flex justify-content-end">
                                    <Form.Check
                                        className="mb-0 check-single"
                                        type='checkbox'
                                        id={`default-9`}
                                    />
                                </div>
                            </td>
                            <td className="text-center">17323</td>
                            <td className="text-center">Resource persist job</td>
                            <td className="text-center">Queen_Admin</td>
                            <td className="text-center">King</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">Completed</td>
                        </tr>
                        <tr>
                            <td width="84">
                                <div className="d-flex justify-content-end">
                                    <Form.Check
                                        className="mb-0 check-single"
                                        type='checkbox'
                                        id={`default-9`}
                                    />
                                </div>
                            </td>
                            <td className="text-center">17323</td>
                            <td className="text-center">Resource persist job</td>
                            <td className="text-center">Queen_Admin</td>
                            <td className="text-center">King</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">Completed</td>
                        </tr>
                        <tr>
                            <td width="84">
                                <div className="d-flex justify-content-end">
                                    <Form.Check
                                        className="mb-0 check-single"
                                        type='checkbox'
                                        id={`default-9`}
                                    />
                                </div>
                            </td>
                            <td className="text-center">17323</td>
                            <td className="text-center">Resource persist job</td>
                            <td className="text-center">Queen_Admin</td>
                            <td className="text-center">King</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">Completed</td>
                        </tr>
                        <tr>
                            <td width="84">
                                <div className="d-flex justify-content-end">
                                    <Form.Check
                                        className="mb-0 check-single"
                                        type='checkbox'
                                        id={`default-9`}
                                    />
                                </div>
                            </td>
                            <td className="text-center">17323</td>
                            <td className="text-center">Resource persist job</td>
                            <td className="text-center">Queen_Admin</td>
                            <td className="text-center">King</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">Completed</td>
                        </tr>
                        <tr>
                            <td width="84">
                                <div className="d-flex justify-content-end">
                                    <Form.Check
                                        className="mb-0 check-single"
                                        type='checkbox'
                                        id={`default-9`}
                                    />
                                </div>
                            </td>
                            <td className="text-center">17323</td>
                            <td className="text-center">Resource persist job</td>
                            <td className="text-center">Queen_Admin</td>
                            <td className="text-center">King</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">Completed</td>
                        </tr>
                        <tr>
                            <td width="84">
                                <div className="d-flex justify-content-end">
                                    <Form.Check
                                        className="mb-0 check-single"
                                        type='checkbox'
                                        id={`default-9`}
                                    />
                                </div>
                            </td>
                            <td className="text-center">17323</td>
                            <td className="text-center">Resource persist job</td>
                            <td className="text-center">Queen_Admin</td>
                            <td className="text-center">King</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">2023-03-28</td>
                            <td className="text-center">Completed</td>
                        </tr>
                    </tbody>
                </Table>

                <Row className="mt-4">
                    <Col md={4} className="mb-md-0 mb-3">
                        <Dropdown size="sm">
                            <Dropdown.Toggle variant="gray" id="dropdown-basic">
                                Select Rows
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-filter">
                                <Dropdown.Item href="#/action-1">100 Rows</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">500 Rows</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">1000 Rows</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={8} className="d-flex justify-content-md-end justify-content-center">
                        <ul className="d-flex pagination list-unstyled">
                            <li>
                                <Link to="/" className="prev disabled">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li><Link className="active" to="/">1</Link></li>
                            <li><Link to="/">2</Link></li>
                            <li><Link to="/">3</Link></li>
                            <li><Link to="/">4</Link></li>
                            <li><Link to="/">5</Link></li>
                            <li><Link to="/">6</Link></li>
                            <li>
                                <Link to="/" className="next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
            {/* /.mb-20 */}
        </div>
     );
}

export default JobDetails;