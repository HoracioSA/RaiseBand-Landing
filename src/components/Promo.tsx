import styles from '../styles/components/Promo.module.css'
export default function Promo(){
    return(
        <div className={styles.promoContainer}>
            <section>
                <div className={styles.promoContent}>
                    <h1>At vero eos et accusamus et iusto odio dignissimos ducimus</h1>
                    <p>Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    <button className={styles.Button}>Try for free</button>
                </div>
                
                    <img src="/images/Promo.svg" alt="Imac"/>
      </section>
        </div>
    )
}