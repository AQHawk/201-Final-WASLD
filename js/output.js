'use strict';

if (localStorage.workout){
  var workoutChoice = JSON.parse(localStorage.workout);
} else {
  window.location = 'inputForm.html';
};

function renderWorkout(){
var renderResultsI2 = workoutChoice[2].textImgForRendering;
var renderResultsI1 = workoutChoice[1].textImgForRendering;
var renderResultsI0 = workoutChoice[0].textImgForRendering;
document.getElementById('results1').innerHTML = renderResultsI2;
document.getElementById('results2').innerHTML = renderResultsI1;
document.getElementById('results3').innerHTML = renderResultsI0;
}


renderWorkout();
// add selected
