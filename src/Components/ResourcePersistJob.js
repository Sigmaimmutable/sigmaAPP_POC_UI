import { useState } from "react";
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Row} from "react-bootstrap";
import CheckBox from '../asserts/images/check-box.svg';
import { useNavigate } from "react-router-dom";

function ResourcePersistJob() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);
    const [search, setSearch] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckboxClick = (e) => {
        if (selectedValues.includes(e)) {
            const updatedValues = selectedValues.filter((item) => item !== e);
            setSelectedValues(updatedValues);
        }else{
            setSelectedValues([...selectedValues, e]);
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handlefatch = () => {
        navigate('/job/immutable-record-jobs')
    }
    
    const data = ['Filename_ _v', 'Version_id', 'Status_ _v', 'Column 4', 'Column 5', 'Column 6', 'Column 7', 'Column 8', 'Column 9', 'Column 10', 'Column 11', 'Column 12'];
    return ( 
        <div>
            <Row className="mb-2">
                <Col md={6} xl={4} xxl={3}>
                    <h4 className="page-title mb-0">Resource Persist Job</h4>
                </Col>
            </Row>

            <Row className="mb-20" style={{minHeight: '40px'}}>
                <Col md={12} className="d-flex align-items-center justify-content-end">
                    <h6 className="me-3 mb-0 text-muted">Links:</h6>
                    <Dropdown size="sm">
                        <Dropdown.Toggle variant="gray" id="dropdown-basic">
                            Select
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-filter">
                            <Dropdown.Item onClick={handleShow} href="#/action-1">Tesla v1</Dropdown.Item>
                            <Dropdown.Item onClick={handleShow} href="#/action-2">Tesla v2</Dropdown.Item>
                            <Dropdown.Item onClick={handleShow} href="#/action-3">Tesla v3</Dropdown.Item>
                            <Dropdown.Item onClick={handleShow} href="#/action-3">Tesla v4</Dropdown.Item>
                            <Dropdown.Item onClick={handleShow} href="#/action-3">Tesla v5</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Manage columns</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-4 justify-content-between">
                        <Col md={6} className="py-1 mb-md-0 mb-2">
                            <h6 className="mb-2">Available columns:</h6>
                
                            <Card>
                                <Card.Header className="border-0">
                                    <h5 className="d-flex align-items-center"><img src={CheckBox} alt="CheckBox" className="me-2" /> {selectedValues?.length} {selectedValues?.length < 2 ? 'item' : 'items' } selected</h5>

                                    <InputGroup className="form-search shadow border">
                                        <Form.Control
                                            aria-describedby="basic-addon1"
                                            aria-label="Write something to search"
                                            placeholder="Search columns..."
                                            className="ps-3"
                                            onChange={(e) => handleSearch(e)}
                                        />
                                        <Button variant="reset" id="button-addon1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                        </Button>
                                    </InputGroup>
                                </Card.Header>
                                <Card.Body className="pt-0">
                                    {data?.filter((item) => item.toLowerCase().includes(search?.toLowerCase()))?.map((item, index) => (
                                        <div key={index} className={`mb-1 d-flex`}>
                                            <Form.Check
                                                className="mb-0"
                                                type='checkbox'
                                                id={`default-${index}`}
                                                label={item}
                                                value={item}
                                                onChange={() => handleCheckboxClick(item)}
                                            />
                                        </div>
                                    ))}                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="py-1">
                            <h6 className="mb-2">Selected Columns:</h6>
                            
                            <Card>
                                <Card.Body>
                                    <ul className="selected-list list-unstyled d-flex flex-wrap">
                                        {selectedValues?.map((item, index) => (
                                            <li key={index}><Button variant="outline-gray">{item}</Button></li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Row>
                                <Col xs={6}>
                                    <Button type="submit" variant="dark" className="w-100 btn-button" onClick={handlefatch}>Fetch</Button>
                                </Col>
                                <Col xs={6}>
                                    <Button type="reset" variant="outline-dark" className="w-100 btn-button">Reset</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
     );
}

export default ResourcePersistJob;