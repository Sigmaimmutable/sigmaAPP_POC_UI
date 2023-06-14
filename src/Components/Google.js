import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import React, { useState,useEffect } from 'react';
import { Link,useNavigate,Redirect, useLocation } from "react-router-dom";
// import AuthContext from "./AuthContext";
// import useIdle from "./useIdleTimeout";
// import { useContext } from "react"
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// import { Container, Modal } from "react-bootstrap";
// import { Col, Row,Button,Alert} from "react-bootstrap";

import {CreateOrganizationPost,CreateOrguserrolepost,OrgAdminmailcheckget1,Orgadminsignup} from '../apifunction';

function App() {
    const history = useNavigate()
    
  return (
    <div>
      <LoginSocialGoogle
        client_id="308436375718-6q7sm9h4gmcm6l5901uv1s523ppoidvi.apps.googleusercontent.com"
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={async ({ provider, data }) => {
            console.log("provider", provider, data.email);
            try {
              let [emailvalid, data2] = await OrgAdminmailcheckget1(data.email);
              console.log("emailvalid1", emailvalid);
          
              if (emailvalid== true) {
                history("/");
              }
            } catch (error) {
              console.error(error);
            }
          }}
          
          
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
      
    
    </div>
    
  );
}

export default App;

