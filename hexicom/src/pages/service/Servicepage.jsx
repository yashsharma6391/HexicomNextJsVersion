"use client";
import React from 'react'
import { useEffect, useRef, useState  } from "react";
import styles from './servicepage.module.css';
import Aos from 'aos';
import { ServicesData } from '@/src/data/ServicesData';
export const Servicepage = () => {
      const refs = useRef([]);
  const [visible, setVisible] = useState([]);
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true, // run animation only once
    });
  }, []);
  
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setVisible((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className={styles.services_page}>
     
      <div className={styles.services_container} data-aos="fade-up">
        <div className={styles.service_content}>
          <h1>OUR SERVICES</h1>
          <div className={styles.service_para}>
            <p>
              At H£XICOM, we provide end-to-end, future-ready solutions across
              technology, infrastructure, energy, and manpower. Acting as your
              single-window partner, we take complete responsibility — from
              concept and design to execution, operations, and maintenance. Our
              diverse portfolio empowers businesses and institutions with
              integrated, turnkey solutions that drive efficiency, reliability,
              and sustainable growth
            </p>
          </div>
          <div className={styles.service_grid}>
            {ServicesData.map((category, ind) => (
              <div    className={`${styles.single_service_card} ${
                  visible.includes(ind) ? styles["in-view"] : ""
                }`}
                key={ind}
                data-index={ind}
                ref={(el) => (refs.current[ind] = el)}>
                <div className={styles.service_logo}>
                  <img src={category.Image} alt="" />
                </div>
                <div className={styles.service_name}>{category.ServiceName}</div>
                <div className={styles.service_type}>
                 {category.ServiceType}
                </div>
                <div className={styles.services_details}>
                  <h3>Services:</h3>
                  <div className={styles.service_detail_list}>
                    <ul>
                      {category.ServivceDetails.map((list, i)=>(
                        <li key={i}>
                        {list}
                      </li>
                      ))}
                      
                    </ul>
                  </div>
                </div>
              </div>
            ))}

           
          </div>
          <div className={styles.why_choose_hexicom}>
            <h1>Why Choose H£XICOM</h1>
            <div className={styles.points}>
              <ul>
                <li>One Partner – All Solutions: Technology, infrastructure & manpower under one roof</li>
                <li>End-to-End Expertise: From concept to commissioning, operations & O&M</li>
                <li>Future-Ready Focus: Strong presence in e-mobility, renewables & smart infrastructure</li>
                <li>Trusted Delivery: Proven track record with complex, large-scale projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Servicepage
