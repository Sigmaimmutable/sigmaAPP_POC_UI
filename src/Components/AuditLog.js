import { Button, Col, Dropdown, Form, InputGroup, Modal, Row, Table } from "react-bootstrap";
import Layout from "./Snippets/Layout";
import Question from '../asserts/images/question-icon.svg'
import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { OrgAdminmailcheckget1, OrgTenentcheckget, DeleteOrgUser, getTennantId,Orgadminsignup,Sessionstatusget, Sessionstatusget1 } from "../apifunction";
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import {CreateOrganizationPost,CreateOrguserrolepost,createUserVisits} from '../apifunction';
import AuthContext from "./AuthContext";
 

function Audit(props) {
    const [limit, setlimit] = useState(249);
    const [search, setSearch] = useState(false);
    const [show, setShow] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [memberlistTable, setmemberlistTable] = useState([]);
    const [userManage, setUserManage] = useState([""]);
    const [deleteEmail, setDeleteEmail] = useState();
    const [gotValue, setGotValue] = useState(false);
    // const [pageSize, setPageSize] = useState(0);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[pageBLSize,setPageBLSize] = useState(8);  
    const [pageSize, setPageSize] = useState(0);   
    const [searchQuery, setSearchQuery] = useState(false);
    const [searchDetails, setsearchDetails] = useState([]);
    const [filterDisplay, setFilterDisplay] = useState("All");
    // const [firstvalue, setstartvalue] = useState(0);
    // const [startvalue, setstartvalue] = useState(0);
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


    // const Users =async(limit)=>{
    //     let r=[];
    //     let countlist=0;
    //     try {          
    //         let [check, data] = await Sessionstatusget1(limit);
    //         if (check) {  
    //             setUserManage(data);
              
    //       }
    //       console.log("ticket",data);
    //         // settenentid(tenentid.tenantId);
    //         // console.log("ticket",data);
                
    //       } catch (error) {  
    //         console.error(error);            
    
    //       }
    // }


//     const Users = async (start) => {
//         let r = [];
//         try {
//           let [check, data] = await Sessionstatusget1(start);
//           if (check) {
//             setUserManage(data);

//           }
//           console.log("ticket",data);
//         } catch (error) {
//           console.error(error);
//         }
//       };



//     useEffect(() => {
//         Users();
// },[])


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



      const handleFilter = (searchQuer) => {
        if(searchQuer === null || searchQuer === "" || searchQuer === undefined || searchQuer === "null"){
            setSearchQuery(false);
            setFilterDisplay("All");
        }
        else{
            setFilterDisplay(searchQuer);
            setSearchQuery(true)
            const filteredJobLists = userManage.filter((r) =>
              r.roleType.toLowerCase().includes(searchQuer.toLowerCase())
            );
            setsearchDetails(filteredJobLists);
        }
      };

    const memberTableFetch = async(start) => {            
        if(localStorage.getItem("UserID")  === null || localStorage.getItem("UserID")  === "" || localStorage.getItem("UserID")  === " " || localStorage.getItem("UserID") === undefined || localStorage.getItem("UserID") === ''){
        }
        else{
          let r = [];
      try {          
        let tenantid = await getTennantId(localStorage.getItem('UserID'));
      
        // settenentid(tenentid.tenantId);
        console.log("tenetidnew",tenantid);
          let [value, data] = await OrgTenentcheckget(tenantid, start);  
          if (value) { 
            // localStorage.setItem("userManageData", JSON.stringify(data)); 
                setUserManage(data);
          }
      } catch (error) { 
            console.error(error);        
      }                
      
    }
}

      
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
      const decrementBLSize=()=>{
        if(pageBLSize >= 4){
        setPageBLSize(pageBLSize-2)
        }        
      }
      const pagination = async(start) =>{
        setstartvalue(start);
        await Users(start);
    }

  
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
                    {/* <div className="d-flex pt-4 align-items-center justify-content-center">
                        <Button type="submit" variant="dark" className="btn-button btn-sm" onClick={() => Deleteorguser(deleteEmail)}>Yes</Button>
                        <Button type="reset" variant="outline-dark" className="btn-button btn-sm ms-3" onClick={handleClose}>No</Button>
                    </div> */}
                </Modal.Body>
            </Modal>
           
            <div className="mb-20">
            <Table hover responsive>
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
            <td className="text-center">{y + 1}</td>
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
            <td className="text-center">{y + 1}</td>
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
</Table>

                <Row className="mt-4">
                <Col md={8} className="d-flex justify-content-md-end justify-content-center">
                        <ul className="d-flex pagination list-unstyled">
                            <li>
                            <Link  className={startvalue !== 10 ? 'next' : startvalue === 10 ? 'prev disabled' : ''} onClick={()=>pagination(startvalue-10)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li><Link className="active" onClick={()=>{pagination(startvalue+10)}}>{startvalue?(startvalue/10)+1:'1'}</Link></li>
                            {/* <li><Link className={StartValue === 10 ? 'active' : ''} onClick={()=>pagination(10)}>2</Link></li>
                            <li><Link className={StartValue === 20? 'active' : ''} onClick={()=>pagination(20)}>3</Link></li>
                            <li><Link className={StartValue === 30? 'active' : ''} onClick={()=>pagination(30)}>4</Link></li>
                            <li><Link className={StartValue === 40? 'active' : ''} onClick={()=>pagination(40)}>5</Link></li>
                            <li><Link className={StartValue === 50 ? 'active' : ''} onClick={()=>pagination(50)}>6</Link></li> */}
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
            {/* /.mb-20 */}
        </div>
        
     );
}

export default Audit;