'use strict';

//Mattäus-------------------------------------------------------------------------------------------------
var birthDivElement = document.getElementById('birth');

var birthForm = document.createElement('form');
birthForm.id = 'birthForn'
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
birthSeason.appendChild(seasonChoice);

for(var season = 0; season < seasonArray.length; season++){
    var option = document.createElement('option');
    option.value = seasonArray[season];
    option.text = seasonArray[season];
    seasonChoice.appendChild(option);
}
//---------------------------------------------Input 2 -----------------------------------
var birthName = document.createElement('p');
birthName.textContent = 'Birth Name: ';
birthFieldset.appendChild(birthName);

var nameField = document.createElement('input');
nameField.type = 'text';

birthName.appendChild(nameField);
//--------------------------------------------- Input 3 ------------------------------------
var maleGenderElement = document.createElement('p');
maleGenderElement.textContent = 'Male';
var genderElementArticle = document.createElement('article');
genderElementArticle.textContent = 'Gender: ';

var male = document.createElement('input');
male.type = 'radio';
male.name = 'gender';
male.value = 'male';
maleGenderElement.appendChild(male);

var femaleGenderElement = document.createElement('p');
femaleGenderElement.textContent = 'Female';

var female = document.createElement('input');
female.type = 'radio';
female.name = 'gender';
female.value = 'female';
femaleGenderElement.appendChild(female);

var nonBinaryGenderElement = document.createElement('p');
nonBinaryGenderElement.textContent = 'Non-Binary';

var nonBinary = document.createElement('input');
nonBinary.type = 'radio';
nonBinary.name = 'gender';
nonBinary.value = 'non binary';
nonBinaryGenderElement.appendChild(nonBinary);


birthFieldset.appendChild(genderElementArticle);
genderElementArticle.appendChild(maleGenderElement);
genderElementArticle.appendChild(femaleGenderElement);
genderElementArticle.appendChild(nonBinaryGenderElement);
//---------------------------------------------- Input 4 ---------------------------------------
var regionElement = document.createElement('p');
regionElement.textContent = 'Region of Birth: ';
birthFieldset.appendChild(regionElement);

var regionField = document.createElement('input');
regionField.type = 'text';

regionElement.appendChild(regionField);
//Mattäus------------------------------------------------------------------------------------------------

var deathDivElement = document.getElementById('death');

var deathForm = document.createElement('form');
deathForm.id = 'deathForm'
deathDivElement.appendChild(deathForm);

var deadFieldset = document.createElement('fieldset');
deathForm.appendChild(deadFieldset);

var deadLegend = document.createElement('legend');
deadLegend.textContent = '';
deadFieldset.appendChild(deadLegend);


//----------------------------------------------Input 1 ---------------------------------
var deathCeremonyType = document.createElement('p');
deathCeremonyType.textContent = 'Burial Preference: ';
deadFieldset.appendChild(deathCeremonyType);


var burialArray = ['Incineration ', 'Burial', 'Tree Pod', 'Mummification'];
var burialChoice = document.createElement('select');
deathCeremonyType.appendChild(burialChoice);

for(var buryType = 0; buryType < burialArray.length; buryType++){
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

retirementDestination.appendChild(retirementField);
//--------------------------------------------- Input 3 ------------------------------------
var  bucketArticle = document.createElement('article');
bucketArticle.id = 'bucketArticleElement';
bucketArticle.textContent = 'Have a bucket list completed? ';
var yesBucketElement = document.createElement('p');
yesBucketElement.textContent = 'Yes: ';

var yesRadio = document.createElement('input');
yesRadio.type = 'radio';
yesRadio.name = 'bucket';
yesRadio.value = 'yes';
yesBucketElement.appendChild(yesRadio);

var noBucketElement = document.createElement('p');
noBucketElement.textContent = 'No: ';

var noRadio = document.createElement('input');
noRadio.type = 'radio';
noRadio.name = 'bucket';
noRadio.value = 'no';
noBucketElement.appendChild(noRadio);

deadFieldset.appendChild(bucketArticle);
bucketArticle.appendChild(yesBucketElement);
bucketArticle.appendChild(noBucketElement);
//---------------------------------------------- Input 4 ---------------------------------------
var fullfillmentArticle = document.createElement('article');
fullfillmentArticle.textContent = 'What will provide you fullfillment? ';
var breakAdd = document.createElement('break');
deadFieldset.appendChild(fullfillmentArticle);

var financialFulfillmentLabel  = document.createElement('p');
financialFulfillmentLabel.textContent = 'Financial';
fullfillmentArticle.appendChild(financialFulfillmentLabel);

var financialFulfillment = document.createElement('input');
financialFulfillment.type = 'checkbox';
financialFulfillment.name = 'financial';
financialFulfillment.value = 'Financial';
financialFulfillment.id = "id";
financialFulfillmentLabel.appendChild(financialFulfillment);

var marriageFulfillmentLabel  = document.createElement('p');
marriageFulfillmentLabel.textContent = 'Marriage';
fullfillmentArticle.appendChild(marriageFulfillmentLabel);

var marriageFulfillment = document.createElement('input');
marriageFulfillment.type = 'checkbox';
marriageFulfillment.name = 'marriage';
marriageFulfillment.value = 'Marriage';
marriageFulfillment.id = 'id';
marriageFulfillmentLabel.appendChild(marriageFulfillment);

var childrenFulfillmentLabel  = document.createElement('p');
childrenFulfillmentLabel.textContent = 'Children';
fullfillmentArticle.appendChild(childrenFulfillmentLabel);

var childrenFulfillment = document.createElement('input');
childrenFulfillment.type = 'checkbox';
childrenFulfillment.name = 'children';
childrenFulfillment.value = 'Children';
childrenFulfillment.id = 'id';
childrenFulfillmentLabel.appendChild(childrenFulfillment);

var careerFulfillmentLabel  = document.createElement('p');
careerFulfillmentLabel.textContent = 'Career';
fullfillmentArticle.appendChild(careerFulfillmentLabel);

var careerFulfillment = document.createElement('input');
careerFulfillment.type = 'checkbox';
careerFulfillment.name = 'career';
careerFulfillment.value = 'Career';
careerFulfillment.id = 'id';
careerFulfillmentLabel.appendChild(careerFulfillment);

//------------------------------------------------------------------------------------------------
function birthHandler(){

}

function deathHandler(){


}

//