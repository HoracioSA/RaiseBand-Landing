import { useMediaQuery } from 'react-responsive'
import styles from '../styles/components/NoteBoock.module.css'
import { DevicesSize } from './Constatnts/Index'
export function NoteBoock(){
    const isOnTablet = useMediaQuery({maxWidth:DevicesSize.tablet})
    return(
        <div className={styles.container}>
           
                {isOnTablet && (
                <div className={styles.topContent}>
                
                <img src="/images/Book.svg" alt="Boock"/>
                <div className={styles.textContent}>
                    <h2>Temporibus autem quibusdam et aut officiis debitis </h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est.</p>
                </div>
            </div>
             )}
             {!isOnTablet && (
            <div className={styles.topContent}>
                
                <div className={styles.textContent}>
                    <h2>Temporibus autem quibusdam et aut officiis debitis </h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est.</p>
                </div>
               
                <img src="/images/Book.svg" alt="Boock"/>
                   
            </div>
        )}    
            <div className={styles.bottomContent}>
                <div className={styles.leftContent}>
                    <img src="/images/bg.svg" alt="Background"/>
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
                <div className={styles.rightContent}>
                    <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.</p>
                </div>
            </div>
        </div>
    )
}