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
  changeJournalHeader();
};

// +++++++++++++++++++++++++++++++++++++++++
// +++++++ Constructor
// +++++++++++++++++++++++++++++++++++++++++
function NewJournal(subject, textArea, id){
  this.subject = subject;
  this.textArea = textArea;
  this.id = id;
  NewJournal.all.push(this);
}

// +++++++++++++++++++++++++++++++++++++++++
// +++++++ functions
// +++++++++++++++++++++++++++++++++++++++++
function buildJournals(subject, textArea, i){
  var secEl = document.createElement('section');
  var header = document.createElement('h6');
  var pEl = document.createElement('p');
  var delEl = document.createElement('a');
  header.textContent = (subject);
  pEl.textContent = (textArea);
  delEl.textContent = 'img/yt.png';
  secEl.setAttribute('id', i);
  delEl.setAttribute('onclick', 'deleteJournal(this.parentElement)');
  secEl.appendChild(header);
  secEl.appendChild(pEl);
  secEl.appendChild(delEl);
  pastJournals.insertBefore(secEl, pastJournals.childNodes[0]);
  console.log(delEl.parentElement);
}

function constructJournals() {
  for (var i = 0; i < NewJournal.all.length; i++){
    buildJournals(NewJournal.all[i].subject, NewJournal.all[i].textArea, NewJournal.all[i].id);
  }
}

function submitJournal(event){
  event.preventDefault();
  if (localStorage.journals) {
    idCounter = (JSON.parse(localStorage.journals).length);
  }
  var subject = event.target.subject.value;
  var entry = event.target.entry.value;
  console.log(idCounter);
  new NewJournal(subject, entry, idCounter);
  buildJournals(subject, entry, idCounter);
  localStorage.journals = JSON.stringify(NewJournal.all);
  event.target.subject.value = null;
  event.target.entry.value = null;
}

function changeJournalHeader() {
  var title = document.getElementById('selectedWorkout');
  title.textContent = (JSON.parse(localStorage.workout).name);
}


function deleteJournal(parent) {
  console.log(parent.id);
  parent.remove();
}

// +++++++++++++++++++++++++++++++++++++++++
// +++++++ Listeners / Run on page load
// +++++++++++++++++++++++++++++++++++++++++
journalForm.addEventListener('submit', submitJournal);
constructJournals();
