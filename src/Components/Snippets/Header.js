import { Button, Col, Dropdown, Form, InputGroup, Row, Tab, Tabs } from "react-bootstrap";
import Avatar from "../../asserts/images/avartar.png"
import { Link,useHistory,useNavigate,Redirect,Navigate} from 'react-router-dom';
// import { Link } from "react-router-dom";
import LogoutIcon from "../../asserts/images/logout-icon.svg"
import { useEffect, useState } from "react";
import {Orguserlogincheck,Sessionloginpost,OrgAdminmailcheckget1,Sessionstatusget,Sessionstatusupdate,userprofileget} from '../../apifunction';
const Header = () => {
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);
    const [loginstatus, setLoginstatus] = useState("")
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
    const [Logtime, setLogtime] = useState("")
    const [logout, setLogout] = useState("")
    const [UserName,setUserName] = useState("");
    const [lastname,setlastname] = useState("");
    const[getIProfile,setgetIProfile]=useState("");  
    const navigate = useNavigate()
    if(menu){
        document.getElementsByTagName('body')[0].classList.add('submenu');
        setMenu(!menu)
    }
    const getprofiledetails = async() =>{
        let [data,userprofiledetail]=await userprofileget(localStorage.getItem("UserID"));
        setgetIProfile(userprofiledetail);
        console.log("userdetail1",userprofiledetail,userprofiledetail.emailId);
        console.log("userdetail11",getIProfile.emailId,getIProfile.firstName);
        // localStorage.setItem("UserName",userprofiledetail.firstName);
       }
       useEffect(()=>{getprofiledetails()})
    const Logout = async () =>
    {  
        console.log("Logtime12",currentDateTime);
        let email=localStorage.getItem('UserID')
        console.log("emailid",email)
        let [checklogin,loginstauscheck] = await  Sessionstatusget(email);
       setLoginstatus(loginstauscheck);
       console.log("logincheck",loginstatus);
       let sessionlogin= await Sessionstatusupdate("1222","1999","Logout",email);
       console.log("sessionstatus",sessionlogin);
       localStorage.setItem("Login",false)
       localStorage.removeItem('Login');
       localStorage.setItem("UserID"," ");
       localStorage.removeItem('UserID');
       localStorage.removeItem('UserName');
       if ( localStorage.getItem('rememberMe')=== true) {
        localStorage.removeItem('rememberMe');
      } else {
        localStorage.removeItem('rememberMe');
      }
      navigate('/');
       
      
       
    }
    return ( 
        <header className="app-header">
            <div className="container-fluid">
                <Row className="align-items-center justify-content-between">
                    <Col xs={12} md="auto" className="order-md-1 d-flex justify-content-end align-items-center">
                        <Button variant="reset" onClick={() => setMenu(!menu)} className="p-0 d-md-none border-0 me-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="d-block" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </Button>
                        <Button variant="bell" className="shadow btn-search d-md-none border-0 me-3" onClick={() => setSearch(!search)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="d-block" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </Button>
                        <Dropdown className="dropdown-bell" align={"end"} autoClose="outside">
                            <Dropdown.Toggle variant="bell" className="shadow border-0" id="dropdown-basic">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="d-block" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                </svg>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="shadow-md">
                                <div className="dropdown-bell-body">
                                    <h3 className="mb-0">Notifications</h3>

                                    <Tabs
                                        defaultActiveKey="all"
                                        id="uncontrolled-tab-example"
                                    >
                                    <Tab eventKey="all" title="All">
                                        <div className="d-flex notify unread">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                        <div className="d-flex notify">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                        <div className="d-flex notify">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                        <div className="d-flex notify unread">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="unread" title="Unread">
                                        <div className="d-flex notify unread">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                        <div className="d-flex notify unread">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="read" title="Read">
                                        <div className="d-flex notify">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                        <div className="d-flex notify">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                    </Tab>
                                    </Tabs>
                                </div>
                                <div className="dropdown-bell-footer d-flex align-items-center justify-content-between">
                                    <Button variant="link" className="p-0">Mark all as read</Button>
                                    <Button variant="dark" className="btn-button btn-sm">View all notifications</Button>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown align={"end"} autoClose="outside">
                            <Dropdown.Toggle variant="ava" className="avatar p-0 border-0 d-flex align-items-center" id="dropdown-basic">
                                <strong className="d-none d-md-block">{localStorage.getItem("UserName")===""||localStorage.getItem("UserName")===null||localStorage.getItem("UserName")===undefined || !localStorage.getItem("UserName")? "User":localStorage.getItem("UserName")}</strong>
                                {/* <img src={Avatar} className="shadow" alt="Avatar" /> */}
                                {getIProfile.profilePic === null || getIProfile.profilePic === "" || getIProfile.profilePic === undefined ?(<>
                                    <img src={Avatar} className="shadow" alt="Avatar" />
                                
                                </>):(<>
                                
                                    <img src={getIProfile.profilePic} className="shadow" alt="Avatar" />
                                </>)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-avatar px-3">
                                <div className="d-flex py-3 border-bottom">
                                    {/* <img src={Avatar} alt="Avatar" /> */}
                                    {getIProfile.profilePic === null || getIProfile.profilePic === "" || getIProfile.profilePic === undefined ?(<>
                                    <img src={Avatar}  alt="Avatar" />
                                
                                </>):(<>
                                
                                    <img src={getIProfile.profilePic} className="shadow" alt="Avatar" />
                                </>)}
                                    <div className="d-flex flex-column justify-content-between">
                                        <h6>{localStorage.getItem("UserName")===""||localStorage.getItem("UserName")===null||localStorage.getItem("UserName")===undefined || !localStorage.getItem("UserName")? "User":localStorage.getItem("UserName")}</h6>
                                        <p>{localStorage.getItem("UserID")}</p>
                                    </div>
                                </div>
                                <div className="py-2 d-flex align-items-center justify-content-between">
                                    <Link to="/account" className="btn-link">My Account</Link>
                                    <Button variant="logout" onClick={()=>{Logout()}} ><img src={LogoutIcon} alt="LogoutIcon"/> Sign Out</Button>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={6} className={`mt-md-0 d-md-block d-none mt-3 ${search ? 'form-col-active' : ''}`}>
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
                    </Col>
                </Row>
            </div>
        </header>
     );
}

export default Header;