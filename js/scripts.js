//BL for PizzaMaker
function Pizza (orderName) {
  this.orderName = orderName;
  this.toppings = [];
  this.sizeCost = 0;
  this.toppingCost = 0;
  this.total = 0;
}

Pizza.prototype.Toppings = function(toppingArray) {
  for (let i = 0; i < toppingArray.length; i++) {
    this.toppings.push(toppingArray[i]);
  };
  let subtotal = 0;
  for (let i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] == "pepperoni" || this.toppings[i] == "sausage" || this.toppings[i] == "anchovie" || this.toppings[i] == "chorizo") {
      subtotal += 2;
    } else {
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
  let sumTotal = this.sizeCost + this.toppingCost;
  return this.total = sumTotal;
}

//UI logic
let order1 = new Pizza();

$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    let order1Diameter = $("input:radio[name=pizza-size]:checked").val();
    let order1Toppings = [];
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      const pizzaTopping = $(this).val();
      order1Toppings.push(pizzaTopping);
    });
    
    order1.Toppings(order1Toppings);
    order1.sizeTotal(order1Diameter);
    order1.calcTotal();
    
  });
})