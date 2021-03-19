
import { useState } from 'react'
import styles from '../styles/components/Calculator.module.css'
import {Input} from './Input'
import {Select as Optional} from './SecondSlect'
import Select from './Select'

export function Calculator(){
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [city, setCity] = useState('')
    const [delivery, setDelivery] = useState('')
    return(
        <div className={styles.container}>
           
            <div className={styles.calculatorGroup}>

                
                    <div className={styles.titleAndparagraph}>

                        <h2>Calculator</h2>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio</p>
                    </div>
                <div className={styles.calculatorArea}>
                    {/* To do this */}
                <div className={styles.inputsFields}>

                    <div className={styles.firstInputField}>
                    
                            <Select 
                            name="Color"
                            value={color}
                            onChange={(e)=>{setColor(e.target.value)}}
                            options={[
                                {value: '- red', label:'- red'},
                                {value: '- green', label:'- green'},
                                {value: '- blue', label:'- blue'},
                                {value: '- orange', label:'- orange'},
        
                            ]}   
                            />
                             <Select 
                            name="Size"
                            value={size}
                            onChange={(e)=>{setSize(e.target.value)}}
                            options={[
                                {value: '- 100%', label:'- 100%'},
                                {value: '- 150%', label:'- 150%'},
                                {value: '- 200%', label:'- 200%'},
        
                            ]}   
                            />
                            
                            <Input 
                            name="100"
                            value="- 100 +"   
                            />
                            <Input 
                            name="Date"
                            value="20-12-03"   
                            />  
                                              
                    </div>
                    <div className={styles.secoundInputGroup}>
                        <Optional 
                            name="City"
                            value={city}
                            onChange={(e)=>{setCity(e.target.value)}}
                            options={[
                                {value: '- Kyiv', label:'- Kyiv'},
                                {value: '- Odessa', label:'- Odessa'},
                                {value: '- Rivna', label:'- Rivna'},
                                {value: '- Lviv', label:'- Lviv'},
                            ]}   
                            />
                        <Optional
                            name="Delivery"
                            value={delivery}
                            onChange={(e)=>{setDelivery(e.target.value)}}
                            options={[
                                {value: '- New Post', label:'- New Post'},
                                {value: '- Ukraposhta', label:'- Ukraposhta'},
                                {value: '- Pickup', label:'- Pickup'},
                                
                            ]}   
                            />
                     
                    </div>
                </div>
                    <div className={styles.priceAndButton}>
                        <span>$ 56.25</span> 
                        <button type="submit">Record</button>
                    </div>
            </div>
            </div>
            
        </div>
    )
}