import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Dropdown} from "react-bootstrap";
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import { OrgAdminmailcheckget1, CreateOrguserrolepost,getTennantId,NotificationPost,getNotificationById, getNotificationRead } from "../apifunction";
import { Link } from "react-router-dom";

function AddUser() {
    const[name,setname]=useState("");
    const[emailid,setEmail]=useState("");
    const [statusdata, setstatusdata] = useState([]);
    const[role,setRole]=useState("");
    const [notifydata, setnotifyData] = useState([]);
    const [roleId,setRoleId] = useState("");
    console.log("selected",roleId);
    const handleChange = (e) => {
        setRole(e)
    }

    const roleFetch = async () => {
        try{
            let [check, tenentid] = await OrgAdminmailcheckget1(localStorage.getItem('UserID'));
            console.log("tenetid",tenentid.roleType);
            setRoleId(tenentid.roleType);
        }catch(err){
            console.error(err);
        }
    }

    useEffect(() => {
        roleFetch();
    }, [roleId])

    const Addusertoorganization = async () => {
        try{
            let [check, tenentid] = await OrgAdminmailcheckget1(localStorage.getItem('UserID'));
            // setRoleId(tenentid.roleType);
            console.log("tenetid",tenentid);
            let orguser = await CreateOrguserrolepost(emailid, name, role, tenentid.tennantId);            
            console.log("Orguser",orguser);
            toast.success("User added successfully");
        }catch(err){
            toast.error(err);
        }
    }

    const resetFields = () => {
        setEmail("");
        setname("");
        setRole("");
    }
    useEffect(() => {
        userdata();
      }, []);
      
     
      
      const userdata = async () => {
        let tnid = await getTennantId();
        let getCurrentEpochTime =
          Math.floor(Date.now() / 1000); // Dividing by 1000 to convert milliseconds to seconds
          console.log("ep",getCurrentEpochTime)
        console.log("tn",tnid)
        let title = "Add User";
        let descriptions = "User Added successful.";
        let mailId = localStorage.getItem("UserID");
        let epochtime =getCurrentEpochTime;
        let tennatId =tnid;
        let statuses = 0;
      
        try {
          await NotificationPost(title,descriptions,mailId,epochtime,tennatId,statuses );
          console.log("Update successful9");
        } catch (error) {
          console.error("Error updating:", error);
  }
  };
  useEffect(() => {
    getnotify();
}, []);
const getnotify = async () => {
    const emailId = localStorage.getItem("UserID")
    const [check1, data] = await getNotificationById(emailId);
    console.log("getdata", data);
    setnotifyData(data);
};

useEffect(() => {
    getstatu();
}, []);
const getstatu = async () => {
    const emailId = localStorage.getItem("UserID")
    const statuses = 0; // Set the desired value for statuses (0 or 1)
    const [check1, data] = await getNotificationRead(emailId,statuses);
    console.log("statuscheck", data);
    setstatusdata(data);
};
    return ( 
        <div>
            <ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/>
            <Row className="mb-40">
            <Link to="/admin-manager/user-management" className="d-inline-block me-auto btn-back align-items-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                Back
            </Link><br/><br/>
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
                                <Form.Control type="text" placeholder="" onChange={event => setname(event.target.value)}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="3">Email</Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="" onChange={event => setEmail(event.target.value)}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="3">Role <sup>*</sup></Form.Label>
                            <Col sm="9">
                                <Form.Select className="form-control" aria-label="Default select example"  value={role}   onChange={(event)=>{handleChange(event.target.value)} }                           
                                >
                          
                                    <option value="">Select</option>
                                    {roleId === "Super User" ? <>
                                        <option value="Super User">Super user</option>
                                        <option value="System Admin">System Admin</option>                                    
                                    </> : <></>}
                                    <option value="Business Admin">Business Admin</option>
                                    <option value="FDA Auditor">FDA Auditor</option>
                                    <option value="Vault Owner">Vault Owner</option>
                                    <option value="Full User">Full User</option>
                                    <option value="Viewer">Viewer</option>
                                 
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Row className="justify-content-end">
                            <Col sm="9">
                                <Row>
                                    <Col xs={6}>
                                        <Button variant="dark" className="w-100 btn-button" onClick={() => Addusertoorganization()}>Submit</Button>
                                        
                                    </Col>
                                    <Col xs={6}>
                                        <Button type="reset" variant="outline-dark" className="w-100 btn-button" onClick={() => resetFields()}>Reset</Button>
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