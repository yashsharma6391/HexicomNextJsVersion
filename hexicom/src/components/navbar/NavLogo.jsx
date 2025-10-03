import React from 'react'
import styles from './navLogo.module.css';
const NavLogo = () => {
  return (
     <div className={styles.companylogo}>
      <div className={styles.logo_img}>
        <img src="Loogo.png" alt="" />
      </div>
      <div className={styles.companyname}>
        <div className={styles.Letters}>
          <div className={styles.leter}>h</div>
          <div className={styles.leter}>e</div>
          <div className={styles.leter}>x</div>
          <div className={styles.leter}>i</div>
          <div className={styles.leter}>c</div>
          <div className={styles.leter}><img src="Loogo.png" alt="" /></div>
          <div className={styles.leter}>m</div>
        </div>
        <div className={styles.arrows}>
          <div className={styles.arrow1}></div>
          <div className={styles.arrow2}></div>
          <div className={styles.arrow3}></div>
          <div className={styles.arrow4}></div>
        </div>
        
        


        
      </div>
       <div className={styles.registerIcon}>&reg;</div>
       <div className={styles.tagline}>
          A Integrated Bridging of Technology & Infrastructure”
        </div>
    </div>
  )
}

export default NavLogo
