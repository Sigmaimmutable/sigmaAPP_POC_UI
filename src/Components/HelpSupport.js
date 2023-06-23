import { Button, Col, Form, Row} from "react-bootstrap";
import Layout from "./Snippets/Layout";

function HelpSupport(props) {
    return ( 
        <Layout getThemeMode={() => undefined} roleType = {props.roleType}>
            <div className="container-fluid">
                <Row className="mb-40">
                    <Col md={6} xl={4} xxl={3}>
                        <h4 className="page-title mb-0">Help & Support</h4>
                    </Col>
                </Row>

                <Row>
                    <Col md={7} lg={6} xxl={5}>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="3">Name</Form.Label>
                                <Col sm="9">
                                    <Row>
                                        <Col xs={6}>
                                            <Form.Control type="text" placeholder="First Name" />
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="3">Ticket</Form.Label>
                                <Col sm="9">
                                    <Form.Select className="form-control" aria-label="Default select example">
                                        <option>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="3">Subject</Form.Label>
                                <Col sm="9">
                                    <Form.Control as="textarea" rows={3} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="3">Email</Form.Label>
                                <Col sm="9">
                                    <Form.Control type="email" placeholder="" />
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
        </Layout>
     );
}

export default HelpSupport;