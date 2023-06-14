import { Button, Col, Dropdown, Form, InputGroup, Row, Table } from "react-bootstrap";
import Eye from '../asserts/images/eye-icon.svg'
import { Link } from "react-router-dom";
import { useState } from "react";

function DocumentDetails() {
    const [search, setSearch] = useState(false);
    return ( 
        <div>
            <Row className="mb-20">
                <Col md={6} xl={4} xxl={3}>
                    <h4 className="page-title mb-0">Document Details</h4>
                </Col>
            </Row>
            <Row className="mb-20" style={{minHeight: '40px'}}>
                <Col md={6} className="d-flex align-items-center justify-content-end order-md-1 mb-md-0 mb-2">
                    <Button variant="outline-gray" className="me-2" onClick={() => setSearch(!search)}>
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
                    <Button variant="outline-gray" className="me-2 px-3">7 Days</Button>
                    <Button variant="outline-gray" className="me-2 px-3">30 Days</Button>
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
                        <th className="text-center">Favourite</th>
                        <th className="text-center">ID</th>
                        <th className="text-center">File Name</th>
                        <th className="text-center">Document Name</th>
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
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </td>
                        <td className="text-center">17323</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td className="text-center">Approved</td>
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
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </td>
                        <td className="text-center">17323</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td className="text-center"><Link to="/document-details/single">Approved</Link></td>
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
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </td>
                        <td className="text-center">17323</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td className="text-center">Approved</td>
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
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </td>
                        <td className="text-center">17323</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td className="text-center">Approved</td>
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
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </td>
                        <td className="text-center">17323</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td className="text-center">Approved</td>
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
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </td>
                        <td className="text-center">17323</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td className="text-center">Approved</td>
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
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </td>
                        <td className="text-center">17323</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td className="text-center">Approved</td>
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
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </td>
                        <td className="text-center">17323</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td className="text-center">Approved</td>
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
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </td>
                        <td className="text-center">17323</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td className="text-center">Approved</td>
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
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </td>
                        <td className="text-center">17323</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td>Starting in Windows 8, the AppInit_DLLs infrastructure is disabled when secure boot is enabled</td>
                        <td className="text-center">Approved</td>
                    </tr>
                </tbody>
                </Table>
            </div>
            {/* /.mb-20 */}
        </div>
     );
}

export default DocumentDetails;