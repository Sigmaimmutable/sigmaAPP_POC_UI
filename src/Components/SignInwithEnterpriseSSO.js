import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Logo from '../asserts/images/logo.svg'

function SignInwithEnterpriseSSO() {
    return ( 
        <div className="vh-100 d-flex py-md-4 py-2 w-100">
            <div className="container my-auto">
                <div className="user-card overflow-hidden">
                    <div className="user-card-logo mb-4 text-center"><img className='img-fluid' src={Logo} alt="logo" /></div>
                    <div className='mb-4'>
                        <h2 className='mb-2'>Sign in with Enterprise SSO</h2>
                    </div>
                    {/* mb-4 */}
                    <Form.Group className="mb-5" controlId="form.ControlInput1">
                        <Form.Control type="email" placeholder="example@me.com" />
                    </Form.Group>
                    {/* mb-4 */}
                    <Button className='btn-button w-100 mb-4' variant="dark">PROCEED TO LOGIN</Button>
                    <p>No organization alias? <Link to="/sign-in" className='btn-link'>Login here</Link></p>
                </div>
            </div>
        </div>
     );
}

export default SignInwithEnterpriseSSO;