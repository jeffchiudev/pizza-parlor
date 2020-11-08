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
  this.total = this.sizeCost + this.toppingCost;
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
  let subtotal = 0;
  for (let i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] == "pepperoni" || this.toppings[i] == "sausage" || this.toppings[i] == "anchovie" || this.toppings[i] == "chorizo") {
      subtotal += 2;
    }  else {
      subtotal += 1;
    }
  }
  return this.toppingCost = subtotal;
}


Pizza.prototype.sizeTotal = function(diameter) {
  if (diameter == 30) {
    this.sizeCost = 10;
  } else if (diameter == 45) {
    this.sizeCost = 15;
  } else {
    this.sizeCost = 20;
  }; 
};

Pizza.prototype.calcTotal = function() {
  let total = this.sizeCost + this.toppingCost;
  return total;
}

//UI logic
let order1 = new Pizza();

$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    
  });
})