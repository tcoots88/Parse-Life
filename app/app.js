'use strict';

var ElementaryFormDataArray = [];

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
  questionOneDrop.setAttribute('class', 'dropDowns')
  fieldset.appendChild(questionOneDrop)
  var subjects = ["Math", "literature", "Science", "Art"]
  for (var subjectOptions = 0; subjectOptions < subjects.length; subjectOptions++) {
    var options = document.createElement('option')
    options.value = subjects[subjectOptions]
    options.text = subjects[subjectOptions]
    questionOneDrop.appendChild(options)
  }

  // Question Two
  var questionTwo = document.createElement('p')
  fieldset.appendChild(questionTwo)
  questionTwo.textContent = "What were your favorite things to do?"
  var questionTwoDrop = document.createElement('select')
  fieldset.appendChild(questionTwoDrop)
  var ThingsToDO = ["Sports", "Pick Your Nose", "Play Video Games", "Fight With Siblings", "Watch TV"]
  for (var ThingsToDOOptions = 0; ThingsToDOOptions < ThingsToDO.length; ThingsToDOOptions++) {
    var elemOptions = document.createElement('option')
    elemOptions.value = ThingsToDO[ThingsToDOOptions]
    elemOptions.text = ThingsToDO[ThingsToDOOptions]
    questionTwoDrop.appendChild(elemOptions)
  }
  // Question Three
  var questionThree = document.createElement('p');
  fieldset.appendChild(questionThree);
  questionThree.textContent = "Were you sent to the principals office?"
  var questionThreeDrop = document.createElement('select')
  fieldset.appendChild(questionThreeDrop)
  var questionThreeChoices = ["Yes", "No"]
  for (var i = 0; i < questionThreeChoices.length; i++) {
    var questionThreeOptions = document.createElement('option')
    questionThreeOptions.value = questionThreeChoices[i]
    questionThreeOptions.text = questionThreeChoices[i]
    questionThreeDrop.appendChild(questionThreeOptions)
  }

  // Question Four
  var questionFour = document.createElement('p');
  questionFour.textContent = 'What was your favorite cartoon? '
  fieldset.appendChild(questionFour);
  var questionFourField = document.createElement('input');
  questionFourField.setAttribute('class', 'inputField')
  questionFour.appendChild(questionFourField);
  questionFourField.type = 'text'
  questionFourField.value = ''
}


createElementaryForm();


var createSplashPage = function () {
  var getSplash = document.getElementById(splash)
  var dataAlert = alert('Warning: This page asks you for information about yourself. The information will be used to create a personalized lesson about Javascript demonstrated by your life choices. The information will be stored on your device, in its local file system. Once you complete the entire lesson all information will be deleted. By selecting "ok" you agree to continue.  ')
}

// createSplashPage();

