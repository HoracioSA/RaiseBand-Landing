import { useState } from 'react';
import styles from '../styles/components/Slider.module.css'
import { Stepper } from './Stepper/Index';

export function Slider(){
    // To do
    return(
           <div className={styles.container}>
                    <div>
                        <h2>How it works</h2>
                        <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                   <Stepper/>
                   
           </div> 
    )
}