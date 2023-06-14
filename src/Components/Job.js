import { Outlet } from "react-router-dom";
import Layout from "./Snippets/Layout";

function Job() {
    return ( 
        <Layout getThemeMode={() => undefined}>
            <div className="container-fluid">
                <Outlet />
            </div>
        </Layout>
     );
}

export default Job;