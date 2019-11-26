'use strict';


var elementaryFormDataArray = [];

var createElementaryForm = function () {
  // DOM munipulation
  var getElementary = document.getElementById('elementary');
  var createForm = document.createElement('form');
  createForm.id = 'methods';
  getElementary.appendChild(createForm);
  var elementaryFieldSet = document.createElement('fieldset');
  createForm.appendChild(elementaryFieldSet);
  var legend = document.createElement('legend');
  elementaryFieldSet.appendChild(legend);

  // Question One
  var questionOne = document.createElement('p');
  elementaryFieldSet.appendChild(questionOne);
  questionOne.textContent = 'What was your favorite study in elementary school?';
  var questionOneDrop = document.createElement('select');
  questionOneDrop.setAttribute('class', 'dropDowns');
  questionOneDrop.name = 'favoriteSubject';
  questionOne.appendChild(questionOneDrop);
  var subjects = ['Math', 'literature', 'Science', 'Art'];
  for (var subjectOptions = 0; subjectOptions < subjects.length; subjectOptions++) {
    var options = document.createElement('option');
    options.value = subjects[subjectOptions];
    options.text = subjects[subjectOptions];
    questionOneDrop.appendChild(options);
  }

  // Question Two
  var questionTwo = document.createElement('p');
  elementaryFieldSet.appendChild(questionTwo);
  questionTwo.textContent = 'What were your favorite things to do?';
  var questionTwoDrop = document.createElement('select');
  questionTwoDrop.name = 'hobbiesAsKid';
  questionTwo.appendChild(questionTwoDrop);
  var ThingsToDO = ['Sports', 'Pick Your Nose', 'Play Video Games', 'Fight With Siblings', 'Watch TV'];
  for (var ThingsToDOOptions = 0; ThingsToDOOptions < ThingsToDO.length; ThingsToDOOptions++) {
    var elemOptions = document.createElement('option');
    elemOptions.value = ThingsToDO[ThingsToDOOptions];
    elemOptions.text = ThingsToDO[ThingsToDOOptions];
    questionTwoDrop.appendChild(elemOptions);
  }
  // Question Three
  var questionThree = document.createElement('p');
  elementaryFieldSet.appendChild(questionThree);
  questionThree.textContent = 'Were you sent to the principals office?';
  var questionThreeDrop = document.createElement('select');
  questionThreeDrop.name = 'troubled';
  questionThree.appendChild(questionThreeDrop);
  var questionThreeChoices = ['Yes', 'No'];
  for (var i = 0; i < questionThreeChoices.length; i++) {
    var questionThreeOptions = document.createElement('option');
    questionThreeOptions.value = questionThreeChoices[i];
    questionThreeOptions.text = questionThreeChoices[i];
    questionThreeDrop.appendChild(questionThreeOptions);
  }

  // Question Four
  var questionFour = document.createElement('p');
  questionFour.textContent = 'What was your favorite cartoon?';
  elementaryFieldSet.appendChild(questionFour);
  var questionFourField = document.createElement('input');
  questionFourField.setAttribute('class', 'inputField');
  questionFourField.type = 'text';
  questionFourField.name = 'cartoon';
  questionFour.appendChild(questionFourField);

  formSubmission(elementaryFieldSet, 'elemetaryAnswers');
};

function submitHandlerElementary(event) {
  event.preventDefault();
  console.log('event.target.id :', event.target.id);
  var nameArray = [event.target.favoriteSubject, event.target.hobbiesAsKid, event.target.troubled, event.target.cartoon];
  for (var i = 0; i < nameArray.length; i++) {
    var addArray = [];
    if (nameArray[i].name === undefined) {
      addArray.push(nameArray[i][1].name, nameArray[i].value);
      console.log('addArraytop :', addArray);
    } else {
      addArray.push(nameArray[i].name, nameArray[i].value);
      console.log('addArraybot :', addArray);
    }
    elementaryFormDataArray.push(addArray);

  }
  event.target.reset();
}

createElementaryForm();
var elementaryForm = document.getElementById('elementary');
elementaryForm.addEventListener('submit', submitHandlerElementary);



// var createSplashPage = function () {
//   var getSplash = document.getElementById('splash');
//   var dataAlert = alert('Warning: This page asks you for information about yourself. The information will be used to create a personalized lesson about Javascript demonstrated by your life choices. The information will be stored on your device, in its local file system. Once you complete the entire lesson all information will be deleted. By selecting "ok" you agree to continue.  ');
// };

// createSplashPage();

// High School Global Array

var hsGlobalArray = [];


//Global Array for College Form
var collegeArray = [];
var careerArray = [];
var storageArray = [];



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




function collegeFormRender() {

  //Start of college form
  var collegeSection = document.getElementById('college');
  var collegeFormElem = document.createElement('form');
  collegeFormElem.id = 'stringify';
  var collegeFeildSetElem = document.createElement('fieldset');
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
  careerFormElem.id = 'finishedProduct';
  var careerFeildSetElem = document.createElement('fieldset');
  var careerLegendElem = document.createElement('legend');
  careerLegendElem.textContent = 'Life as an Adult';
  careerSection.appendChild(careerFormElem);
  careerFormElem.appendChild(careerFeildSetElem);
  careerFeildSetElem.appendChild(careerLegendElem);


  //First Input-Career Path
  var careerPath = document.createElement('p');
  careerPath.textContent = 'What career did you end up with?';
  careerFeildSetElem.appendChild(careerPath);

  var career = ['Military', 'Buisness', 'Engineer', 'Finance', 'Skill Trade', 'Other'];
  var careerDropDownElem = document.createElement('select');
  careerDropDownElem.name = 'careerPath';
  careerPath.appendChild(careerDropDownElem);

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
  hobbiesAsAdultText.name = 'adultHobbies';
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
  regionAdultField.name = 'regionAsAdult';
  regionAdultField.type = 'text';

  regionAdultElement.appendChild(regionAdultField);

  formSubmission(careerFeildSetElem, 'careerSubmit');
}

function formSubmission(formElem, formValue) {
  var submitForm = document.createElement('button');
  submitForm.type = 'submit';
  submitForm.value = formValue;
  submitForm.textContent = 'Continue';
  formElem.appendChild(submitForm);
}


function submitHandlerCollege(event) {
  event.preventDefault();
  var nameArray = [event.target.educationPath, event.target.degreetype, event.target.maritalStatus, event.target.beliefs];
  for (var i = 0; i < nameArray.length; i++) {
    var addArray = [];
    if (nameArray[i].name === undefined) {
      addArray.push(nameArray[i][1].name, nameArray[i].value);
    } else {
      addArray.push(nameArray[i].name, nameArray[i].value);
    }
    collegeArray.push(addArray);

  }
  console.log('collegeArray :', collegeArray);


  event.target.reset();
  storageArray.push(birthGlobalArray);
  storageArray.push(elementaryFormDataArray);
  storageArray.push(hsGlobalArray);
  storageArray.push(collegeArray);
  localStorage.userData = JSON.stringify(storageArray);

}

function submitHandlerCareer(event) {
  event.preventDefault();
  var nameArray = [event.target.careerPath, event.target.adultHobbies, event.target.maritalStatusAdult, event.target.regionAsAdult];
  for (var i = 0; i < nameArray.length; i++) {
    var addArray = [];
    if (nameArray[i].name === undefined) {
      addArray.push(nameArray[i][1].name, nameArray[i].value);
    } else {
      addArray.push(nameArray[i].name, nameArray[i].value);
    }
    careerArray.push(addArray);

  }
  console.log('careerArray :', careerArray);
  event.target.reset();
  // storageArray
}


//Mattäus-------------------------------------------------------------------------------------------------
var birthGlobalArray = [];

var birthDivElement = document.getElementById('birth');

var birthForm = document.createElement('form');
birthForm.id = 'birthForn';
birthDivElement.appendChild(birthForm);

var birthFieldset = document.createElement('fieldset');
birthForm.appendChild(birthFieldset);

var deadLegend = document.createElement('legend');
deadLegend.textContent = '';
birthFieldset.appendChild(deadLegend);

//----------------------------------------------Input 1 ---------------------------------
var birthSeason = document.createElement('p');
birthSeason.textContent = 'Season of Birth: ';
birthFieldset.appendChild(birthSeason);


var seasonArray = ['Spring', 'Summer', 'Fall', 'Winter'];
var seasonChoice = document.createElement('select');
seasonChoice.id = 'seasonID';
seasonChoice.name = 'seasonDDValue';
seasonChoice.required = true;
birthSeason.appendChild(seasonChoice);

for (var season = 0; season < seasonArray.length; season++) {
  var seasonOption = document.createElement('option');
  seasonOption.value = seasonArray[season];
  seasonOption.text = seasonArray[season];
  seasonChoice.appendChild(seasonOption);
}
//---------------------------------------------Input 2 -----------------------------------
var birthName = document.createElement('p');
birthName.textContent = 'Birth Name: ';
birthFieldset.appendChild(birthName);

var nameField = document.createElement('input');
nameField.type = 'text';
nameField.name = 'birthNameFieldValue';
nameField.required = true;

birthName.appendChild(nameField);
//--------------------------------------------- Input 3 -----------------------------------

var birthGender = document.createElement('p');
birthGender.textContent = 'Birth gender: ';
birthFieldset.appendChild(birthGender);


var genderArray = ['Male', 'Female', 'Non-Binary'];
var genderChoice = document.createElement('select');
genderChoice.id = 'genderID';
genderChoice.name = 'genderDDValue';
genderChoice.required = true;

birthGender.appendChild(genderChoice);

for (var gender = 0; gender < genderArray.length; gender++) {
  var option = document.createElement('option');
  option.value = genderArray[gender];
  option.text = genderArray[gender];
  genderChoice.appendChild(option);
}

//---------------------------------------------- Input 4 ---------------------------------------
var regionElement = document.createElement('p');
regionElement.textContent = 'Region of Birth: ';
birthFieldset.appendChild(regionElement);

var regionField = document.createElement('input');
regionField.type = 'text';
regionField.name = 'regionFieldValue';
regionField.required = true;

regionElement.appendChild(regionField);



var birthSubmitButton = document.createElement('button');
birthSubmitButton.type = 'submit';
birthSubmitButton.name = 'birthSubmit';
birthSubmitButton.value = 'birthSubmit';
birthSubmitButton.textContent = 'Submit';

birthFieldset.appendChild(birthSubmitButton);
birthForm.addEventListener('submit', birthHandler);


//Mattäus------------------------------------------------------------------------------------------------
var deathGlobalArray = [];
var deathDivElement = document.getElementById('death');

var deathForm = document.createElement('form');
deathForm.id = 'deathForm';
deathDivElement.appendChild(deathForm);

var deadFieldset = document.createElement('fieldset');
deathForm.appendChild(deadFieldset);

deadLegend.textContent = '';
deadFieldset.appendChild(deadLegend);


//----------------------------------------------Input 1 ---------------------------------
var deathCeremonyType = document.createElement('p');
deathCeremonyType.textContent = 'Burial Preference: ';
deadFieldset.appendChild(deathCeremonyType);


var burialArray = ['Incineration ', 'Burial', 'Tree Pod', 'Mummification'];
var burialChoice = document.createElement('select');
burialChoice.name = 'burialDDValue';
burialChoice.required = true;
deathCeremonyType.appendChild(burialChoice);


for (var buryType = 0; buryType < burialArray.length; buryType++) {
  var buryOption = document.createElement('option');
  buryOption.value = burialArray[buryType];
  buryOption.text = burialArray[buryType];
  burialChoice.appendChild(buryOption);
}
//---------------------------------------------Input 2 -----------------------------------
var retirementDestination = document.createElement('p');
retirementDestination.textContent = 'Retirement Destination: ';
deadFieldset.appendChild(retirementDestination);

var retirementField = document.createElement('input');
retirementField.type = 'text';
retirementField.name = 'retirementFieldValue';
retirementField.required = true;

retirementDestination.appendChild(retirementField);
//--------------------------------------------- Input 3 ------------------------------------
var bucketList = document.createElement('p');
bucketList.textContent = 'Have a bucket list? ';
deadFieldset.appendChild(bucketList);


var bucketArray = ['Yes', 'No', 'Not-Yet'];
var bucketSelection = document.createElement('select');
bucketSelection.id = 'bucketID';
bucketSelection.name = 'bucketDDValue';
bucketSelection.required = true;
bucketList.appendChild(bucketSelection);

for (var bucketOption = 0; bucketOption < bucketArray.length; bucketOption++) {
  var dropOption = document.createElement('option');
  dropOption.value = bucketArray[bucketOption];
  dropOption.text = bucketArray[bucketOption];
  bucketSelection.appendChild(dropOption);
}

//---------------------------------------------- Input 4 ---------------------------------------
var fullfillmentArticle = document.createElement('article');
fullfillmentArticle.textContent = 'What will provide you fullfillment? ';
// var breakAdd = document.createElement('break');
deadFieldset.appendChild(fullfillmentArticle);

var financialFulfillmentLabel = document.createElement('p');
financialFulfillmentLabel.textContent = 'Financial';
fullfillmentArticle.appendChild(financialFulfillmentLabel);

var financialFulfillment = document.createElement('input');
financialFulfillment.type = 'checkbox';
financialFulfillment.name = 'financial';
financialFulfillment.value = 'Financial';
financialFulfillment.id = 'financialID';
financialFulfillmentLabel.appendChild(financialFulfillment);

var marriageFulfillmentLabel = document.createElement('p');
marriageFulfillmentLabel.textContent = 'Marriage';
fullfillmentArticle.appendChild(marriageFulfillmentLabel);

var marriageFulfillment = document.createElement('input');
marriageFulfillment.type = 'checkbox';
marriageFulfillment.name = 'marriage';
marriageFulfillment.value = 'Marriage';
marriageFulfillment.id = 'marriageID';
marriageFulfillmentLabel.appendChild(marriageFulfillment);

var childrenFulfillmentLabel = document.createElement('p');
childrenFulfillmentLabel.textContent = 'Children';
fullfillmentArticle.appendChild(childrenFulfillmentLabel);

var childrenFulfillment = document.createElement('input');
childrenFulfillment.type = 'checkbox';
childrenFulfillment.name = 'children';
childrenFulfillment.value = 'Children';
childrenFulfillment.id = 'childrenID';
childrenFulfillmentLabel.appendChild(childrenFulfillment);

var careerFulfillmentLabel = document.createElement('p');
careerFulfillmentLabel.textContent = 'Career';
fullfillmentArticle.appendChild(careerFulfillmentLabel);

var careerFulfillment = document.createElement('input');
careerFulfillment.type = 'checkbox';
careerFulfillment.name = 'career';
careerFulfillment.value = 'Career';
careerFulfillment.id = 'careerID';
careerFulfillmentLabel.appendChild(careerFulfillment);

//------------------------------------------------------------------------------------------------
function birthHandler(event) {
  event.preventDefault();

  var birthNameText = event.target.birthNameFieldValue.value;
  var seasonDropDownValue = event.target.seasonDDValue.value;
  var genderDropDownValue = event.target.genderDDValue.value;
  var regionText = event.target.regionFieldValue.value;


  birthGlobalArray.push(birthNameText);
  birthGlobalArray.push(seasonDropDownValue);
  birthGlobalArray.push(genderDropDownValue);
  birthGlobalArray.push(regionText);

  console.log(birthNameText);
  console.log(seasonDropDownValue);
  console.log(genderDropDownValue);
  console.log(regionText);

  event.target.reset();
}

function deathHandler(event) {
  event.preventDefault();

  var burialDropDownValue = event.target.burialDDValue.value;
  var retirementText = event.target.retirementFieldValue.value;
  var bucketDropDownValue = event.target.bucketDDValue.value;
  var fullfillmentCheck = arrayOfChecked;

  deathGlobalArray.push(burialDropDownValue);
  deathGlobalArray.push(retirementText);
  deathGlobalArray.push(bucketDropDownValue);
  deathGlobalArray.push(fullfillmentCheck);

  console.log(burialDropDownValue);
  console.log(retirementText);
  console.log(bucketDropDownValue);
  console.log(fullfillmentCheck);

  event.target.reset();
}

document.getElementById('financialID').onclick = checkBoxCheck;
document.getElementById('marriageID').onclick = checkBoxCheck;
document.getElementById('childrenID').onclick = checkBoxCheck;
document.getElementById('careerID').onclick = checkBoxCheck;

var arrayOfChecked = [];

function checkBoxCheck() {
  console.log(this);
  // var arrayOfIDs = ['financialID', 'marriageID', 'childrenID', 'careerID'];

  arrayOfChecked.push(this.value);
  console.log(arrayOfChecked);
}



collegeFormRender();
var collegeForm = document.getElementById('college');
collegeForm.addEventListener('submit', submitHandlerCollege);
careerFormRender();
var careerForm = document.getElementById('career');
careerForm.addEventListener('submit', submitHandlerCareer);

var deathSubmitButton = document.createElement('button');
deathSubmitButton.type = 'submit';
deathSubmitButton.name = 'deathSubmit';
deathSubmitButton.value = 'deathSubmit';
deathSubmitButton.textContent = 'Submit';

deathForm.appendChild(deathSubmitButton);
deathForm.addEventListener('submit', deathHandler);


//

