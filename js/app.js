'use strict';

Workouts.allWorkouts = [];
// +++++++++++++++++++++++++++++++++++++++++
// +++++++ Constructor
// +++++++++++++++++++++++++++++++++++++++++
function Workouts(name, length, intensity, style){
  this.name = name;
  this.length = length;
  this.intensity = intensity;
  this.style = style;
  Workouts.allWorkouts.push(this);
}

// var workout1 = new Workouts(name, [length], intensity, [style]);
var cleanWeek	= new Workouts('Clean Week', [2], 1, ['none']);
var shiftShop = new Workouts('Shift Shop', [1, 2], 2, ['cardio', 'express']);
var youVTwo = new Workouts('YOUv2', [2], 1, ['dance', 'tone']);
var yogaRetreat	= new Workouts('3 Week Yoga Retreat', [1], 1, ['specialty']);
var coreDeForce	= new Workouts('Core De Force', [2], 3, ['extreme', 'cardio']);
var countryHeat	= new Workouts('Country Heat', [2], 2, ['dance']);
var twentyTwoMinute	= new Workouts('22 Minute Hard Corps', [1], 4, ['extreme', 'express']);
var hammerAndChisel	= new Workouts('The Master\'s Hammer and Chisel', [2], 2, ['cardio', 'extreme']);
var cize	= new Workouts('CIZE', [2], 2, ['dance']);
var dayFixExtreme	= new Workouts('21 Day Fix EXTREME', [2], 3, ['extreme']);
var insanityMax	= new Workouts('INSANITY MAX:30', [2], 3, ['extreme']);
var pNinetyOriginal	= new Workouts('P90', [1, 2], 2, ['express', 'cardio']);
var piYo = new Workouts('PiYo', [1, 2], 2, ['specialty', 'cardio', 'tone']);
var insanityOriginal = new Workouts('INSANITY', [2, 3], 3, ['extreme', 'cardio']);
var pNinetyX = new Workouts('P90X', [3], 3, ['extreme', 'tone']);
var pNinetyXThree	= new Workouts('P09X3', [2], 3, ['extreme', 'tone']);
var focusT = new Workouts('FOCUS T25', [1], 3, ['extreme', 'cardio']);
var twentyOneFix = new Workouts('21 Day Fix', [2], 2, ['tone']);
var turboFire	= new Workouts('TurboFire', [1, 2, 3], 3, ['express', 'cardio']);
var brazilButt = new Workouts('Brazil Butt Lift', [1, 2, 3], 2, ['express', 'tone', 'specialty']);
var bodyBeast = new Workouts('Body Beast', [1, 2, 3], 3, ['tone', 'express', 'cardio']);
var tenMinutesTrainer	= new Workouts('10-Minute Trainer', [1], 2, ['express', 'cardio']);
var pNinetyXTwo	= new Workouts('P90X2', [3], 3, ['cardio', 'tone']);
var insanityAsylum = new Workouts('INSANITY:THE ASYLUM', [3], 4, ['extreme', 'cardio', 'tone']);
var BrazilMaster = new Workouts('Brazil Butt Lift Master Series', [2], 2, ['tone', 'specialty']);
var taiCheng = new Workouts('Tai Cheng', [2, 3], 1, ['specialty']);
var slimSix = new Workouts('Slim in 6', [1, 2, 3], 2, ['tone', 'cardio']);
var turboJam = new Workouts('Turbo Jam', [1, 2, 3], 3, ['dance', 'tone']);
var hipHopAbs = new Workouts('Hip Hop Abs', [1, 2], 2, ['dance', 'tone', 'cardio', 'express']);
var chaLean = new Workouts('ChaLEAN Extreme', [2], 3, ['tone', 'extreme']);
var rockinBody = new Workouts('Rockin\' Body', [1, 2], 2, ['dance', 'tone']);
