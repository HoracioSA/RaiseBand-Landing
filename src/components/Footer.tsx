import Link from 'next/link';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles/components/Footer.module.css';
import { DevicesSize } from './Constatnts/Index';
import Select from './Select';
export function Footer(){
    const isOnTablet = useMediaQuery({maxWidth:DevicesSize.tablet})
    const [info, setInfo] = useState('')
    return(
        <div className={styles.container}>
                {!isOnTablet && (
            <div className={styles.footerContent}> 
                <div className={styles.contactContainer}>
                    <div className={styles.cotactNumber}>
                        <span>+49(621) 53399112</span>
                        <p>Call us</p>
                    </div>

                    <div className={styles.starsContainer}>
                        <span>4.5</span>
                    </div>
 
                    <div>
                        <Select
                            name="Info"
                            placeholder="Info"
                            value={info}
                            onChange={(e)=>{setInfo(e.target.value)}}
                            options={[
                                {value: 'Geld-Zurück-Garantie', label:'Geld-Zurück-Garantie'},
                                {value: 'Datenschutzerklärung', label:'Datenschutzerklärung'},
                                {value: 'Revisionen', label:'Revisionen'},
                                {value: 'Rabattpolitik', label:'Rabattpolitik'},
                            ]}   
                        />
                    </div>
                    <p>© Copyright 2016-2020</p>
                </div>
                <div className={styles.centralContainer}>
                    <div className={styles.linkContainer}> 
                        <Link href="/about"><a>About</a></Link>
                        <Link href="/product"><a>Product</a></Link>
                        <Link href="/faq"><a>FQA</a></Link>
                        <Link href="/contact"><a>Contact</a></Link>
                    </div>
                    <div className={styles.leftLinkgroup}>
                        <Link href="/about"><a>Blog</a></Link>
                        <Link href="/product"><a>How it Works</a></Link>
                        <Link href="/faq"><a>Clients</a></Link>
                        <Link href="/contact"><a>Reviews</a></Link>
                    </div>
                </div>

                <div className={styles.leftContent}>
                    <div className={styles.socialMedia}>
                            <img src="/icons/logos-facebook.svg" alt="Faceboock"/>
                            <img src="/icons/logos-instagram.svg" alt="Instagram"/>
                            <img src="/icons/logos-pinterest.svg" alt="Pinterest"/>
                            <img src="/icons/logos-youtube.svg" alt="YouTube"/>
                    </div>
                    <div className={styles.paymentMethods}>
                            <img src="/icons/fa_cc-mastercard.svg" alt="Mastercard"/>
                            <img src="/icons/fa-brands_cc-visa.svg" alt="Visa"/>   
                    </div>
                    <div className={styles.protected}>
                        <span>DMCA</span>
                        <p>PROTECTED</p>
                    </div>
                    </div>

                </div>
                )}
                {isOnTablet && (
                     <div className={styles.footerContent}> 
                        <div className={styles.tabletContainer}>
                        <div className={styles.centralContainer}>
                         <div className={styles.linkContainer}> 
                             <Link href="/about"><a>About</a></Link>
                             <Link href="/product"><a>Product</a></Link>
                             <Link href="/faq"><a>FQA</a></Link>
                             <Link href="/contact"><a>Contact</a></Link>
                         </div>
                         <div className={styles.leftLinkgroup}>
                             <Link href="/about"><a>Blog</a></Link>
                             <Link href="/product"><a>How it Works</a></Link>
                             <Link href="/faq"><a>Clients</a></Link>
                             <Link href="/contact"><a>Reviews</a></Link>
                         </div>
                     </div>
     
                     <div className={styles.contactContainer}>
                         
                         <div className={styles.cotactNumber}>
                             <span>+49(621) 53399112</span>
                             <p>Call us</p>
                         </div>
     
                         <div className={styles.starsContainer}>
                             <span>4.5</span>
                         </div>
      
                         <div>
                             <Select
                                 name="Info"
                                 placeholder="Info"
                                 value={info}
                                 onChange={(e)=>{setInfo(e.target.value)}}
                                 options={[
                                     {value: 'Geld-Zurück-Garantie', label:'Geld-Zurück-Garantie'},
                                     {value: 'Datenschutzerklärung', label:'Datenschutzerklärung'},
                                     {value: 'Revisionen', label:'Revisionen'},
                                     {value: 'Rabattpolitik', label:'Rabattpolitik'},
                                 ]}   
                             />
                         </div>
                         <p>© Copyright 2016-2020</p>
                     </div>
                        </div>
                        <div className={styles.leftContent}>
                         <div className={styles.socialMedia}>
                                 <img src="/icons/logos-facebook.svg" alt="Faceboock"/>
                                 <img src="/icons/logos-instagram.svg" alt="Instagram"/>
                                 <img src="/icons/logos-pinterest.svg" alt="Pinterest"/>
                                 <img src="/icons/logos-youtube.svg" alt="YouTube"/>
                         </div>
                         <div className={styles.paymentMethods}>
                                 <img src="/icons/fa_cc-mastercard.svg" alt="Mastercard"/>
                                 <img src="/icons/fa-brands_cc-visa.svg" alt="Visa"/>   
                         </div>
                         <div className={styles.protected}>
                             <span>DMCA</span>
                             <p>PROTECTED</p>
                         </div>
                    </div>
                     </div>
                )}
        </div>
    )
}