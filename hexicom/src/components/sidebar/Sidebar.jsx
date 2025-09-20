import React from 'react'
import styles from './sidebar.module.css'
import Link from 'next/link';

const Sidebar = ({sidebar}) => {

      const NavMenu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    // { name: "Address", path: "/address" },
    { name: "Services", path: "/services" },
    //  {name: "Home"},
    //  {name: "Home"},
  ];
  return (
    <div className={sidebar ? styles.Sidebar : styles.Sidebar_close}>
        <div className={styles.sidebar_items}>
           {NavMenu.map((item, ind)=>(
            <Link className={styles.sidebar_item} key={ind} href={item.path} scroll={true}>{item.name}</Link>
           ))} 
        </div>
    </div>
  )
}

export default Sidebar