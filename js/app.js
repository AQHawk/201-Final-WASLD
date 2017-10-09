'use strict';


// +++++++++++++++++++++++++++++++++++++++++
// +++++++ Constructor
// +++++++++++++++++++++++++++++++++++++++++
function Workouts(name, length, intensity, style){
  this.name = [];
  this.length = length;
  this.intensity = intensity;
  this.style = [];
  this.name = this.name.concat(name);
  this.style = this.style.concat(style);
}
