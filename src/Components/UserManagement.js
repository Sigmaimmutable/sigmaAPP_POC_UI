import { Button, Col, Dropdown, Form, InputGroup, Modal, Row, Table } from "react-bootstrap";
import Eye from '../asserts/images/eye-icon.svg'
import Question from '../asserts/images/question-icon.svg'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { OrgAdminmailcheckget1, OrgTenentcheckget, DeleteOrgUser } from "../apifunction";
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import {CreateOrganizationPost,CreateOrguserrolepost,createUserVisits} from '../apifunction';

function UserManagement() {
    const [disabled, setDisabled] = useState(true);
    const [search, setSearch] = useState(false);
    const [show, setShow] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [memberlistTable, setmemberlistTable] = useState([]);
    const [deleteEmail, setDeleteEmail] = useState();
    const [gotValue, setGotValue] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[pageBLSize,setPageBLSize] = useState(8);  
    const [rowSize, setRowSize] = useState();   

    const decrementBLSize=()=>{
      if(pageBLSize >= 4){
      setPageBLSize(pageBLSize-2)
      }        
    }
 
    const Deleteorguser = async (emailid) => {
        try{
            let orguserdelete=await DeleteOrgUser(emailid);            
            console.log("deleteOrguser",orguserdelete);
            toast.success("Deleted user successfully");
            await memberTableFetch();
            setShowButton(!showButton);
        }catch(err){
            toast.error(err);
        }
        }

    const memberTableFetch=async()=>{            
        if(localStorage.getItem("UserID")  === null || localStorage.getItem("UserID")  === "" || localStorage.getItem("UserID")  === " " || localStorage.getItem("UserID") === undefined || localStorage.getItem("UserID") === ''){
        }
        else{
          let r=[];
          let countlist=0;
      try {          
        let [check, tenentid] = await OrgAdminmailcheckget1(localStorage.getItem('UserID'));
      
        // settenentid(tenentid.tenantId);
        console.log("tenetidnew",tenentid);
          let [checking, data] = await OrgTenentcheckget(tenentid.tennantId);
        
          console.log("Length", data);     
          if (data) {  
              try{
              let datavar=data;
              console.log("datascheck13",datavar);
             
              Object.keys(datavar).map((m)=>{
                console.log("datascheck15",datavar[m]);
                countlist=countlist + 1;
               if(datavar[m].tennantId === tenentid.tennantId && datavar[m].roleType != "Super User" && datavar[m].roleType != "System Admin" && datavar[m].roleType != "Business Admin")
                    r.push({
                       userName:datavar[m].userName,
                        emailId:datavar[m].emailId,
                        roleType:datavar[m].roleType,
                        // networkName:datavar[m].networkName,
                    })    
                
                
                             
              })  
          }   catch(e){                      
          } 
        //   r.reverse();
        setmemberlistTable(r);      
        if(r)
        {
            setGotValue(!gotValue)
        }          
          }
          else{
            setmemberlistTable([""]);  
          }
          console.log("Data", data);
          //setpagesCountlist(countlist);        
      } catch (error) {            
      }                
      
    }
      }

useEffect(() => {
    if(gotValue === false)
    memberTableFetch();
},[memberlistTable])

      useEffect(() => {
        userdata();
      }, []);
      
      const userdata = async () => {
        let algoAddress = localStorage.getItem("UserID");
        let networkType = "type";
        let walletType = "User-Management";
      
        try {
          await createUserVisits(algoAddress, networkType, walletType);
          console.log("Update successful1");
        } catch (error) {
          console.error("Error updating:", error);
        }
      };

const checkedDeleteButton = (email) =>
{
    setDeleteEmail(email);
    setShowButton(!showButton);
}

    return ( 
        <div>
            <ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/>
            <Row className="mb-20">
                <Col md={6} xl={4} xxl={3}>
                    <h4 className="page-title mb-0">User Details</h4>
                </Col>
            </Row>

            <Row className="mb-20" style={{minHeight: '40px'}}>
                <Col xs={6} className="ms-md-0 d-flex align-items-center justify-content-end ms-auto order-md-1">
                    <Link to="/admin-manager/add-user" className="btn-gray-black btn btn-gray rounded-pill me-2">Add user</Link>
                    <Button variant="outline-gray" className={`me-2 btn-outline-gray-black ${!showButton && 'disabled'}`} onClick={() => Deleteorguser(deleteEmail)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="d-block" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </Button>
                    <Button variant="outline-gray" className="me-0" onClick={() => setSearch(!search)}>
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
                </Col>
                <Col xs={12} md={6} className="mt-md-0 mt-2 mb-md-0 mb-3">
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

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body className="text-center py-5">
                    <img src={Question} className="mb-2" alt="Question" />
                    <h6>Are you sure you want to execute this action?</h6>

                    <div className="d-flex pt-4 align-items-center justify-content-center">
                        <Button type="submit" variant="dark" className="btn-button btn-sm" onClick={handleClose}>Yes</Button>
                        <Button type="reset" variant="outline-dark" className="btn-button btn-sm ms-3" onClick={handleClose}>No</Button>
                    </div>
                </Modal.Body>
            </Modal>
            
            <div className="mb-20">
                <Table hover responsive>
                    <thead>
                        <tr>
                            {/* <th width="84">
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
                            </th> */}
                            <th className="text-center">Checkbox</th>
                            <th className="text-center">Sl no</th>
                            <th className="text-center">User name</th>
                            <th className="text-center">Email Id</th>
                            <th className="text-center">Role Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {memberlistTable.map((x,y)=>{
                              if(y < pageBLSize)
                              return(
                                  <tr>
                                  <td width="84">
                                      <div className="d-flex justify-content-center">
                                          <Form.Check
                                              className="mb-0 check-single"
                                              type='checkbox'
                                              id= "checked"
                                              onClick={() => checkedDeleteButton(x.emailId)}
                                          />
                                      </div>
                                  </td>
                                  <td className="text-center">{y+1}</td>
                                  <td className="text-center">{x.userName}</td>
                                  <td className="text-center">{x.emailId}</td>
                                  <td className="text-center">{x.roleType}</td>
                                  {/* <td>  <ButtonLoad loading={loader} className='w-100 btn-blue mb-3' onClick={()=>{Deleteorguser(x.emailId)}}>Delete user</ButtonLoad> </td>       */}

                                  {/* <td>{x.networkName}</td> */}
                                  </tr>
                              )
                              })
                              }
                        {/* <tr>
                            <td width="84">
                                <div className="d-flex justify-content-end">
                                    <Form.Check
                                        className="mb-0 check-single"
                                        type='checkbox'
                                        id={`default-9`}
                                    />
                                </div>
                            </td>
                            <td className="text-center">17323</td>
                            <td className="text-center">Resource persist job</td>
                            <td className="text-center">Queen_Admin</td>
                            <td className="text-center">King</td>
                        </tr> */}
                    </tbody>
                </Table>

                <Row className="mt-4">
                    <Col md={4} className="mb-md-0 mb-3">
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
                    <Col md={8} className="d-flex justify-content-md-end justify-content-center">
                        <ul className="d-flex pagination list-unstyled">
                            <li>
                                <Link className="prev" onClick={()=>{decrementBLSize()}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                    </svg>
                                </Link>
                            </li>
                            {/* <li><Link className="active" to="/">1</Link></li>
                            <li><Link to="/">2</Link></li>
                            <li><Link to="/">3</Link></li>
                            <li><Link to="/">4</Link></li>
                            <li><Link to="/">5</Link></li>
                            <li><Link to="/">6</Link></li> */}
                            <li>
                                <Link className="next" onClick={()=>{setPageBLSize(pageBLSize+2)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
            {/* /.mb-20 */}
        </div>
     );
}

export default UserManagement;