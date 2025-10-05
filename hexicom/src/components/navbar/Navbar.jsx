import React from 'react'
import styles from './navbar.module.css';
import NavLogo from './NavLogo';
import Link from 'next/link';
import { TfiMenu } from "react-icons/tfi";
import { FiX } from "react-icons/fi";



const Navbar = ({setSidebarfunc, sidebar}) => {
      const NavMenu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" , dropdown: true,
      subItems: [
        { name: "IT &Telecom", path: "" },//"/services/IT &Telecom"
        { name: "IT Networking & Managed Services", path: "" },//"/services/IT Networking & Managed Services"
        { name: "Electrical & Automation", path: "" },//"/services/Electrical & Automation"
        { name: "E-Mobility Solutions", path: ""},//"/services/E-Mobility Solutions" 
        { name: "Solar EPC Renewable Energy", path: "" },//"/services/Solar EPC Renewable Energy"
        { name: "Civil Infrastructure", path: "" },//"/services/Civil Infrastructure"
        {name:"CCTV & Surveillance", path:""},//"/services/CCTV & Surveillance"
                {name:"Facility Management", path:""},//"/services/Facility Management"
        {name:"Manpower Outsourcing", path:""}//"/services/Manpower Outsourcing"

      ], },
    { name: "Contact Us", path: "/contact" },
    // { name: "Address", path: "/address" },
    
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
        {NavMenu.map((item, index) => (
           <React.Fragment key={index}>
          {/* return (
            <Link className={styles.nav_menu_item} key={index} href={item.path}  scroll={true} >
              {item.name}
            </Link>
          ); */}
                     {item.dropdown ? (
              <div className={styles.dropdown_wrapper}>
                {item.path ? (
                  <Link href={item.path} className={styles.nav_menu_item}>
                    {item.name}
                  </Link>
                ) : (
                  <span className={styles.nav_menu_item}>{item.name}</span>
                )}

                <div className={styles.dropdown}>
                  {item.subItems.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.path}
                      className={styles.dropdown_items}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={item.path}
                className={styles.nav_menu_item}
              >
                {item.name}
              </Link>
          )}
            </React.Fragment>
    

                 
        ))}
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
