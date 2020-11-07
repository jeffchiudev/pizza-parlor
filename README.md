# _Pizza Parlor Ordering GUI_

#### _A GUI for customers to customize their pizza toppings on their pizza before ordering, v1.0 06.nov.2020_

#### By _**Jeff W. Chiu**_

## Description:

_Pizza is a beloved anytime food.  Aside from the crispy crust, melty cheese, the best part about pizza is the customizability of ordering a pizza.  Our GUI hopes to make things easier for pizza parlor owners to showcase the toppings available and price them accordingly for their customer base that their customers can access online and send in their orders!_

## Site link:

_`[Click here](https://jeffchiudev.github.io/pizza-parlor/)` to visit the site._

## Setup/Installation Requirements:

### Software Requirements:
_1. Internet browser of choice. Chrome & Firefox are suggested_
_2. A code editor like VSCode or Atom to view or edit the codebase._

#### Open by downloading:
_1. Download `[this](https://github.com/jeffchiudev/pizza-parlor)` repository onto your computer by clicking the 'clone or download button'._
_2. Double click index.html to open it in your web browser._

### Open via Bash/GitBash:
_1. Open terminal window and navigate to/create desired repository location._

_2. Clone this repository onto your computer by using command:_
`git clone https://github.com/jeffchiudev/pizza-parlor`

_3. In the directory where you've cloned the repository, open in Visual Studio Code with `code .` or preferred text editor._

## Test Specifications:

User story: Jeff enteres an order for a 45 cm diamter (medium) pizza with sausage, goat cheese and mushrooms; medium pizzas cost 18 dollars, meat toppings cost an additional 2$ and all other toppings $1. 

| Test | Input | Output |
| :----------- | :----------------------| :----------- |
| Pizza |||
| should correctly create new pizza order | JeffOrder | typeof Jeff = object |
| Pizza.prototype.addToppings |||
| should correctly allow user to add toppings | sausage, goat cheese | JeffOrder.toppings [sausage, goat cheese] |
| should correctly adjust pizza price with additional toppings | sausage, pepperoni, goat cheese | JeffOrder.toppingCost = 5$|
| Pizza.prototype.sizeCost |||
| should correctly allow user to price pizza based on size | 45cm | JeffOrder.sizeCost = $15 |
| PizzaMaker.prototype.calcTotal |||
| should correctly allow user to finalize order and price | sizeCost = $15, toppingCost = 5$ | JeffOrder.pizzaCost = 15$ | 


## Known Bugs:

_Currently optimized for desktop browsing.  Smart device integration will be added soon._

## Support and contact details:

_If there are any issues, I can be contacted at jeffchiudev@gmail.com_


## Technologies Used:

*  Javascript
*  Jquery
*  Bootstrap

### License:

_This extension is licensed under the MIT license._

Copyright (c) 2020 **_Jeff W. Chiu_** 