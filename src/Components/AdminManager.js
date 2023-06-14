import Layout from "./Snippets/Layout";
import { Outlet } from "react-router-dom";

function AdminManager() {
    return ( 
        <Layout getThemeMode={() => undefined}>
            <div className="container-fluid">
                <Outlet />
            </div>
        </Layout>
     );
}

export default AdminManager;