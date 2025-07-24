import style from "./card.module.css";
import Example from "./Example";

const Card = () => {
  return (
    <div id={style.cardContainer}>
     
      <h1 className={style.heading}>
        Card Component
      </h1>

      <section></section>

      <p>Para in Card Component</p>

      <Example/>
    
    </div>
  );
};

export default Card;
