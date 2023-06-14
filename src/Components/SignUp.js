import { Link } from 'react-router-dom';
import { Button, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Logo from '../asserts/images/logo.svg'
import Google from '../asserts/images/google-icon.svg'
import SSO from '../asserts/images/sso-icon.svg'

function SignUp() {
    return ( 
        <div className="vh-100 d-flex w-100">
            <div className="container py-md-4 py-2 my-auto">
                <div className="user-card overflow-hidden">
                    <div className="user-card-logo text-center"><img className='img-fluid' src={Logo} alt="logo" /></div>
                    <div className='mb-3'>
                        <h2 className='mb-1'>Get Started</h2>
                        <p>Already have an account? <Link className='btn-link' to="/sign-in">Sign In</Link></p>
                    </div>
                    {/* mb-4 */}
                    <Row>
                        <Col className="mb-2" sm={6} xs={12}>
                            <Form.Group controlId="form.ControlInput1">
                                <Form.Label className='text-muted'>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your First Name" />
                            </Form.Group>
                        </Col>
                        <Col className="mb-2" sm={6} xs={12}>
                            <Form.Group controlId="form.ControlInput2">
                                <Form.Label className='text-muted'>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Last Name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-2" controlId="form.ControlInput3">
                        <Form.Label className='text-muted'>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    {/* mb-2 */}
                    <Form.Group className="mb-4" controlId="form.ControlInput4">
                        <Form.Label className='text-muted'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Choose a password (min 10 characters)" />
                    </Form.Group>
                    {/* mb-2 */}
                    <Button className='btn-button w-100' variant="dark">Sign in</Button>

                    <div className='divider d-flex align-items-center'><span className='mx-auto'>Or</span></div>

                    <div className='mb-50'>
                        <Button className='btn-access w-100 mb-2'><img src={Google} alt="Google icon" /> Sign in with Google</Button>
                        <Link to="/sign-in-with-enterprise-sso"><Button className='btn-access w-100'><img src={SSO} alt="SSO icon" /> Sign in with Enterprise SSO</Button></Link>
                    </div>

                    <div className='d-flex user-card-footer align-items-center justify-content-center'>
                        Sigma region: 
                        <Form.Select aria-label="Default">
                            <option>Default</option>
                            <option value="1">USA</option>
                            <option value="2">INDIA</option>
                            <option value="3">CANADA</option>
                        </Form.Select>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="button-tooltip">Hover Tooltip</Tooltip>}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                            </svg>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default SignUp;