'use strict';

var hsGlobalArray = [];




function hsFormRender() {

  //  switched variables to global
  var hsSection = document.getElementById('hs');
  var hsFormElem = document.createElement('form');
  hsFormElem.id = 'stringify';
  var hsFieldSetElem = document.createElement('fieldset');
  var hsLegendElem = document.createElement('legend');
  hsLegendElem.textContent = 'Life as a High School Student';
  hsSection.appendChild(hsFormElem);
  hsFormElem.appendChild(hsFieldSetElem);
  hsFieldSetElem.appendChild(hsLegendElem);

  // hsFormElem.form = 'hsQuestions';

  // hsLegendElem.textContent = 'Life as a High School Student';

  // Cliques Question
  var hsCliqueMember = document.createElement('p');
  hsCliqueMember.textContent = 'Which clique did you belong to?';
  hsFieldSetElem.appendChild(hsCliqueMember);

  var hsCliqueArray = ['Populars', 'Jocks', 'Good-Ats', 'Hipsters', 'The Brains', 'Normals', 'Stoners', 'Emos/Goths', 'Anime/Manga Fans', 'Loners', 'None of the above'];
  var cliqueDropDownElem = document.createElement('select');
  cliqueDropDownElem.name = 'hsCliqueMember';
  hsFieldSetElem.appendChild(cliqueDropDownElem);

  for (var path = 0; path < hsCliqueArray.length; path++) {
    console.log('path :', path);
    var hsOptionElem = document.createElement('option');
    hsOptionElem.value = hsCliqueArray[path];
    hsOptionElem.textContent = hsCliqueArray[path];
    cliqueDropDownElem.appendChild(hsOptionElem);
  }

  // Extracurricular Activities
  var hsECActivity = document.createElement('p');
  hsECActivity.textContent = 'Which Extracurricular Activity(s) did you take part in?';
  hsFieldSetElem.appendChild(hsECActivity);

  var hsActivityArray = ['Student Government', 'Academic Team', 'Debate Form', 'Debate Team', 'Arts', 'Job', 'Athletics', 'None of the above'];
  var activityDropDownElem = document.createElement('select');
  activityDropDownElem.name = 'hsECActivity';
  hsFieldSetElem.appendChild(activityDropDownElem);

  for (var activity = 0; activity < hsActivityArray.length; activity++) {
    var activityOptionElem = document.createElement('option');
    activityOptionElem.name = 'hsECActivity';
    activityOptionElem.value = hsActivityArray[activity];
    activityOptionElem.textContent = hsActivityArray[activity];
    activityDropDownElem.appendChild(activityOptionElem);
  }

  // Foreign Language
  var hsLanguageQuestion = document.createElement('p');
  hsLanguageQuestion.textContent = 'Did you learn a foreign language?';
  hsFieldSetElem.appendChild(hsLanguageQuestion);

  var hsLanguageQuestionTrue = document.createElement('p');
  hsLanguageQuestionTrue.textContent = 'Yes';
  hsLanguageQuestion.appendChild(hsLanguageQuestionTrue);

  var hsLanguageLearned = document.createElement('input');
  hsLanguageLearned.type = 'radio';
  hsLanguageLearned.name = 'learnedLanguage';
  hsLanguageLearned.value = 'yes';
  hsLanguageQuestionTrue.appendChild(hsLanguageLearned);

  var hsLanguageQuestionFalse = document.createElement('p');
  hsLanguageQuestionFalse.textContent = 'No';
  hsLanguageQuestion.appendChild(hsLanguageQuestionFalse);

  var learnedLanguageNeg = document.createElement('input');
  learnedLanguageNeg.type = 'radio';
  learnedLanguageNeg.name = 'learnedLanguage';
  learnedLanguageNeg.value = 'no';
  hsLanguageQuestionFalse.appendChild(learnedLanguageNeg);

  // Relationship Status
  var hsRelationshipQuestion = document.createElement('p');
  hsRelationshipQuestion.textContent = 'Did you form a romantic relationship?';
  hsFieldSetElem.appendChild(hsRelationshipQuestion);

  var hsRelationshipQuestionTrue = document.createElement('p');
  hsRelationshipQuestionTrue.textContent = 'Yes';
  hsRelationshipQuestion.appendChild(hsRelationshipQuestionTrue);

  var hsRelationship = document.createElement('input');
  hsRelationship.type = 'radio';
  hsRelationship.name = 'relationship';
  hsRelationship.value = 'yes';
  hsRelationshipQuestionTrue.appendChild(hsRelationship);

  var hsRelationshipQuestionFalse = document.createElement('p');
  hsRelationshipQuestionFalse.textContent = 'No';
  hsRelationshipQuestion.appendChild(hsRelationshipQuestionFalse);

  var foreverAlone = document.createElement('input');
  foreverAlone.type = 'radio';
  foreverAlone.name = 'relationship';
  foreverAlone.value = 'no';
  hsRelationshipQuestionFalse.appendChild(foreverAlone);

  // Obtained Diploma

  var hsDiplomaQuestion = document.createElement('p');
  hsDiplomaQuestion.textContent = 'Did you receive your High School Diploma?';
  hsFieldSetElem.appendChild(hsDiplomaQuestion);

  var hsDiplomaQuestionTrue = document.createElement('p');
  hsDiplomaQuestionTrue.textContent = 'Yes';
  hsDiplomaQuestion.appendChild(hsDiplomaQuestionTrue);

  var hsDiploma = document.createElement('input');
  hsDiploma.type = 'radio';
  hsDiploma.name = 'diploma';
  hsDiploma.value = 'yes';
  hsDiplomaQuestionTrue.appendChild(hsDiploma);

  var hsDiplomaQuestionFalse = document.createElement('p');
  hsDiplomaQuestionFalse.textContent = 'No';
  hsDiplomaQuestion.appendChild(hsDiplomaQuestionFalse);

  var noDiploma = document.createElement('input');
  noDiploma.type = 'radio';
  noDiploma.name = 'diploma';
  noDiploma.value = 'no';
  hsDiplomaQuestionFalse.appendChild(noDiploma);

  submitHighSchoolForm(hsFieldSetElem, 'hsSubmit');
}





//Submit button for form
function submitHighSchoolForm(formElem, formValue) {
  var submitHighSchoolForm = document.createElement('button');
  submitHighSchoolForm.type = 'submit';
  submitHighSchoolForm.value = formValue;
  submitHighSchoolForm.textContent = 'Continue';
  formElem.appendChild(submitHighSchoolForm);
}


function submitHandlerHighSchool(event) {
  event.preventDefault();
  var nameArray = [event.target.hsCliqueMember, event.target.hsECActivity, event.target.learnedLanguage, event.target.relationship, event.target.diploma];
  for (var i = 0; i < nameArray.length; i++) {
    var addArray = [];
    if (nameArray[i].name === undefined) {
      addArray.push(nameArray[i][1].name, nameArray[i].value);
    } else {
      addArray.push(nameArray[i].name, nameArray[i].value);
    }
    hsGlobalArray.push(addArray);

  }
  console.log('hsGlobalArray: ', hsGlobalArray);
  event.target.reset();

}


hsFormRender();
var hsForm = document.getElementById('hs');
hsForm.addEventListener('submit', submitHandlerHighSchool);
