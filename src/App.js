import React from 'react';
import { Routes, Route } from "react-router-dom"
import './asserts/fonts/fonts.css';
import './App.scss';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
// import Google from './Components/Google';
import ResetPassword from './Components/resetPassword';
import ResetPasswordSubmit from './Components/resetPasswordSubmit';
import SignInwithEnterpriseSSO from './Components/SignInwithEnterpriseSSO';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import DocumentDetails from './Components/DocumentDetails';
import DocumentDetailsSingle from './Components/DocumentDetailsSingle';
import Document from './Components/Document';
import ResourcePersistJob from './Components/ResourcePersistJob';
import JobDetails from './Components/JobDetails';
import Job from './Components/Job';
import FavouriteDocuments from './Components/FavouriteDocuments';
import Admin from './Components/Admin';
import AdminMain from './Components/AdminMain';
import NodeTransactionsReport from './Components/NodeTransactionsReport';
import AdminManager from './Components/AdminManager';
import APILogs from './Components/APILogs';
import CreateOrg from './Components/CreateOrg';
import Environment from './Components/Environment';
import HelpSupport from './Components/HelpSupport';
import ImmutableRecordJobs from './Components/ImmutableRecordJobs';
import UserManagement from './Components/UserManagement';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={ <SignIn/> } />
        <Route path="/sign-up" element={ <SignUp/> } />
        <Route path="/reset-password" element={ <ResetPassword /> } />
        <Route path="/reset-submission" element={ <ResetPasswordSubmit /> } />
        <Route path="/sign-in-with-enterprise-sso" element={ <SignInwithEnterpriseSSO /> } />
        {/* <Route path="/google" element={ <Google /> } /> */}
        <Route path="/account" element={ <Profile /> } />
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/document-details" element={<Document />}>
          <Route index element={ <DocumentDetails /> } />
          <Route path=":slug" element={ <DocumentDetailsSingle /> } />
        </Route>
        <Route path="/job" element={<Job />}>
          <Route index element={ <ResourcePersistJob /> } />
          <Route path="/job/job-details" element={ <JobDetails /> } />
          <Route path="/job/immutable-record-jobs" element={ <ImmutableRecordJobs /> } />
        </Route>
        <Route path="/favourite-documents" element={ <FavouriteDocuments /> } />
        <Route path="/admin" element={ <AdminMain /> }>
          <Route index element={ <Admin /> } />
          <Route path=":node" element={ <NodeTransactionsReport /> } />
        </Route>
        <Route path="/admin-manager" element={ <AdminManager /> }>
          <Route index element={ <APILogs /> } />
          <Route path="/admin-manager/create-org" element={ <CreateOrg /> } />
          <Route path="/admin-manager/environment" element={ <Environment/> } />
          <Route path="/admin-manager/user-management" element={ <UserManagement/> } />
          <Route path="/admin-manager/add-user" element={ <AddUser/> } />
        </Route>
        <Route path="/help-support" element={ <HelpSupport/> } />
        {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  );
}

export default App;
