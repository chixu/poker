import { CardSet, CardSetType } from './cardSet';
// const card = require('./card');


test("cardSet constructor", () => {
  let cardSet = new CardSet("DT,DQ,DJ,DK,DA");
  expect(cardSet.type).toBe(CardSetType.RoyalFlush);
});