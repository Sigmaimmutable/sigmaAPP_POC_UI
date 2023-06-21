import React, { useState } from "react";
import { Button, Col, Form, Row, Dropdown} from "react-bootstrap";
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import { OrgAdminmailcheckget, CreateOrguserrolepost } from "../apifunction";
import { Link } from "react-router-dom";

function AddUser() {
    const[name,setname]=useState("");
    const[emailid,setEmail]=useState("");
    const[role,setRole]=useState("");
    const [selectValue,setSelectValue] = useState("");
    // console.log("selected",selectValue);
    const handleChange = (e) => {
        setRole(e.target.value)
    }

    const Addusertoorganization = async () => {
        try{
            let [check, tenentid] = await OrgAdminmailcheckget(localStorage.getItem('UserID'));
            // settenentid(tenentid.tenantId);
            console.log("tenetid",tenentid);
            let orguser = await CreateOrguserrolepost(emailid, name, role, tenentid.tennantId);            
            console.log("Orguser",orguser);
            toast.success("User added successfully");
        }catch(err){
            toast.error(err);
        }
    }

    const roleSetter = (rolename) => {
            setRole(rolename);
    }

    const resetFields = () => {
        setEmail("");
        setname("");
        setRole("");
    }

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
                            <Form.Label column sm="3">Role</Form.Label>
                            <Col sm="9">
                            <select name="cars" id="cars" className="form-control dropdown" defaultValue={role} onChange={(e) => handleChange(e)}>
                                <option className="form-control form-control-reset">Admin</option>
                                <option className="form-control form-control-reset">Auditor</option>
                                <option className="form-control form-control-reset">Member</option>
                            </select>
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