'use strict';

if (localStorage.workout){
  var workoutChoice = JSON.parse(localStorage.workout);
} else {
  window.location = 'inputForm.html';
};

function renderWorkout(){
  var renderResults = workoutChoice[2].textImgForRendering + workoutChoice[1].textImgForRendering + workoutChoice[0].textImgForRendering;
  document.getElementById('results').innerHTML = renderResults;
}

function selectFinalWorkout0(){
  workoutChoice[0].textImgForRendering = workoutChoice[0].textImgForRendering.slice(0, -95);
  workoutChoice[0].textImgForRendering = workoutChoice[0].textImgForRendering.concat('</section>');
  localStorage.workout = JSON.stringify(workoutChoice[0]);
  window.location = 'journal.html';
}
function selectFinalWorkout1(){
  workoutChoice[1].textImgForRendering = workoutChoice[1].textImgForRendering.slice(0, -95);
  workoutChoice[1].textImgForRendering = workoutChoice[1].textImgForRendering.concat('</section>');
  localStorage.workout = JSON.stringify(workoutChoice[1]);
  window.location = 'journal.html';
}
function selectFinalWorkout2(){
  workoutChoice[2].textImgForRendering = workoutChoice[2].textImgForRendering.slice(0, -95);
  workoutChoice[2].textImgForRendering = workoutChoice[2].textImgForRendering.concat('</section>');
  localStorage.workout = JSON.stringify(workoutChoice[2]);
  window.location = 'journal.html';
}

renderWorkout();
var buttonChoice0 = document.getElementById('submit0');
var buttonChoice1 = document.getElementById('submit1');
var buttonChoice2 = document.getElementById('submit2');

buttonChoice0.addEventListener('click', selectFinalWorkout0);
buttonChoice1.addEventListener('click', selectFinalWorkout1);
buttonChoice2.addEventListener('click', selectFinalWorkout2);
// add selected
