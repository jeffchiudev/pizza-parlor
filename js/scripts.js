/*
BL for multiple pizzas?
function PizzaOrder {
  this.totalOrder = [];
}
*/

//BL for PizzaMaker
function Pizza(orderName, toppings, sizeCost, toppingCost) {
  this.orderName = orderName;
  this.toppings = [];
  this.sizeCost = sizeCost; //size based on diameter of pizza?
  this.toppingCost = toppingCost;
  this.totalCost = sizeCost + toppingCost;
}

Pizza.prototype.toppings = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.toppingCost = function(pizzaArray) {
  for (let i=0; i <= pizzaArray.toppings.length; i++) {

  }
}

Pizza.prototype.pizzaCost = function(pizza) {
  let price = 0;
  if (pizza.size = 30) {
    price += 15;
  } else if (pizza.size = 45) {
    price += 18;
  } else {
    price += 21;
  }
  this.sizeCost += price;
}


//UI logic
let order1 = new Pizza();



//$(document).ready(function) {
//}