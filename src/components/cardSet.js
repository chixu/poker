import Card from "./card";

export class CardSet {
  constructor(cards) {
    if (typeof (cards) == "string") {
      cards = cards.split(",").map(c => new Card(c));
    }
    this.cards = cards;
    this.cards.sort((a, b) => a.value - b.value);
    this.type = this.getType();
  }

  getType() {
    let isStraight = true;
    let isFlush = true;
    let prevCard = this.cards[0];
    for (let i = 1; i < this.cards.length; i++) {
      let curCard = this.cards[i];
      if (curCard.value - prevCard.value != 1) {
        isStraight = false;
      }
      if (curCard.suit != prevCard.suit) {
        isFlush = false;
      }
    }

    if (isStraight && isFlush && this.cards[4].value) {
      return CardSetType.RoyalFlush;
    }
  }
}


export const CardSetType = {
  "RoyalFlush": 0,
  "StraightFlush": 1,
  "FourKind": 2,
  "FullHouse": 3,
  "Flush": 4,
  "Straight": 5,
  "ThreeKind": 6,
  "TwoPair": 7,
  "Pair": 8,
  "High": 9,
}