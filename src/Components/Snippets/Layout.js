import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout(props) {
    const setTheme = (e) => {
        props.getThemeMode(e)
    }
    
    return ( 
        <div className="app-outer">
            <Sidebar getTheme={(e) => setTheme(e)} />
            <Header />

            <main className="app-main">
                {props.children}
            </main>
        </div>
     );
}

export default Layout;