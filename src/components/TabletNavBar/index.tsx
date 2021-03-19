import Link from 'next/link'
import { useState } from 'react'
import styles from './index.module.css'
import { MenuToggle } from './togleMenu'
function TabletNavLinks() {
    const something =["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
    const [isMenuOpen, setIsMenuOpen]=useState(false)
    return (

        <div className={styles.TabletNavContents}>
            
                    <MenuToggle isOpen={isMenuOpen} toggle={()=>setIsMenuOpen(!isMenuOpen)}/>
               {isMenuOpen &&( <div className={styles.rightGroupItems}>
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
            </div>)}
    
              
        </div>
    )
}

export default TabletNavLinks
