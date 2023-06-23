
import Layout from "./Snippets/Layout";
import IconDU from '../asserts/images/card-icon-du.svg'
import { PieChart } from "./Snippets/PieChart";
import { BarChart } from "./Snippets/BarChart";
import { useState,useEffect , useContext} from "react";
import {OrgAdminmailcheckget,Userprofileupdate,getTennantId,userprofileget} from "../apifunction";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import useIdle from "./useIdleTimeout";
import {createUserVisits} from "../apifunction";
import { Container, Modal } from "react-bootstrap";
import { Col, Row,Button,Alert,Card} from "react-bootstrap";

function Dashboard(props) {
    const [theme, setThemeColor] = useState('');
    const [documentsUploadedCount, setDocumentsUploadedCount] = useState(0); // State for documents uploaded
    const [nftsCreatedCount, setNftsCreatedCount] = useState(0); // State for NFTs created
    const [monthlyData, setMonthlyData] = useState([]); // State for monthly data
    const [UserName,setUserName] = useState("");
    const [lastname,setlastname] = useState("");
    const[getIProfile,setgetIProfile]=useState("");  
   
    const setTheme = (e) => {
      setThemeColor(e);
    }
    const history = useNavigate();
    const [openModal, setOpenModal] = useState(false)
        
    const { logout } = useContext(AuthContext);
        
    const handleIdle = () => {
        setOpenModal(true);
    }
    const { idleTimer } = useIdle({ onIdle: handleIdle, idleTime: 5 })
    
    const stay = () => {
        setOpenModal(false)
        idleTimer.reset()
    }
    
    const handleLogout = () => {
        logout()
        setOpenModal(false)
    } 
    const logout3=async()=> {                
        try {
            localStorage.setItem("Login",false)
            //await auth.signOut()            
            history("/sign-up")
            window.location.reload(false)
          } catch(e){
            console.log("Error",e)
            //setError("Failed to log out")
          }
        
    }
    useEffect(() => {
      userdata();
    }, []);
    
   
    
    const userdata = async () => {
      let algoAddress = localStorage.getItem("UserID");
      let networkType = "type";
      let walletType = "home";
    
      try {
        await createUserVisits(algoAddress, networkType, walletType);
        console.log("Update successful9");
      } catch (error) {
        console.error("Error updating:", error);
      }
    };
    
    
    
  
    
    const getprofiledetails = async() =>{
      let [data,userprofiledetail]=await userprofileget(localStorage.getItem("UserID"));
      setgetIProfile(userprofiledetail);
      console.log("userdetail1",userprofiledetail,userprofiledetail.emailId);
      console.log("userdetail11",getIProfile.emailId,getIProfile.firstName);
     }
     useEffect(()=>{getprofiledetails()})
    // useEffect(() => {
    //   // Fetch the raw data records
    //   fetchRawData('543609ec-58ba-4f50-9757-aaf149e5f187');
    // }, []);
    useEffect(() => {
        documentsUploaded();
      }, []);
    
      const documentsUploaded = async () => {
        try {
          let tnId = await getTennantId();
          let id = tnId;
          let [check, data2] = await OrgAdminmailcheckget(id);
          console.log("valid1", check);
    
          if (check) {
            const totalUploadedCount = data2.reduce((total, record) => total + record.rawDocs, 0);
            setDocumentsUploadedCount(totalUploadedCount);
            
        const totalNftsCreatedCount = data2.reduce((total, record) => total + record.iRecDocs, 0);
        setNftsCreatedCount(totalNftsCreatedCount);
          }
        } catch (error) {
          console.error(error);
        }
      };
    //   const pieChartData = [
    //     { label: 'Documents Uploaded', value: documentsUploadedCount },
    //     { label: 'NFTs Created', value: nftsCreatedCount }
    //   ];
    

    useEffect(() => {
        fetchMonthlyData(); // Fetch the monthly data
      }, []);
      
      const fetchMonthlyData = async () => {
        try {
          let tnId = await getTennantId();
          const id = tnId;
          const [check, data] = await OrgAdminmailcheckget(id);
          console.log("valid1", check);
      
          if (check) {
            setMonthlyData(data);
          }
        } catch (error) {
          console.error(error);
        }
      };
      if(localStorage.getItem('Login') === false || localStorage.getItem('Login') === null || localStorage.getItem('Login') === undefined || localStorage.getItem('Login') === "" || localStorage.getItem('Login') === "false"){            
        return <>{history("/")}</>;
      } else  { 
    return ( 
        <Layout getThemeMode={(e) => setTheme(e)} roleType = {props.roleType}>
            <div className="container-fluid">
                <Row className="mb-3">
                    <Col md={6} xl={4} xxl={3}>
                        <h2 className="font-bold">Hi, {localStorage.getItem("UserName")===""||localStorage.getItem("UserName")===null||localStorage.getItem("UserName")===undefined || !localStorage.getItem("UserName")? "User":localStorage.getItem("UserName")}!</h2>
                        <p>Welcome to Sigma! We always appreciate you to stay connected and stay updated on Sigma.</p>
                    </Col>
                </Row>

                <Row className="gx-3 mb-1">
                    <Col xs={6} lg={3} className="mb-3">
                        <div className="info-card info-card-1 d-flex flex-column justify-content-between">
                            <h4 className="d-flex align-items-center"><img src={IconDU} alt="IconDU" /> <span>Documents Uploaded</span></h4>
                            <h3 className="mb-0">{documentsUploadedCount}</h3>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="mb-3">
                        <div className="info-card info-card-2 d-flex flex-column justify-content-between">
                            <h4 className="d-flex align-items-center"><img src={IconDU} alt="IconDU" /> <span>NFTs Created</span></h4>
                            <h3 className="mb-0">{nftsCreatedCount}</h3>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="mb-3">
                        <div className="info-card info-card-3 d-flex flex-column justify-content-between">
                            <h4 className="d-flex align-items-center"><img src={IconDU} alt="IconDU" /> <span>Total Documents</span></h4>
                            <h3 className="mb-0">{documentsUploadedCount + nftsCreatedCount}</h3>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="mb-3">
                        <div className="info-card info-card-4 d-flex flex-column justify-content-between">
                            <h4 className="d-flex align-items-center"><img src={IconDU} alt="IconDU" /> <span>Total Users</span></h4>
                            <h3 className="mb-0">04</h3>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={5} xl={4} className="mb-md-0 mb-4">
                        <Card className="shadow border-0 h-100">
                            <Card.Body className="p-lg-4 p-md-3 p-2">
                            <Row className="justify-content-center h-100 align-items-center">
                                    <Col md={11}>
                            <PieChart theme={theme} data={[
  { label: 'Documents Uploaded', value: documentsUploadedCount },
  { label: 'NFTs Created', value: nftsCreatedCount }
]} />
</Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={7} xl={8}>
                        <Card className="shadow border-0 h-100">
                            <Card.Body className="p-lg-4 p-md-3 p-2">
                            <Row className="justify-content-center h-100 align-items-center">
                                    <Col md={10}>
                            <BarChart theme={theme} monthlyData={monthlyData} />
                            </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Modal show={openModal} onHide={stay}>
        <Modal.Header closeButton>
          <Modal.Title>Your session is about to expire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your session is about to expire. You'll be automatically signed out.</p>
          <p>Do you want to stay signed in?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={logout3}>
            Sign out now
          </Button>
          <Button variant="primary" onClick={stay}>
            Stay signed in
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        </Layout>
     );
    }
}

export default Dashboard;