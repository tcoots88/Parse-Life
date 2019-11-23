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
  // var collegeInputElem = document.createElement('input');
  var collegeDropDownElem = document.createElement('select');
  // var collegeOptionElem = document.createElement('option');

  //Creating the form
  collegeSection.appendChild(collegeFormElem);
  collegeFormElem.id = 'stringify';
  collegeFormElem.appendChild(collegeFeildSetElem);
  collegeFeildSetElem.appendChild(collegeLegendElem);
  collegeLegendElem.textContent = 'Life as a Young Adult';
  collegeFeildSetElem.appendChild(collegeDropDownElem);

  var education = ['University', 'Technical School', 'Military', 'None'];
  for (var path = 0; path < education.length; path++) {
    console.log('path :', path);
    var collegeOptionElem = document.createElement('option');
    collegeDropDownElem.appendChild(collegeOptionElem);
    collegeOptionElem.value = education[path];
    collegeOptionElem.textContent = education[path];
  }

  var degreeDropDownElem = document.createElement('select');
  var degreeType = ['Science', 'Arts', 'Math', 'None'];
  for (var family = 0; family < degreeType.length; family++) {
    var degreeOptionElem = document.createElement('option');
    collegeFeildSetElem.appendChild(degreeDropDownElem);
    degreeDropDownElem.appendChild(degreeOptionElem);
    degreeOptionElem.value = degreeType[family];
    degreeOptionElem.textContent = degreeType[family];
  }

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
