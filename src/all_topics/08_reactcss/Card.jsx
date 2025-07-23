import style from "./card.module.css"
import Example from "./Example"

const Card = () => {
  return (
    <div id={style.cardWrapper}>

        <section id={style.cardContainer}>
            <h1 className={style.heading}>
                John Doe
            </h1>
        </section>

        <footer>
            i am footer
        </footer>

        <Example/>
    </div>
  )
}

export default Card