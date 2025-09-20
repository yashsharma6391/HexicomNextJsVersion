"use client";
import React, { use, useEffect } from 'react'
import styles from './about.module.css'
import Aos from 'aos'
import { AboutData } from '@/src/data/AboutData'
const Aboutpage = () => {
     useEffect(() => {
        Aos.init({
          duration: 1000, // animation duration in ms
          once: true, // run animation only once
        });
      }, []);
  return (
     <div className={styles.About}>
   
      
      <div className={styles.aboutcompany} data-aos="fade-up">
        <h1 className={styles.aboutcompanyheading}>ABOUT US</h1>

        <div className={styles.profile_grid}>
          {AboutData.map((item, ind) => (
            <div className={styles.profile_detail} key={ind}>
              <div className={styles.profile_logo}>
                <img src={item.logo} alt="" />
              </div>
              <div className={styles.profile_name}>{item.profileName}</div>
              <div className={`${styles.profile_details} ${ind === 0 ? styles.special_detail : ""}`}>{item.profileDetail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Aboutpage