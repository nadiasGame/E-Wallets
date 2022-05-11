import Card from "./Card";
import { colorAndLogo } from "./CardForm";

function CardStack(props) {

    const {setCard } = props;
  
    const cardComponent = ((card, index) =>{
      return <Cards card={ card} key={ index } setCard={ setCard } />
  }) 
  
  return(
      <section className="cardStack">
          { cardComponent }
      </section>
  )
  
  }  
  


export default function CardStack(){
    let cards = [];
    if (localStorage.getItem('cards')) {
        cards = localStorage.getItem('cards');
        cards = JSON.parse(cards);
    }

    const handleSelect = (card) => () => {
        let selectedCard = JSON.stringify(card);
        localStorage.setItem('selected-card', selectedCard);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }
    
    return(
     <div className="card-stack" style={{ height: ((cards.length-1) * 70) + 255}}>
        {
        cards.map((card, index) => {
            return <div 
                className="card-stack-item"
                style={{ top: index * 70}}
                onClick={handleSelect(card)}
            >
                <Card
                    color={card.color}
                    chip={<Chip />}
                    logo={colorAndLogo[card.logo].logo}
                    number={card.number}
                    name={card.name}
                    date={card.date}
                />
            </div>;
            })
        }
     </div>  
    )
}