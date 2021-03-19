import styles from '../styles/components/NavBar.module.css'

import {DevicesSize} from '../components/Constatnts/Index'
import { useMediaQuery } from 'react-responsive'
import React from 'react'
import TabletNavBar from './TabletNavBar'
import { MenuToggle } from './TabletNavBar/togleMenu'
import TabletNavLinks from './TabletNavBar'
import Link from 'next/link'
export function NavBar (){
    const isTablet = useMediaQuery({maxWidth:DevicesSize.tablet})

    return(
<div className={styles.navBar}>
    <div className={styles.navBarContents}>
               
                <div className={styles.logoContainer}>
                    <img src="/icons/logo.svg" alt="Logo"/>
                </div>
                
                    {!isTablet && (
                    <div className={styles.rightGroupItems}>
                        <div className={styles.seachAndPhoneIconsContainer}>
                                <img className={styles.searchIcon} src="/icons/icon/search-alt.svg" alt="Search"/>
                                <div className={styles.phoneContainer}>
                                    <img src="/icons/mobile-vibration.svg" alt="Phone"/>
                                    <span>Call us</span>
                                </div>
                        </div>
                        <div className={styles.linkContainer}> 
                            <Link href="/about"><a>About</a></Link>
                            <Link href="/product"><a>Product</a></Link>
                            <Link href="/faq"><a>FQA</a></Link>
                            <Link href="/contact"><a>Contact</a></Link>
                            
                        </div>
                        <div className={styles.buttonsContainer}>
                            <div className={styles.buttonsDownlod}>
                                <Link href="/dowload"><button >Download</button></Link>
                            </div>
                            <div className={styles.buttonsSigup}>
                                <Link href="/signup"><button>Sign Up</button></Link>
                            </div>
        
                        </div> 
            </div>
                        )}
             {isTablet && <TabletNavLinks/>}
                
          
    </div>
   
</div>
    )
}