import TwoWayMap from "./twoWayMap";


export default class Card {
  constructor(index) {
    if (Number.isInteger(index)) {
      this.index = index;
      this.value = index % 13;
      this.suit = Math.floor(index / 13);
    } else {
      //DT diamond 10
      this.suit = suitMap.revGet(index[0]);
      this.value = valueMap.revGet(index[1]);
      this.index = 13 * this.suit + this.value;
    }
  }

  toString() {
    return `${suitMap.get(this.suit)}${valueMap.get(this.value)}`
  }
}

const suitMap = new TwoWayMap({
  0: "D",
  1: "C",
  2: "H",
  3: "S",
});

const valueMap = new TwoWayMap({
  0: "2",
  1: "3",
  2: "4",
  3: "5",
  4: "6",
  5: "7",
  6: "8",
  7: "9",
  8: "T",
  9: "J",
  10: "Q",
  11: "K",
  12: "A",
});

// export default function Card() {
//   console.log("hihi")
// }