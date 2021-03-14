import Card from './card';
// const card = require('./card');


test("card constructor", () => {
  let c = new Card("DT");
  expect(c.value).toBe(8);
  expect(c.suit).toBe(0);
  expect(c.toString()).toBe("DT");
});

test("card constructor2", () => {
  let c = new Card(8);
  expect(c.value).toBe(8);
  expect(c.suit).toBe(0);
  expect(c.toString()).toBe("DT");
});