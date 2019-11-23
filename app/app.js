'use strict';

// function addElement(tag, container, text) {
//   var element = document.createElement(tag);
//   container.appendChild(element);
//   element.textContent = text;
//   return element
// }

function collegeFormRender() {

  //All the element variables
  var collegeSection = document.getElementById('college');
  var collegeFormElem = document.createElement('form');
  var collegeFeildSetElem = document.createElement('fieldset');
  var collegeLegendElem = document.createElement('legend');
  // var collegeLabelElem = document.createElement('label');
  collegeSection.appendChild(collegeFormElem);
  collegeFormElem.id = 'stringify';
  collegeFormElem.appendChild(collegeFeildSetElem);
  collegeFeildSetElem.appendChild(collegeLegendElem);
  collegeLegendElem.textContent = 'Life as a Young Adult';

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



  // var possibleMaritialAnswers = ['yes', 'no'];
  // for (var i = 0; i < possibleMaritialAnswers.length; i++) {
  //   var maritalForm = document.getElementsByName('fieldset');
  //   maritalForm.appendChild(collegeInputElem);
  //   collegeInputElem.type = 'radio';
  //   collegeInputElem.name = 'maritalStatus';
  //   collegeInputElem.value = possibleMaritialAnswers[i];
  // }

  // collegeFeildSetElem.appendChild(collegeInputElem);
  // collegeInputElem.type = 'radio';
  // collegeInputElem.name = 'beliefStatus';
  // collegeInputElem.value = 'yes';
  // collegeFeildSetElem.appendChild(collegeInputElem);
  // collegeInputElem.type = 'radio';
  // collegeInputElem.name = 'beliefStatus';
  // collegeInputElem.value = 'no';
}

collegeFormRender();
