import Card from "./components/card";
import Deck from "./components/deck";
import React from "react";
import ReactDOM from "react-dom";

let deck = new Deck();
console.log(deck.peek(), deck.peek().toString());
const rootElement = document.getElementById("app");
ReactDOM.render(
  <h1>React Header</h1>,
  rootElement
);