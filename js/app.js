'use strict';


// +++++++++++++++++++++++++++++++++++++++++
// +++++++ Constructor
// +++++++++++++++++++++++++++++++++++++++++
function Workouts(name, length, intensity, style){
  this.name = name;
  this.length = [];
  this.intensity = intensity;
  this.style = [];
  this.length = this.length.concat(length);
  this.style = this.style.concat(style);
}

var workout1 = new Workouts(name, [length], intensity, [style]);
