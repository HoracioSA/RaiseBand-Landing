
import { useMediaQuery } from 'react-responsive'
import styles from '../styles/components/Section.module.css'
import { DevicesSize } from './Constatnts/Index'
export function Section(){
    const isTablet = useMediaQuery({maxWidth:DevicesSize.mobile})
    return(
        <div className={styles.container}>
            <section>
                
                {isTablet && (
                    <div className={styles.sectionRight}>
                    <h2>Temporibus autem quibusdam et aut officiis debitis</h2> 
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p> 
                    <button className={styles.Button}>Try for free</button>
                    </div>
              
                )}
                <div className={styles.sectionLeft}>
                        <img src="/images/watchp.svg" alt=""/>
                        <div className={styles.cardContainer}>
                            <div className={styles.iconAndTitleContainer}>
                                <button>
                                    <img src="/icons/Vector.svg" alt=""/>
                                </button>
                                <h2>Notice</h2>
                            </div>
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est.</p>
                        </div>
                </div>
               {!isTablet && (
                   <div className={styles.sectionRight}>
                   <h2>Temporibus autem quibusdam et aut officiis debitis</h2> 
                   <p>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p> 
                   <button className={styles.Button}>Try for free</button>
             </div>
               )}
                
               
               
            </section>
        </div>
    )
}