/*
BL for multiple pizzas?
function PizzaOrder {
  this.totalOrder = [];
}
*/

//BL for PizzaMaker
function Pizza (orderName) {
  this.orderName = orderName;
  this.toppings = [];
  this.sizeCost = 0;
  this.toppingCost = 0;
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.calcTotal = function() {
  let total = this.sizeCost + this.toppingCost;
  return total;
}

Pizza.prototype.toppingTotal = function () {
  let subtotal = 0;
  for (let i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] == "pepperoni" || this.toppings[i] == "sausage") {
      subtotal += 2;
    }  else {
      subtotal += 1;
    }
  }
  return this.toppingCost = subtotal;
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