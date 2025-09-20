"use client"; 
import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { usePathname } from "next/navigation";
import Footer from "./Footer";



export default function Layout({ children }) {
  const [sidebar, setSidebar] = useState(true);
  const pathname = usePathname()
    useEffect(() => {
    setSidebar(false);
  }, [pathname]);

  const setSidebarfunc = (value) => setSidebar(value);
   const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { sidebar, setSidebarfunc })
  );

  return (
    <div className="app">
      <Navbar sidebar={sidebar} setSidebarfunc={setSidebarfunc} />
      <Footer/>
      {sidebar &&<Sidebar sidebar={sidebar} />}
      <main>{childrenWithProps}</main>
    </div>
  );
}
// export default Layout;