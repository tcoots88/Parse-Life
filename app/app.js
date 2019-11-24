'use strict';

var createElementaryForm = function () {
  // DOM munipulation
  var getElementary = document.getElementById(Elementary)
  var createForm = document.createElement('form');
  Elementary.appendChild(createForm);
  var fieldset = document.createElement('fieldset');
  createForm.appendChild(fieldset);
  var legend = document.createElement('legend');
  fieldset.appendChild(legend);
  
  // Question One
  var questionOne = document.createElement('p');
  fieldset.appendChild(questionOne);
  questionOne.textContent = "What was your favorite study in elementary school?";
  var questionOneDrop = document.createElement('select')
  fieldset.appendChild(questionOneDrop)
  var subjects = ["Math", "literature", "Science", "Art"]
  for (var subjectOptions = 0; subjectOptions < subjects.length; subjectOptions++) {
    var option = document.createElement('option')
    option.value = subjects[subjectOptions]
    option.text = subjects[subjectOptions]
    questionOneDrop.appendChild(option)
  }
  
// Question Two
  var questionTwo = document.createElement('p')
  fieldset.appendChild(questionTwo)
  questionTwo.textContent = "What were your favorite things to do?"
  var questionTwoDrop = document.createElement('select')
  questionTwoDrop.setAttribute('class', 'select')
  fieldset.appendChild(questionTwoDrop)
  var ThingsToDO = ["Sports", "Pick Your Nose", "Play Video Games", "Fight With Siblings", "Watch TV"]
  for (var ThingsToDOOptions = 0; ThingsToDOOptions < ThingsToDO.length; ThingsToDOOptions++) {
    var option = document.createElement('option')
    option.value = ThingsToDO[ThingsToDOOptions]
    option.text = ThingsToDO[ThingsToDOOptions]
    questionTwoDrop.appendChild(option)
  }
  // Question Three
  var questionThree = document.createElement('p')
  fieldset.appendChild(questionThree)
  questionThree.textContent = "Were you sent to the principals office?"
  var addYesButton = document.createElement('p');
  addYesButton.textContent = 'Yes: ';
  questionThree.appendChild(addYesButton)
  var yesButton = document.createElement('input');
  yesButton.setAttribute('class', 'radio')
  yesButton.type = 'radio';
  yesButton.name = 'No Button';
  yesButton.value = 'true';
  questionThree.appendChild(yesButton);
  var addNoButton = document.createElement('p');
  addNoButton.textContent = 'No: ';
  questionThree.appendChild(addNoButton);
  var noButton = document.createElement('input');
  questionThree.appendChild(noButton);
  noButton.setAttribute('class', 'radio')
  noButton.type = 'radio';
  noButton.name = 'No Button';
  noButton.value = 'false';
  console.log(noButton);
  console.log(yesButton);
  

  // Question Four
  var questionFour = document.createElement('p');
  questionFour.textContent = 'What was your favorite cartoon? '
  fieldset.appendChild(questionFour)
  var questionFourField = document.createElement('input')
  questionFour.appendChild(questionFourField)
  questionFourField.type = 'text'
  questionFourField.value = ''
}
createElementaryForm();

