import { Col, Row } from "react-bootstrap";
import Layout from "./Snippets/Layout";
import { useState } from "react";
import {  Outlet } from "react-router-dom";

function Document() {
    return ( 
        <Layout getThemeMode={() => undefined}>
            <div className="container-fluid">
                <Outlet />

            </div>
        </Layout>
     );
}

export default Document;