import React, {SelectHTMLAttributes} from 'react'
import styles from './styles.module.css'
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label?:string;
    name:string;
    options:Array<{
        value:string;
        label:string;
    }>
}
const Select: React.FC<SelectProps> =({label, name, options,...rest}) =>{

    return(
        <div className={styles.selectBlock}>
                    
                    <select value="" id={name} {...rest}>
                        <option className={styles.option} value="Color" >Colors</option>
                        {options.map(option=>{
                            return <option key={option.value} value={option.value}>{option.label}</option>
                        })}
                    </select>
                </div>
    )
}
export default Select;