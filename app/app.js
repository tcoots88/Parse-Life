'use strict';

function collegeFormRender() {

  //All the element variables
  var collegeSection = document.getElementById('college');
  var collegeFormElem = document.createElement('form');
  var collegeFeildSetElem = document.createElement('fieldset');
  var collegeLegendElem = document.createElement('legend');
  // var collegeLabelElem = document.createElement('label');
  collegeSection.appendChild(collegeFormElem);
  collegeFormElem.id = 'stringify';
  collegeFormElem.form = 'collegeQuestions';
  collegeFormElem.appendChild(collegeFeildSetElem);
  collegeFeildSetElem.appendChild(collegeLegendElem);
  collegeLegendElem.textContent = 'Life as a Young Adult';

  //First Input-Education Path
  var educationPath = document.createElement('p');
  educationPath.textContent = 'What educational path did you take?';
  collegeFeildSetElem.appendChild(educationPath);

  var education = ['University', 'Technical School', 'Military', 'None'];
  var educationDropDownElem = document.createElement('select');
  collegeFeildSetElem.appendChild(educationDropDownElem);

  for (var path = 0; path < education.length; path++) {
    console.log('path :', path);
    var collegeOptionElem = document.createElement('option');
    collegeOptionElem.value = education[path];
    collegeOptionElem.textContent = education[path];
    educationDropDownElem.appendChild(collegeOptionElem);
  }

  //Second Input - Degree Family
  var degreeFamilyQuestion = document.createElement('p');
  degreeFamilyQuestion.textContent = 'What educational path did you take?';
  collegeFeildSetElem.appendChild(degreeFamilyQuestion);

  var degreeType = ['Science', 'Arts', 'Math', 'None'];
  var degreeDropDownElem = document.createElement('select');
  collegeFeildSetElem.appendChild(degreeDropDownElem);

  for (var family = 0; family < degreeType.length; family++) {
    var degreeOptionElem = document.createElement('option');
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


  //Submit button for form
  var submitCollegeForm = document.createElement('button');
  submitCollegeForm.type = 'submit';
  submitCollegeForm.value = 'Submit';
  submitCollegeForm.form = 'collegeQeustions',
  submitCollegeForm.textContent = 'Continue';
  collegeFeildSetElem.appendChild(submitCollegeForm);
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

  var career = ['Military', 'Buisness', 'Engineer', 'Finance'];
  var careerDropDownElem = document.createElement('select');
  careerFeildSetElem.appendChild(careerDropDownElem);

  for (var path = 0; path < career.length; path++) {
    console.log('path :', path);
    var careerOptionElem = document.createElement('option');
    careerOptionElem.value = career[path];
    careerOptionElem.textContent = career[path];
    careerDropDownElem.appendChild(careerOptionElem);
  }

  //Second Input - Hobbies as an Adult
  var adultHobbiesQuestion = document.createElement('p');
  adultHobbiesQuestion.textContent = 'What hobbies do you partake in now?';
  careerFeildSetElem.appendChild(adultHobbiesQuestion);

  var degreeType = ['Science', 'Arts', 'Math', 'None'];
  var degreeDropDownElem = document.createElement('select');
  careerFeildSetElem.appendChild(degreeDropDownElem);

  for (var family = 0; family < degreeType.length; family++) {
    var degreeOptionElem = document.createElement('option');
    degreeOptionElem.value = degreeType[family];
    degreeOptionElem.textContent = degreeType[family];
    degreeDropDownElem.appendChild(degreeOptionElem);
  }

  //Third Input - Marital Status
  var maritalQuestion = document.createElement('p');
  maritalQuestion.textContent = 'Are you married?';
  careerFeildSetElem.appendChild(maritalQuestion);

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
  careerFeildSetElem.appendChild(beliefsQuestion);

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
}



collegeFormRender();
careerFormRender();
