import React, {InputHTMLAttributes} from 'react'
import styles from './styles.module.css'
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?:string;
    name?:string
}
export const Input: React.FC<InputProps> =({label, name, ...rest}) =>{

    return(
        <div className={styles.inputBlock}>
                    <label htmlFor={name}>{label}</label>
                    <input type="text" id={name} {...rest}/>
                </div>
    )
}
