import React from 'react'
import styles from './navbar.module.css';
import NavLogo from './NavLogo';
import Link from 'next/link';
import { TfiMenu } from "react-icons/tfi";
import { FiX } from "react-icons/fi";



const Navbar = ({setSidebarfunc, sidebar}) => {
      const NavMenu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    // { name: "Address", path: "/address" },
    { name: "Services", path: "/services" },
    //  {name: "Home"},
    //  {name: "Home"},
  ];
  const sidebarfunc = () => {
    setSidebarfunc(!sidebar)
  };
  return (
     <div className={styles.navbar}>
      <div className={styles.nav_logo}>
        {/*<NavbarLogo />*/}
        <NavLogo/>
      </div>
      <div className={styles.nav_menu}>
        {NavMenu.map((item, index) => {
          return (
            <Link className={styles.nav_menu_item} key={index} href={item.path}  scroll={true} >
              {item.name}
            </Link>
          );
        })}
      </div>
      {/* -------mobile menu----- */}
      <div className={styles.mobile_menu}>
       {!sidebar && <div className={styles.mobile_menu_open} onClick={sidebarfunc}>
          <TfiMenu  />
        </div>}
        {sidebar && <div className={styles.mobile_menu_close} onClick={sidebarfunc}>
          <FiX />
        </div>}
        
      </div>
    </div>
  )
}

export default Navbar