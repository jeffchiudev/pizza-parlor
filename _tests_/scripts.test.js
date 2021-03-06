Describe: Pizza
//Test: should correctly create an object for a new pizza order 
//Code: let order = new Pizza());
//Expect: pizzaOrder.name.toEqual(order);

//Test: should correctly allow user to pick pizza size 
//Expect: result.toEqual("large");

Describe: Pizza.prototype.addName();

//Test: should correctly allow user form name entry to be input into order array 
//Code: Jeff
//Expect: pizzaOrder.name.toEqual("Jeff")

Describe: Pizza.prototype.Toppings();

//Test: should correctly allow user to pick toppings
//Code: order1.addToppings("sausage")
//Expect: result.toEqual(["sausage"]);

//Test: should correctly tabulate pizza cost depending on toppings 
//Code: let jeffOrder.toppings = {sausage, goat cheese]}
//Expect: result.toEqual("$3");

Describe: Pizza.prototype.sizeTotal();

//Test: should correctly price pizza based on diameter
//Code: order1.sizeTotal(order1Diameter)
//Expect: result.toEqual(20);

Describe: Pizza.prototype.calcTotal();

//Test: should correctly tabulate pizza cost based on size of pizza
//Code: let jeffOrder.diamter = 60cm;
//Expect: result.toEqual("$20");