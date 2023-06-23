import Layout from "./Snippets/Layout";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchFavoriteDetails,deleteFavorite,fetchSigmadocdetails,createUserVisits } from "../apifunction";

function AdminManager(props) {
    useEffect(() => {
        userdata();
      }, []);
      
      const userdata = async () => {
        let algoAddress = localStorage.getItem("UserID");
        let networkType = "type";
        let walletType = "Admin-manager";
      
        try {
          await createUserVisits(algoAddress, networkType, walletType);
          console.log("Update successful11");
        } catch (error) {
          console.error("Error updating:", error);
        }
      };
    return ( 
        <Layout getThemeMode={() => undefined} roleType = {props.roleType}>
            <div className="container-fluid">
                <Outlet />
            </div>
        </Layout>
     );
}

export default AdminManager;