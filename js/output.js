'use strict';

if (localStorage.workout){
  var workoutChoice = JSON.parse(localStorage.workout);
} else {
  window.location = 'inputForm.html';
};

function renderWorkout(){
  var renderResults = document.getElementById('results').innerHTML;
  renderResults = workoutChoice[0].textImgForRendering + workoutChoice[1].textImgForRendering + workoutChoice[2].textImgForRendering;
  document.getElementById('results').innerHTML = renderResults;
}

renderWorkout();
