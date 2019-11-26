# Parse.Life

## A Javascript illustration of the human life cycle

### Mattäus Isenberg | Phong Doan | Dave Oram | Travis Coots | Hollie Thomas

#### The purpose of this application is to teach the user about Constructor Functions, Methods, CSS styling, Javascript Object Notation (JSON) and Local Storage, implemented through interactive story telling. 

To get going you can clone the [Repository](https://github.com/tcoots88/Parse-Life.git) or follow [this link](https://tcoots88.github.io/Parse-Life/)

## How it works

The user will be asked to complete a series of forms, each corresponding to a specific lesson. For example the first form the user will fill out pertains to the users orginiation or birth. This information is then used to demonstrate the use of a constructor function. for example: 

![picture of the birth form](./imgs/birthForm.png) 

The form is created with Javascript by munipulating the Document Object Model (DOM)

```var birthDivElement = document.getElementById('birth');

var birthForm = document.createElement('form');
birthForm.id = 'birthForn';
birthDivElement.appendChild(birthForm);

var birthFieldset = document.createElement('fieldset');
birthForm.appendChild(birthFieldset);

var deadLegend = document.createElement('legend');
deadLegend.textContent = '';
birthFieldset.appendChild(deadLegend);```
