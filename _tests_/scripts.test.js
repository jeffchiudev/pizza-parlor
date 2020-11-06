Describe: PizzaMaker
Test: should correctly create an object for a new pizza order 
Code: let jeffOrder = new PizzaOrder(jeff);
Expect: pizzaOrder.name.toEqual(jeff);

Describe: NewPizzaOrder.prototype.pizzaSize();
Test: should correctly allow user to pick pizza size 
Expect: result.toEqual("large");

Describe: NewPizzaOrder.prototype.addToppings();
Test: should correctly allow user to pick toppings
Expect: result.toEqual("sausage", "goat cheese");

Describe: NewPizzaOrder.prototype.pizzaCost();
Test: should correctly tabulate pizza order cost depending on size & toppings 
Code: let jeffOrder = {"large", [sausage, goat cheese]}
Expect: result.toEqual("$13");

Describe: NewPizzaOrder.prototype.
Test:
Code:
Expect: