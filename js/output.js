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

renderWorkout();
// add selected
