import { Button, Col, Dropdown, Form, InputGroup, Modal, Row, Table } from "react-bootstrap";
import Question from '../asserts/images/question-icon.svg'
import { Link,useNavigate, } from "react-router-dom";
import { useEffect, useState, useContext,React } from "react";
import { Sessionstatusget1,uservisitrecords } from "../apifunction";
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';

 
function Audit(props) {
    const [limit, setlimit] = useState(249);
    const [search, setSearch] = useState(false);
    const [show, setShow] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [memberlistTable, setmemberlistTable] = useState([]);
    const [userManage, setUserManage] = useState([""]);  //setuservisit
    const [uservisit1, setuservisit] = useState([""]);
    const [deleteEmail, setDeleteEmail] = useState();
    const [gotValue, setGotValue] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    const [searchQuery, setSearchQuery] = useState(false);
    const [searchDetails, setsearchDetails] = useState([]);
    const [filterDisplay, setFilterDisplay] = useState("All");
    const [startvalue, setstartvalue] = useState(0);
    console.log("search",searchQuery)
    const handleSearch = (searchQuer) => {
        if(searchQuer === null || searchQuer === "" || searchQuer === undefined || searchQuer === "null"){
            setSearchQuery(false)
        }
        else{
            setSearchQuery(true)
            const filteredJobLists = userManage.filter((r) =>
              r.emailId.toLowerCase().includes(searchQuer.toLowerCase())
            );
            setsearchDetails(filteredJobLists);
        }
      };


const Users =async(start)=>{
    let r=[];
    let countlist=0;
    try {          
        let [check, data] = await Sessionstatusget1(start);
        if (check) {  
            setUserManage(data);
      }
        // settenentid(tenentid.tenantId);
        console.log("ticket",data);
               
      } catch (error) {  
        console.error(error);            

      }
}
useEffect(() => {
    console.log("checkdataget updated:", userManage);
  },[userManage]);



const ticketTableFetch = async () => {
    if (
      localStorage.getItem("UserID") === null ||
      localStorage.getItem("UserID") === "" ||
      localStorage.getItem("UserID") === " " ||
      localStorage.getItem("UserID") === undefined ||
      localStorage.getItem("UserID") === ""
    ) {
    } else {
      try {
        await Users(startvalue);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    ticketTableFetch();
  }, [startvalue]);

      const pagination = async(start) =>{
        setstartvalue(start);
        await Users(start);
    }
    const uservisit = async () => {
      try{
          let [check, data2] = await uservisitrecords();
          setuservisit(data2);
          console.log("tenetid",data2);
        
      }catch(err){
          console.error(err);
      }
  }
useEffect(()=>{
  uservisit();
}

);
  
    return ( 
        // <Layout getThemeMode={() => undefined} roleType = {props.roleType} getIProfile = {props.getIProfile}>
        <div className="container-fluid">
            <ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/>
            <Row className="mb-20">
                <Col md={6} xl={4} xxl={3}>
                    <h4 className="page-title mb-0">Activity Details</h4>
                </Col>
            </Row>

            <Row className="mb-20" style={{minHeight: '40px'}}>
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
                                    placeholder="Search by User name..."
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
                </Modal.Body>
            </Modal>
           
            <div className="mb-20">
            {/* <Table hover responsive>
  <thead>
    <tr>
      <th className="text-center">Sl no</th>
      <th className="text-center">Email Id</th>
      <th className="text-center">Role Type</th>
      <th className="text-center">Activity</th>
      <th className="text-center">Login Time</th>
      <th className="text-center">Logout Time</th>
    </tr>
  </thead>
  <tbody>
    {searchQuery
      ? searchDetails.map((x, y) => (
          <tr key={x.id}>
            <td className="text-center">{x.id}</td>
            <td className="text-center">{x.mailId}</td>
            <td className="text-center">{x.roleType}</td>
            <td className="text-center">{x.activity}</td>
            <td className="text-center">{x.loginTime}</td>
            <td className="text-center">{x.logoutTime}</td>
          </tr>
        ))
      : Array.isArray(userManage) // Check if userManage is an array
      ? userManage.map((x, y) => (
          <tr key={x.id}>
            <td className="text-center">{x.id}</td>
            <td className="text-center">{x.mailId}</td>
            <td className="text-center">{x.roleType}</td>
            <td className="text-center">{x.activity}</td>
            <td className="text-center">{x.loginTime}</td>
            <td className="text-center">{x.logoutTime}</td>
          </tr>
        ))
      : (
          <tr>
            <td colSpan="6" className="text-center">
              No data available
            </td>
          </tr>
        )}
  </tbody>
</Table> */}


<Table hover responsive>
    <thead>
        <tr>
            <th className="text-center">Sl no</th>
            <th className="text-center">Email Id</th>
            <th className="text-center">Role Type</th>
            <th className="text-center">Activity</th>
            <th className="text-center">Login Time</th>
            {/* <th className="text-center">Logout Time</th> */}
        </tr>
    </thead>
    <tbody>
        {searchQuery ? (
            searchDetails.map((x) => (
                <tr key={x.id}>
                    <td className="text-center">{x.id}</td>
                    <td className="text-center">{x.mailId}</td>
                    <td className="text-center">{x.roleType}</td>
                    <td className="text-center">
                        {!uservisit1.find((visit) => visit.algoAddress === x.mailId) && x.activity}
                        {uservisit1.find((visit) => visit.algoAddress === x.mailId) && (
                            <div>
                                Wallet Type: {uservisit1.find((visit) => visit.algoAddress === x.mailId).walletType}
                            </div>
                        )}
                    </td>
                    <td className="text-center">{x.loginTime}</td>
                    {/* <td className="text-center">{x.logoutTime}</td> */}
                </tr>
            ))
        ) : (
            Array.isArray(userManage) &&
            userManage.map((x) => (
                <tr key={x.id}>
                    <td className="text-center">{x.id}</td>
                    <td className="text-center">{x.mailId}</td>
                    <td className="text-center">{x.roleType}</td>
                    <td className="text-center">
                        {!uservisit1.find((visit) => visit.algoAddress === x.mailId) && x.activity}
                        {uservisit1.find((visit) => visit.algoAddress === x.mailId) && (
                            <div>
                                 {uservisit1.find((visit) => visit.algoAddress === x.mailId).walletType}
                            </div>
                        )}
                    </td>
                    <td className="text-center">{x.loginTime}</td>
                    {/* <td className="text-center">{x.logoutTime}</td> */}
                </tr>
            ))
        )}
        {!searchQuery && !Array.isArray(userManage) && (
            <tr>
                <td colSpan="6" className="text-center">
                    No data available
                </td>
            </tr>
        )}
    </tbody>
</Table>







                <Row className="mt-4">
                <Col md={8} className="d-flex justify-content-md-end justify-content-center">
                        <ul className="d-flex pagination list-unstyled">
                            <li>
                            <Link className={startvalue !== 0 ? 'next' : startvalue === 0 ? 'prev disabled' : ''} onClick={()=>{pagination(startvalue-10)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li><Link className="active" onClick={()=>{pagination(startvalue+10)}}>{startvalue?(startvalue/10)+1:'1'}</Link></li>
                            <li>
                            <Link className="next" onClick={()=>{pagination(startvalue+10)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div> 
        </div>
        
     );
}

export default Audit;