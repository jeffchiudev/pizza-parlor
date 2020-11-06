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

| Test | Input | Output |
| :----------- | :----------------------| :----------- |
| PizzaMaker |||
| should correctly create new pizza order | JeffOrder | typeof Jeff = object |
| should correctly allow user to pick pizza | medium | JeffOrder.pizzaSize = medium |
| should correctly allow user to add toppings | sausage, goat cheese | JeffOrder.toppings [sausage, goat cheese] |
| PizzaMaker.prototype.pizzaCost |||
| should correctly allow user to finalize order and price || JeffOrder.pizzaCost = 13$ | 


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