'use strict';


// +++++++++++++++++++++++++++++++++++++++++
// +++++++ Constructor
// +++++++++++++++++++++++++++++++++++++++++
function Workouts(name, length, intensity, style){
  this.name = name;
  this.length = length;
  this.intensity = intensity;
  this.style = style;
}

var workout1 = new Workouts(name, [length], intensity, [style]);
