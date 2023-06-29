import { Button, Col, Dropdown, Form, InputGroup, Modal, Row, Table } from "react-bootstrap";
import Eye from '../asserts/images/eye-icon.svg'
import Question from '../asserts/images/question-icon.svg'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { OrgAdminmailcheckget1, OrgTenentcheckget, DeleteOrgUser } from "../apifunction";
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import {createUserVisits,getTicketsById,ResolveTicket,getTennantId} from '../apifunction';

function QueryManagement() {
    const [disabled, setDisabled] = useState(true);
    const [search, setSearch] = useState(false);
    const [show, setShow] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [ticketlistTable, setticketlistTable] = useState([]);
    const [sendEmail, setSendEmail] = useState();
    const [idofuser, setid] = useState();
    const [gotValue, setGotValue] = useState(false);
    const [startvalue, setstartvalue] = useState(0);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[pageBLSize,setPageBLSize] = useState(8);  
    const [rowSize, setRowSize] = useState();   
    const [filterstatus, setFilterStatus] = useState("");   
    const [searchQuery, setSearchQuery] = useState(false);
    const [searchDetails, setsearchDetails] = useState([]);
    const [userManage, setUserManage] = useState([
        {"Name": "Create Session", "APILink": "https://sb-juul-regone-sandbox.veevavault.com/api/v22.3/auth"},
         {"Name": "Fetch Latest Document", "APILink": "https://sb-juul-regone-sandbox.veevavault.com/api/v22.3/query"},
         {"Name": "File Download", "APILink": "https://sb-juul-regone-sandbox.veevavault.com/api/v22.3/objects/documents/docId/file"}
        ]);
   
    const handleSearch = (searchQuer) => {
        if(searchQuer === null || searchQuer === "" || searchQuer === undefined || searchQuer === "null"){
            setSearchQuery(false)
        }
        else{
            setSearchQuery(true)
            const filteredJobLists = userManage.filter((r) =>
              r.Name.toLowerCase().includes(searchQuer.toLowerCase())
            );
            setsearchDetails(filteredJobLists);
        }
        
        // console.log("search",filteredJobLists)
        // setFilteredJobLists(filteredJobLists);
      };
   
  

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

    return ( 
        <div>
            <ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/>
            <Row className="mb-20">
                <Col md={6} xl={4} xxl={3}>
                    <h4 className="page-title mb-0">Query Details</h4>
                </Col>
            </Row>

            <Row className="mb-20" style={{minHeight: '40px'}}>
                <Col xs={6} className="ms-md-0 d-flex align-items-center justify-content-end ms-auto order-md-1">
                    {/* <Link to="/admin-manager/add-user" className="btn-gray-black btn btn-gray rounded-pill me-2">Add user</Link> */}
                  
                    <Button variant="outline-gray" className="me-0" onClick={() => {setSearch(!search); handleSearch("")}}>
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
                                    placeholder="Search by Query..."
                                    onChange={(e) => {handleSearch(e.target.value)}}
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
                           
                            <th className="text-center">Sl no</th>
                            <th className="text-center">API</th>
                            <th className="text-center">Queries</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                    {searchQuery ? <>
                       
                    {searchDetails.map((x,y)=>{
                            
                              return(
                                  <tr>
                                    
                                  
                                    {/* <td width="84">
                                        <div className="d-flex justify-content-center">
                                            <Form.Check
                                                className="mb-0 check-single"
                                                type='checkbox'
                                                id= "checked"
                                                onClick={() => checkedTicketButton(x.mailId,x.id)}
                                            />
                                        </div>
                                    </td>                                   */}
                                 
                                  <td className="text-center">{y+1}</td>
                                  <td className="text-center">{x.Name}</td>
                                  <td className="text-center">{x.APILink}</td>
                             
                                  </tr>
                              )
                              })
                              }
                           </> : <>  {userManage.map((x,y)=>{
                                 return(
                                <tr>
                            
                                  <td className="text-center">{y+1}</td>
                                  <td className="text-center">{x.Name}</td>
                                  <td className="text-center">{x.APILink}</td>
                               
                                </tr>
                            )
                        })
                    }                    
          </>}
                      
                    </tbody>
                </Table>

               
            </div>
            {/* /.mb-20 */}
        </div>
     );
}

export default QueryManagement;