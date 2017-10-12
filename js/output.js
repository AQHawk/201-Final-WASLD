'use strict';

if (localStorage.workout){
  var workoutChoice = JSON.parse(localStorage.workout);
} else {
  window.location = 'inputForm.html';
};

function renderWorkout(){
  // var renderResults = document.getElementById('results').innerHTML;
  var renderResults = workoutChoice.textImgForRendering;
  document.getElementById('results').innerHTML = renderResults;
}

renderWorkout();
