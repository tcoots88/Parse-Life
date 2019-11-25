'use strict';

//Global Array for College Form
var collegeArray = [];
// var careerArray = [];
// var storageArray = [];

function collegeFormRender() {

  //Start of college form
  var collegeSection = document.getElementById('college');
  var collegeFormElem = document.createElement('form');
  collegeFormElem.id = 'stringify';
  var collegeFeildSetElem = document.createElement('fieldset');
  collegeFeildSetElem.id = 'collegeQuestions';
  var collegeLegendElem = document.createElement('legend');
  collegeLegendElem.textContent = 'Life as a Young Adult';
  collegeSection.appendChild(collegeFormElem);
  collegeFormElem.appendChild(collegeFeildSetElem);
  collegeFeildSetElem.appendChild(collegeLegendElem);


  //First Input-Education Path
  var educationPath = document.createElement('p');
  educationPath.textContent = 'What educational path did you take?';
  collegeFeildSetElem.appendChild(educationPath);

  var education = ['University', 'Technical School', 'Military', 'None'];
  var educationDropDownElem = document.createElement('select');
  educationDropDownElem.name = 'educationPath';
  educationPath.appendChild(educationDropDownElem);


  for (var path = 0; path < education.length; path++) {
    var collegeOptionElem = document.createElement('option');
    collegeOptionElem.value = education[path];
    collegeOptionElem.textContent = education[path];
    educationDropDownElem.appendChild(collegeOptionElem);
  }

  //Second Input - Degree Family
  var degreeFamilyQuestion = document.createElement('p');
  degreeFamilyQuestion.textContent = 'What family of degrees do you classify?';
  collegeFeildSetElem.appendChild(degreeFamilyQuestion);

  var degreeType = ['Science', 'Arts', 'Math', 'None'];
  var degreeDropDownElem = document.createElement('select');
  degreeDropDownElem.name = 'degreetype';
  degreeFamilyQuestion.appendChild(degreeDropDownElem);

  for (var family = 0; family < degreeType.length; family++) {
    var degreeOptionElem = document.createElement('option');
    degreeOptionElem.name = 'degreetype';
    degreeOptionElem.value = degreeType[family];
    degreeOptionElem.textContent = degreeType[family];
    degreeDropDownElem.appendChild(degreeOptionElem);
  }

  //Third Input - Marital Status
  var maritalQuestion = document.createElement('p');
  maritalQuestion.textContent = 'Are you married?';
  collegeFeildSetElem.appendChild(maritalQuestion);

  var maritalQuestionTrue = document.createElement('p');
  maritalQuestionTrue.textContent = 'Yes';
  maritalQuestion.appendChild(maritalQuestionTrue);

  var isMarried = document.createElement('input');
  isMarried.type = 'radio';
  isMarried.name = 'maritalStatus';
  isMarried.value = 'yes';
  maritalQuestionTrue.appendChild(isMarried);

  var maritalQuestionFalse = document.createElement('p');
  maritalQuestionFalse.textContent = 'No';
  maritalQuestion.appendChild(maritalQuestionFalse);

  var isNotMarried = document.createElement('input');
  isNotMarried.type = 'radio';
  isNotMarried.name = 'maritalStatus';
  isNotMarried.value = 'no';
  maritalQuestionFalse.appendChild(isNotMarried);

  //Fourth Input - Belief System
  var beliefsQuestion = document.createElement('p');
  beliefsQuestion.textContent = 'Do you have a belief system?';
  collegeFeildSetElem.appendChild(beliefsQuestion);

  var beliefsQuestionTrue = document.createElement('p');
  beliefsQuestionTrue.textContent = 'Yes';
  beliefsQuestion.appendChild(beliefsQuestionTrue);

  var hasBeliefs = document.createElement('input');
  hasBeliefs.type = 'radio';
  hasBeliefs.name = 'beliefs';
  hasBeliefs.value = 'yes';
  beliefsQuestionTrue.appendChild(hasBeliefs);

  var beliefsQuestionFalse = document.createElement('p');
  beliefsQuestionFalse.textContent = 'No';
  beliefsQuestion.appendChild(beliefsQuestionFalse);

  var doesNotBelieve = document.createElement('input');
  doesNotBelieve.type = 'radio';
  doesNotBelieve.name = 'beliefs';
  doesNotBelieve.value = 'no';
  beliefsQuestionFalse.appendChild(doesNotBelieve);

  formSubmission(collegeFormElem, 'collegeSubmit');

}

function careerFormRender() {

  //Start of the career form
  var careerSection = document.getElementById('career');
  var careerFormElem = document.createElement('form');
  var careerFeildSetElem = document.createElement('fieldset');
  var careerLegendElem = document.createElement('legend');
  careerSection.appendChild(careerFormElem);
  careerFormElem.id = 'finishedProduct';
  careerFormElem.appendChild(careerFeildSetElem);
  careerFeildSetElem.appendChild(careerLegendElem);
  careerLegendElem.textContent = 'Life as an Adult';

  //First Input-Career Path
  var careerPath = document.createElement('p');
  careerPath.textContent = 'What career did you end up with?';
  careerFeildSetElem.appendChild(careerPath);

  var career = ['Military', 'Buisness', 'Engineer', 'Finance', 'Skill Trade', 'Other'];
  var careerDropDownElem = document.createElement('select');
  careerFeildSetElem.appendChild(careerDropDownElem);

  for (var path = 0; path < career.length; path++) {
    var careerOptionElem = document.createElement('option');
    careerOptionElem.value = career[path];
    careerOptionElem.textContent = career[path];
    careerDropDownElem.appendChild(careerOptionElem);
  }

  //Second Input - Hobbies as an Adult
  var adultHobbiesQuestion = document.createElement('p');
  adultHobbiesQuestion.textContent = 'What hobbies do you partake in now?';
  careerFeildSetElem.appendChild(adultHobbiesQuestion);

  var hobbiesAsAdultText = document.createElement('input');
  hobbiesAsAdultText.type = 'text';
  adultHobbiesQuestion.appendChild(hobbiesAsAdultText);


  //Third Input - Marital Status As An Adult
  var maritalQuestion = document.createElement('p');
  maritalQuestion.textContent = 'Are you married with or without kids?';
  careerFeildSetElem.appendChild(maritalQuestion);

  var maritalQuestionTrueWithKids = document.createElement('p');
  maritalQuestionTrueWithKids.textContent = 'Yes w/ kids';
  maritalQuestion.appendChild(maritalQuestionTrueWithKids);

  var isMarriedWithKids = document.createElement('input');
  isMarriedWithKids.type = 'radio';
  isMarriedWithKids.name = 'maritalStatusAdult';
  isMarriedWithKids.value = 'yesKids';
  maritalQuestionTrueWithKids.appendChild(isMarriedWithKids);

  var maritalQuestionTrue = document.createElement('p');
  maritalQuestionTrue.textContent = 'Yes w/o kids';
  maritalQuestion.appendChild(maritalQuestionTrue);

  var isMarried = document.createElement('input');
  isMarried.type = 'radio';
  isMarried.name = 'maritalStatusAdult';
  isMarried.value = 'yesNoKids';
  maritalQuestionTrue.appendChild(isMarried);

  var maritalQuestionFalse = document.createElement('p');
  maritalQuestionFalse.textContent = 'No';
  maritalQuestion.appendChild(maritalQuestionFalse);

  var isNotMarried = document.createElement('input');
  isNotMarried.type = 'radio';
  isNotMarried.name = 'maritalStatusAdult';
  isNotMarried.value = 'no';
  maritalQuestionFalse.appendChild(isNotMarried);

  //Fourth Input - Region as An Adult
  var regionAdultElement = document.createElement('p');
  regionAdultElement.textContent = 'Current Region: ';
  careerFeildSetElem.appendChild(regionAdultElement);

  var regionAdultField = document.createElement('input');
  regionAdultField.type = 'text';

  regionAdultElement.appendChild(regionAdultField);

  // var submitForm = document.createElement('button');
  // submitForm.type = 'submit';
  // submitForm.value = 'careerSubmit';
  // submitForm.textContent = 'Continue';
  // careerFeildSetElem.appendChild(submitForm);

  formSubmission(careerFeildSetElem, 'careerSubmit');
}

function formSubmission(formElem, formValue) {
  var submitForm = document.createElement('button');
  submitForm.type = 'submit';
  submitForm.value = formValue;
  submitForm.textContent = 'Continue';
  formElem.appendChild(submitForm);
}

// function Nameobj(name, value) {
//   this.name = name;
//   this.value = value;
// }

function submitHandlerCollege(event) {
  event.preventDefault();
  console.log('event.target :', event.target);
  console.log('event.target.id :', event.target.id);
  console.log('event.target.educationPath.value :', event.target.educationPath.value);
  console.log('event.target.degreetype.value :', event.target.degreetype.value);
  console.log('event.target.maritalStatus.value :', event.target.maritalStatus.value);
  console.log('event.target.belief.value :', event.target.beliefs.value);

  // var nameArray = ['educationpath', 'degreetype', 'maritalStatus', 'belief'];
  // var newData = new Nameobj('education', event.target.educationPath.value);
  // console.log('newData :', newData);
  // for ( var i = 0; i < nameArray.length; i++) {
  // collegeArray.push(newData);

  // }
  // var inputName = collegeForm.getAttribute('name');
  // var inputValue = inputName.getAttribute('value');
  // nameArray.push(inputName, inputValue);

  console.log('collegeArray :', collegeArray);
  event.target.reset();

  // storageArray
}



collegeFormRender();
var collegeForm = document.getElementById('college');
collegeForm.addEventListener('submit', submitHandlerCollege);
careerFormRender();
