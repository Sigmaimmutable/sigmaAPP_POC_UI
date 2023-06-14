import { Button, Col, Form, Row} from "react-bootstrap";

function AddUser() {
    return ( 
        <div>
            <Row className="mb-40">
                <Col md={6} xl={4} xxl={3}>
                    <h4 className="page-title mb-0">Add User</h4>
                </Col>
            </Row>

            <Row>
                <Col md={8} lg={7} xxl={6}>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="3">Name</Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="3">Created By</Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="3">Single Line</Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                        <Row className="justify-content-end">
                            <Col sm="9">
                                <Row>
                                    <Col xs={6}>
                                        <Button type="submit" variant="dark" className="w-100 btn-button">Submit</Button>
                                    </Col>
                                    <Col xs={6}>
                                        <Button type="reset" variant="outline-dark" className="w-100 btn-button">Reset</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
     );
}

export default AddUser;