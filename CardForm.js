
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "./Card";


import bitcoinLogo from '../e-wallet-assets/chip-dark.svg';
import ninjaLogo from '../e-wallet-assets/vendor-ninja.svg';
import blockLogo from '../e-wallet-assets/vendor-blockchain.svg';
import evilLogo from '../e-wallet-assets/vendor-evil.svg';
import chip from '../e-wallet-assets/chip-light.svg';

function Card () {
    const { card, setCard}=props;
    var Card;
    
  
      const chip = chip;
  
  
      var Card= "card";
  console.log(card);
  
  
  if (card){//gör en if sats om korten är tomma så...
      card=(setCard)
  
       if (card.company === "bitcoin"){
          cardLogo = bitcoinLogo
         
  
  
      } else if(card.company === "blockchain"){
          cardLogo = blockLogo
          
  
      } else if(card.company === "ninja") {
          cardLogo = ninjaLogo
         
  
      } else if(card.company === "evilcorp"){
          cardLogo = evilLogo
          
  
      } else if(card.company === ""){
          cardLogo = bitcoinLogo
  
      } 
  }
      function Card(){
          setCard(card)
      }

    return(
        <div className="form-container">
            <Card 
                color={newCard.color}
                chip={<Chip />}
                logo={colorAndLogo[newCard.logo].logo}
                number={newCard.number}
                name={newCard.name}
                date={newCard.date}
            />
            <label className="label-form">CARD NUMBER</label>
            <input
                className="input-form"
                onChange={(e) => { 
                    setNewCard({ 
                        ...newCard, 
                        number: e.target.value
                    })
                }}
            />

            <label className="label-form">CARDHOLDER NAME</label>
            <input className="input-form"
                onChange={(e) => { 
                    setNewCard({ 
                        ...newCard, 
                        name: e.target.value
                    })
                }}
            />

            <div className="form-row3">
                <div className="data-verification">
                    <label className="label-form">VALID THRU</label>
                    <input
                        className="input-form"
                        onChange={(e) => { 
                            setNewCard({ 
                                ...newCard, 
                                date: e.target.value
                            })
                        }}
                    />
                </div>

                <div className="data-verification">
                    <label className="label-form">CCV</label>
                    <input className="input-form"
                        onChange={(e) => { 
                            setNewCard({ 
                                ...newCard, 
                                ccv: e.target.value
                            })
                        }}
                    />
                </div>
            </div>
            

            <label for="card" className="label-form">VENDOR</label>
            <select
                id="card"
                name="card"
                className="input-form"
                onChange={(e) => { 
                    setNewCard({ 
                        ...newCard, 
                        color: colorAndLogo[e.target.value].color,
                        logo: e.target.value,
                    })
                }}
            >
                <option value="bitcoinInc">BITCOIN INC</option>
                <option value="ninjaBank">NINJA BANK</option>
                <option value="blockChain">BLOCK CHAIN INK</option>
                <option value="evilCorp">EVIL CORP</option>
            </select>


            <button className="form-btn" onClick={addCard}>ADD CARD</button>
        </div>
    );
}