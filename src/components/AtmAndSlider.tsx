import { useMediaQuery } from 'react-responsive'
import styles from '../styles/components/AtmAndSlider.module.css'
import { DevicesSize } from './Constatnts/Index'
export function AtmAndSlider(){
    const isA_Tablet = useMediaQuery({maxWidth:DevicesSize.tablet})
    return(
        <div className={styles.container}>
            <div className={styles.topContent}>
                <div className={styles.topTitle}>
                    <h2>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit</h2>
                    <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
                </div>
               <div>
                <img src="/images/atm.svg" alt="Tpa"/>
               </div>
                    
               
            </div>
            <div className={styles.bottomContent}>
                {/* To do */}
                <div className={styles.leftContent}>
                    < button><span>--</span> Temporibus autem</button>
                    < button><span>--</span> Nam libero</button>
                    < button><span>--</span> Et harum</button>
                </div>
                <div className={styles.textContainer}>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa,</p>
                </div>
            </div>
        </div>
    )
}