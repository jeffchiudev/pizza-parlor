Describe: PizzaMaker
//Test: should correctly create an object for a new pizza order 
//Code: let jeffOrder = new PizzaOrder(jeff);
//Expect: pizzaOrder.name.toEqual(jeff);

Test: should correctly allow user to pick pizza size 
Expect: result.toEqual("large");

Describe: PizzaMaker.prototype.addToppings();

//Test: should correctly allow user to pick toppings
//Code: order1.addToppings("sausage")
//Expect: result.toEqual(["sausage"]);

//Test: should correctly tabulate pizza cost depending on toppings 
//Code: let jeffOrder.toppings = {sausage, goat cheese]}
//Expect: result.toEqual("$3");

Describe: PizzaMaker.prototype.calcTotal();

//Test: should correctly tabulate pizza cost based on size of pizza
//Code: let jeffOrder.diamter = 60cm;
//Expect: result.toEqual("$20");