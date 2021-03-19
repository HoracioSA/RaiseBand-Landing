import { useState } from 'react'
import styles from '../styles/components/Faq.module.css'
export function Faq(){
    const [showContent, setShowContent]= useState(false)
    const toggleContent =()=> setShowContent(true)
    return(
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <h1>FAQ</h1>
                <div className={styles.cardContent}>
                    <div className={styles.faqandIcon}>
                        <h3>At vero eos et accusamus et iusto odio?</h3>
                        <span className={styles.toggleButton}>
                            <img  src="/icons/dropDown.svg" alt="Show content"/>
                        </span>
                    </div>
                    <div>
                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    </div>
                </div>

                <div className={styles.cardContent}>
                    <div className={styles.faqandIcon}>
                        <h3> Nemo enim ipsam voluertrhs?</h3>
                        <span className={styles.toggleButton}>
                            <img  src="/icons/dropDown.svg" alt="Show content"/>
                        </span>
                    </div>
                    <div>
                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.</p>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.faqandIcon}>
                        <h3>Nventore veritatis et quasi architecto beatae vitae dicta ?</h3>
                        <span className={styles.toggleButton}>
                            <img  src="/icons/dropDown.svg" alt="Show content"/>
                        </span>
                    </div>
                    <div>
                        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor.</p>
                    </div>
                </div>
                <div className={styles.button}>
                <button>Try for free</button>
                </div>
                
            </div>
        </div> 
    )
}