import { Link,useHistory,useNavigate,Redirect,Navigate} from 'react-router-dom';
import React,{ useEffect ,useState} from "react";
import { Button, Form, OverlayTrigger, Tooltip,Alert } from 'react-bootstrap';
import Logo from '../asserts/images/logo.svg'
import Google from '../asserts/images/google-icon.svg'
import SSO from '../asserts/images/sso-icon.svg'
import {Orguserlogincheck,Sessionloginpost,OrgAdminmailcheckget1,Sessionstatusget,userprofileget} from '../apifunction';
function SignIn() {
    const [pass, setPass] = useState(true);
    const [Logged, setLogged] = useState(false);
    const [emailRef, setEmailRef] = useState();
    const [passwordRef, setPasswordRef] = useState();
    const [error, setError] = useState("")
    const [loginstatus, setLoginstatus] = useState("")
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
    const [Logtime, setLogtime] = useState("")
    const [rememberMe, setRememberMe] = useState(false);
    console.log("currentDateTime",currentDateTime);
    
    const navigate = useNavigate()
    useEffect(() => {
        const rememberMePreference = localStorage.getItem('rememberMe');
        setRememberMe(rememberMePreference === 'true');
      }, []);
      
    useEffect(() => {
        const fetchtime = async () => { 
            setLogtime(currentDateTime);
            console.log("Logtime1",currentDateTime);
        };    
        fetchtime();
        }, []);
    // useEffect(() => {
       
    //     setLogtime(currentDateTime);
    //     console.log("Logtime",Logtime);
    //   }, []);
    
    const LogIn = async () =>
    {  
        console.log("Logtime12",currentDateTime);
       let loginorgcheck= await Orguserlogincheck(emailRef,passwordRef);
       console.log("logincheck",loginorgcheck);
       if(loginorgcheck.result === "Y"){
            
            localStorage.setItem("Login",true)
            localStorage.setItem("UserID",emailRef);
            let [data,userprofiledetail]=await userprofileget(emailRef);
           
            localStorage.setItem("UserName",userprofiledetail.firstName);
            let [check,rolecheck] = await  OrgAdminmailcheckget1(emailRef);
            console.log("datacheckvalue",rolecheck)
            console.log("Logtime",currentDateTime);
           
            let sessionlogin= await Sessionloginpost("2023","2023","Login",rolecheck.tennantId,rolecheck.roleType,emailRef);
            console.log("sessionstatus",sessionlogin);
            let [checklogin,loginstauscheck] = await  Sessionstatusget(emailRef);
            console.log("sessionstatuscheck",loginstauscheck.activity);
            setLoginstatus(loginstauscheck);
            if (rememberMe) {
                localStorage.setItem('rememberMe', 'true');
              } else {
                localStorage.removeItem('rememberMe');
              }
          
            // home
            // history.push("/dashboarduserdetails")
        //   history.push("/home")
          navigate('/');
        }
        else if(emailRef === null || emailRef === "" || emailRef === undefined){
            setError("Failed to log in,Please enter and EmailId!");
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRef))){
            setError("Failed to log in,Please enter and Valid EmailId!");
          
         }
       
         else if(passwordRef === null || passwordRef === "" || passwordRef === undefined){
            setError("Failed to log in,Please enter an Password!");                                        
                }
          else{
          setError("Failed to log in,Invalid EmailID or  Password!");
          }
       
    }
    const getprofiledetails = async(email) =>{
        let [data,userprofiledetail]=await userprofileget(email);
        // setgetIProfile(userprofiledetail);
        // console.log("userdetail1",userprofiledetail,userprofiledetail.emailId);
        // console.log("userdetail11",getIProfile.emailId,getIProfile.firstName);
        localStorage.setItem("UserName",userprofiledetail.firstName);
       }
      
    useEffect(()=>{
        const LoggedNot=async()=>{
            
            setLogged(loginstatus.activity)            
        }
        LoggedNot()
    },[])

    
    if(loginstatus.activity  === false || loginstatus.activity  === null || loginstatus.activity  === undefined || loginstatus.activity  === "" || loginstatus.activity  === "Logout"){
        return ( 
            <div className="vh-100 d-flex py-md-4 py-2 w-100">
                <div className="container my-auto">
                    <div className="user-card overflow-hidden">
                        <div className="user-card-logo text-center"><img className='img-fluid' src={Logo} alt="logo" /></div>
                        <div className='mb-3'>
                            <h2 className='mb-2'>Get Started</h2>
                            <p>Don’t have an account? <Link className='btn-link' to="/sign-up">Create one</Link></p>
                        </div>
                        {/* mb-3 */}
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form.Group className="mb-2" controlId="form.ControlInput1">
                            <Form.Label className='text-muted'>Email</Form.Label>
                            <Form.Control type="email"onChange={event => setEmailRef(event.target.value)} placeholder="Enter your email" />
                        </Form.Group>
                        {/* mb-3 */}
                        <Form.Group className="mb-2" controlId="form.ControlInput2">
                            <div className='d-flex align-items-start mb-2 justify-content-between flex-wrap'>    
                                <Link className='order-1 btn-link' to="/reset-password">Forgot your password?</Link>
                                <Form.Label className='text-muted'>Password</Form.Label>
                            </div>
                            <Form.Control type="password" onChange={event => setPasswordRef(event.target.value)}  placeholder="Enter your password" 
                            ></Form.Control> 
                           
                        </Form.Group>
                        {/* mb-3 */}
                        <div className='mb-3'>
                            <Form.Check
                                type="checkbox"
                                id="form.ControlInput3"
                                label="Remember me"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                        </div>
                        {/* mb-3 */}
                        <Button className='btn-button w-100' variant="dark" onClick={()=>{LogIn()}}>Sign in</Button>
    
                        <div className='divider d-flex align-items-center'><span className='mx-auto'>Or</span></div>
    
                        <div className='mb-50'>
                            <Button className='btn-access w-100 mb-2'><img src={Google} alt="Google icon" /> Sign in with Google</Button>
                            <Button className='btn-access w-100'><img src={SSO} alt="SSO icon" /> Sign in with Enterprise SSO</Button>
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
    else{
        return( <Navigate to="/" replace={true} />); 
    }
  
}

export default SignIn;