import { Outlet } from "react-router-dom";
import Layout from "./Snippets/Layout";
import { Link,useNavigate,Redirect, useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";
import useIdle from "./useIdleTimeout";
import { useState,useEffect , useContext} from "react";
import { Container, Modal } from "react-bootstrap";
import { Col, Row,Button,Alert,Card} from "react-bootstrap";
import {createUserVisits} from "../apifunction";

function Job() {

    const history = useNavigate()
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
    const logout5=async()=> {                
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
      let walletType = "job";
    
      try {
        await createUserVisits(algoAddress, networkType, walletType);
        console.log("Update successful4");
      } catch (error) {
        console.error("Error updating:", error);
      }
    };
    return ( 
        <Layout getThemeMode={() => undefined}>
            <div className="container-fluid">
                <Outlet />
            </div>
            <Modal show={openModal} onHide={stay}>
        <Modal.Header closeButton>
          <Modal.Title>Your session is about to expire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your session is about to expire. You'll be automatically signed out.</p>
          <p>Do you want to stay signed in?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={logout5}>
            Sign out now
          </Button>
          <Button variant="primary" onClick={stay}>
            Stay signed in
          </Button>
        </Modal.Footer>
      </Modal>
        </Layout>
     );
}

export default Job;