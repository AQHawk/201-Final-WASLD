'use strict';

var welcome = document.getElementById('welcome');
var welcomeHeader = document.getElementById('welcomeHeader');
var pastJournals = document.getElementById('journalEntriesGoHere');
NewJournal.all = [];


if (localStorage.workout) {
  welcome.innerHTML = 'Hey ' + (JSON.parse(localStorage.workout).userName) + '! Welcome Back.';
}
if (JSON.parse(localStorage.journals)[0]) {
  pastJournals.style.maxHeight = '500px';
  pastJournals.style.overflowY = 'scroll';
  var journalParsed = JSON.parse(localStorage.journals);
  NewJournal.all = NewJournal.all.concat(journalParsed);
  constructJournals();
}


// +++++++++++++++++++++++++++++++++++++++++
// +++++++ Constructor
// +++++++++++++++++++++++++++++++++++++++++
function NewJournal(subject, textArea, id, currentWorkout){
  this.subject = subject;
  this.textArea = textArea;
  this.id = id;
  this.workoutHeader = currentWorkout;
  NewJournal.all.push(this);
}

// +++++++++++++++++++++++++++++++++++++++++
// +++++++ functions
// +++++++++++++++++++++++++++++++++++++++++
function buildJournals(subject, textArea, i, currentWorkout){
  var secEl = document.createElement('section');
  var header = document.createElement('h6');
  var workout = document.createElement('h5');
  var pEl = document.createElement('p');
  var delEl = document.createElement('a');
  header.textContent = (subject);
  workout.textContent = (currentWorkout);
  pEl.textContent = (textArea);
  delEl.innerHTML = '<img src="img/delete.png"/>';
  secEl.setAttribute('id', i);
  delEl.setAttribute('onclick', 'deleteJournal(this.parentElement)');
  secEl.appendChild(header);
  secEl.appendChild(pEl);
  secEl.appendChild(delEl);
  secEl.appendChild(workout);
  pastJournals.insertBefore(secEl, pastJournals.childNodes[0]);
  console.log(delEl.parentElement);
}

function constructJournals() {
  pastJournals.innerHTML = '';
  for (var i = 0; i < NewJournal.all.length; i++){
    buildJournals(NewJournal.all[i].subject, NewJournal.all[i].textArea, NewJournal.all[i].id, NewJournal.all[i].workoutHeader);
  }
  var hereAre = document.createElement('h2');
  hereAre.textContent = 'Here are your past journals';
  welcomeHeader.insertBefore(hereAre, welcomeHeader.childNodes[2]);
}

function deleteJournal(parent) { // eslint-disable-line
  parent.remove();
  NewJournal.all.splice(parent.id, 1);
  for (var i = 0; i < (JSON.parse(localStorage.journals).length - 1); i ++) {
    NewJournal.all[i].id = i;
  }
  localStorage.journals = JSON.stringify(NewJournal.all);
  console.log(parent.id);
}
