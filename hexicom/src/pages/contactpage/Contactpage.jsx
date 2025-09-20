"use client";
import Aos from 'aos';
import React, { useEffect } from 'react'
import styles from './contactpage.module.css'
import { contactItems } from '@/src/data/ContactData';
const Contactpage = () => {
      useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true, // run animation only once
    });
  }, []);
    return (
      <div className={styles.contact_page}>
     
      <div className={styles.contact} data-aos="fade-up">
        <h1>CONTACT INFORMATION</h1>
        <div className={styles.contactdiv}>
          {contactItems.map((item, ind)=>(
            <div className={styles.Contact_info} key={ind}>
            <div className={styles.info_icon}>
             < item.icon className={item.iconClass}/>
            </div>
            <div className={styles.info_name}>{item.title}</div>
            <div className={styles.details}>{item.detailstitle}<a href={item.link}>{item.detailslink}</a></div>
          </div>
          ))}
      
        </div>
      </div>
    </div> 
  )
}

export default Contactpage