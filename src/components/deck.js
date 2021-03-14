import Card from './card';

export default class Deck {

  constructor() {
    this.cards = [];
    for (let i = 0; i < 52; i++) {
      this.cards.push(new Card(i));
    }
    this.shuffle();
  }

  shuffle() {
    this.cards.sort(() => Math.random() - 0.5);
  }

  peek() {
    return this.cards[0];
  }

  get() {
    return this.cards.shift();
  }
}

// export default function Card() {
//   console.log("hihi")
// }