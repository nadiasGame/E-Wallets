let CardStack = [
    {
      cardholdername: "Lisa karlsson",
      number: 1234567891011123,
     
    },
    {
        cardholdername: "Erik Svensson",
        number: 1234.098765431234,
    },
    {
        cardholdername: "Sven Eriksson",
        number: 1234098765430000,
    },
    {
        cardholdername: "Ahmed Johansson",
        number: 1234098765435555,
    },
    {
        cardholdername: "Fatima Svensson",
        number: 1234098765438989,
    },
  ];
  
  export function getCards() {
    return CardStack;
  }

  export function getCardStack(number) {
    return CardStack.find(
      (cardStack) => cardStack.number === number
    );
  }