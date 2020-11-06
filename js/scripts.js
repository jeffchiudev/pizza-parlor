/*
BL for multiple pizzas?
function PizzaOrder {
  this.totalOrder = [];
}
*/

//BL for PizzaMaker
function Pizza() {
  this.toppings = [];
  this.size = 0; //size based on diameter of pizza?
}

Pizza.prototype.toppings = function()

Pizza.prototype.pizzaCost = function(pizza) {
  let price = 0;
  if (pizza.size = 30) {
    price += 15;
  } else if (pizza.size = 45) {
    price += 18;
  } else {
    price += 21;
  }
}

/*
let order1 = new Pizza();



//UI logic
//$(document).ready(function) {
//}