'use strict';

// +++++++++++++++++++++++++++++++++++++++++
// +++++++ global variables
// +++++++++++++++++++++++++++++++++++++++++
var journalForm = document.getElementById('journalForm');
var pastJournals = document.getElementById('journalEntriesGoHere');
var idCounter = 0;
NewJournal.all = [];

// +++++++++++++++++++++++++++++++++++++++++
// +++++++ localStorage Check
// +++++++++++++++++++++++++++++++++++++++++
if (localStorage.journals) {
  idCounter = (JSON.parse(localStorage.journals).length);
}
if (localStorage.journals){
  var journalParsed = JSON.parse(localStorage.journals);
  NewJournal.all = NewJournal.all.concat(journalParsed);
};
if (localStorage.workout) {
  var workoutChoice = JSON.parse(localStorage.workout);
  var renderResults = workoutChoice.textImgForRendering;
  document.getElementById('results').innerHTML = renderResults;
  changeJournalHeader();
};

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
  var editEl = document.createElement('a');
  header.textContent = (subject);
  workout.textContent = (currentWorkout);
  pEl.textContent = (textArea);
  delEl.innerHTML = '<img class="delete" src="img/delete.png"/>';
  editEl.innerHTML = '<img class="edit" src="img/deleteHover.png"/>';
  secEl.setAttribute('id', i);
  delEl.setAttribute('onclick', 'deleteJournal(this.parentElement)');
  editEl.setAttribute('onclick', 'editJournal(this.parentElement)');
  secEl.appendChild(header);
  secEl.appendChild(pEl);
  // secEl.appendChild(delEl);
  secEl.appendChild(editEl);
  secEl.appendChild(workout);
  pastJournals.insertBefore(secEl, pastJournals.childNodes[0]);
  console.log(delEl.parentElement);
}

function constructJournals() {
  for (var i = 0; i < NewJournal.all.length; i++){
    buildJournals(NewJournal.all[i].subject, NewJournal.all[i].textArea, NewJournal.all[i].id, NewJournal.all[i].workoutHeader);
  }
}

function submitJournal(event){
  event.preventDefault();
  var currentWorkout = (JSON.parse(localStorage.workout).name);

  if (localStorage.journals) {
    idCounter = (JSON.parse(localStorage.journals).length);
  }
  var subject = event.target.subject.value;
  var entry = event.target.entry.value;
  console.log(idCounter);
  new NewJournal(subject, entry, idCounter, currentWorkout);
  buildJournals(subject, entry, idCounter, currentWorkout);
  localStorage.journals = JSON.stringify(NewJournal.all);
  event.target.subject.value = null;
  event.target.entry.value = null;
}

function changeJournalHeader() {
  var title = document.getElementById('selectedWorkout');
  title.textContent = (JSON.parse(localStorage.workout).name);
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
function editJournal(parent) {
  var indexNum = parent.id;
  console.log('index number is: ' + indexNum);
  var subjectValue = JSON.parse(localStorage.journals)[indexNum].subject;

  console.log(subjectValue);
  parent.innerHTML = '<form class="" action="#" method="post">  <label for="journalSubject">Subject: </label><input type="text" name="journalSubject" value="' + subjectValue + '" maxlength="50" required>  <textarea type="text" name="journalEntryText" placeholder="Yay it works!" cols="100" rows="18"></textarea>  <button id="submit" type="submit" name="submit" onclick="editJournal(this.parentElement)">Submit Entry</button>  </form>';
}

// +++++++++++++++++++++++++++++++++++++++++
// +++++++ Listeners / Run on page load
// +++++++++++++++++++++++++++++++++++++++++
journalForm.addEventListener('submit', submitJournal);
constructJournals();
