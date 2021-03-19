
import { useEffect, useState } from 'react';
import styles from './styles.module.css'



export function Stepper(){ 
   
    const [isActive, setIsActive] = useState(false);
   
    function nextStepHandler(){
        setIsActive(true);
    }
    useEffect(()=>{
        if(isActive && nextStep >1){
            setNextStep(nextStep + 1)
        }
    }, [isActive])
    // Selected = Fill the input with color
    // Highlighted = to fiil the text with active color

    let steps=[
        {
            description:'Step 1',
            selected:true, 
            highlighted:true
        },
        {
            description:'Step 2',
            selected:true, 
            highlighted:true 
        },
        {
            description:'Step 3',
            selected:false, 
            highlighted:false, 
        },
        {
            description:'Step 4',
            selected:false, 
            highlighted:false
        }
    ]
    
    // const stepsState= steps.map((step,index)=>{
    //     const stepObject ={}
    //     step.description = 'something';
    //     step.selected = false;
    //     step.highlighted = index === 0 ? true : false;
    // })
    const StepsDisplay=steps.map((step, index)=>{
        const isActiveButton=step.selected ? styles.stepNumberActivated : styles.stepNumber;
        const isHighlightedText=step.highlighted && styles.descriptionActive;
        return(
            <div className={styles.stepContainer }>
                        <button className={`${styles.stepNumber } ${isActiveButton} `}> { step.selected ?  <span>&#10003;</span>: index + 1 }</button>
                        <span className={`${styles.stepText} ${isHighlightedText} `}>{step.description}</span>
                        <div className={index !== steps.length -1 && styles.dividerLine}></div>
                    </div>         
        )
    })

    return(
       
        <div className={styles.container}>
            <div className={styles.stepperWrapperHorizontal}>
                    {StepsDisplay}
            </div>
            <div>
            <div className={styles.sliderContentContainer}>
                        <div className={styles.sliderContentHeaders}>
                            <h3>Step 3</h3>
                            <h2>Sed ut perspiciatis</h2>
                        </div>
                        <div className={styles.contentLeftAndRight}>
                            <div className={styles.contentLeft}>
                                <button>Nemo enim</button>
                                <button>Die ipsam voluptatem</button>
                                <button>Ut enim ad minima</button>
                                <button>Quis autem vel</button>
                                <button>Sed ut perspiciatis</button>
                            </div>
                            <div className={styles.contentLeft}>
                                <h4>Nemo enim ipsam voluptatem, quia voluptas sit</h4>
                                <p><span>1.</span>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium</p>
                                <p><span>2.</span> Doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore</p>
                                <p><span>3.</span>Fet enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                                <span>Notice:</span>
                                <p>Dolorem ipsum, quia dolor sit amet consectetu</p>
                            </div>

                        </div>
                         
                    </div>
            </div>
        </div>   
    )
}