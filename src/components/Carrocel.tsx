import styles from '../styles/components/Carrocel.module.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
export function Carrocel(){
    //  To do 
        const cardData =[
            {
                userid:21015,
                stars:5,
                categories:'Category|Subcategory',
                title:'Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam.'
            },
            {
                userid:21015,
                stars:5,
                categories:'Category|Subcategory',
                title:'Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam.'
            },
            {
                userid:21015,
                stars:5,
                categories:'Category|Subcategory',
                title:'Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam.'
            },
    ]
    return(
     
    //  To do
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={1}
        >
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>Reviews</h2>
            <p>Nam libero tempore, cum soluta nobis est </p>
        </div>
        <Slider>
      
        <div className={styles.sliderContainer}>
           {cardData.map((card, index)=>{
            return(
        <div className={styles.cardContainer}>
            
            <div className={styles.iconAndTitleContainer}>
                <img src="/icons/icon/quote.svg" alt=""/>
                <h2>{card.stars} stars</h2>
            </div>

            <div className={styles.text}> 
                <p>{card.title}</p>
            </div>
           
            <div className={styles.userIdContainer}>
                <div>
                   <div className={styles.imageBackground}>
                    <img src="/icons/icon/Vector.svg" alt=""/>
                    </div>
                     <span>ID:{card.userid}</span>
                </div>
            
                <span>{card.categories}</span>
            </div> 
        </div>
            )
           })} 
    </div>
        </Slider>
        <div>
            <span>Read more</span>
            <p>...</p>
        </div>
    </div>
         </CarouselProvider>
    )
}