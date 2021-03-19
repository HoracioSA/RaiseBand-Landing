import React from 'react'
import { Calculator } from '../components/Calculator'
import { Slider } from '../components/Slider'
import {NavBar} from '../components/NavBar'
import {Carrocel} from '../components/Carrocel'

import Promo from '../components/Promo'
import  {Section } from '../components/Section'

import styles from '../styles/pages/Home.module.css'
import { AtmAndSlider } from '../components/AtmAndSlider'
import { Advantage } from '../components/Advantage'
import { NoteBoock } from '../components/NoteBoock'
import { Faq } from '../components/Faq'
import { Footer } from '../components/Footer'
export default function Home(){
  return(
    <div className={styles.container}>
       <NavBar/>
       <Promo/>
       <Section/>
       <Calculator/>
       <Slider/>
       <Carrocel/>
       <AtmAndSlider/>
       <Advantage/>
       <NoteBoock/>
       <Faq/>
       <Footer/>
       
    </div>
   
  )
}