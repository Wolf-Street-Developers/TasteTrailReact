import React from 'react';
import styles from './Footer.module.css'


const Footer = () => {
    return ( 
        <div className={styles.main_container}>
            <div className={styles.footer_container}>
                <div className={styles.footer_text}>
                    <p>&copy; 2024 TasteTrail. All rights reserved.</p>
                </div>
            </div>
        </div> 
    );
}
 
export default Footer;