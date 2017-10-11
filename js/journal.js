'use strict';

// +++++++++++++++++++++++++++++++++++++++++
// +++++++ global variables
// +++++++++++++++++++++++++++++++++++++++++
var journal = document.getElementById('journalForm');
var pastJournals = document.getElementById('journalEntriesGoHere');
NewJournal.all = [];

// +++++++++++++++++++++++++++++++++++++++++
// +++++++ localStorage Check
// +++++++++++++++++++++++++++++++++++++++++
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
function NewJournal(subject, textArea){
  this.subject = subject;
  this.textArea = textArea;
  NewJournal.all.unshift(this);
}

// +++++++++++++++++++++++++++++++++++++++++
// +++++++ functions
// +++++++++++++++++++++++++++++++++++++++++
function buildJournals(subject, textArea){
  var secEl = document.createElement('section');
  var header = document.createElement('h6');
  var pEl = document.createElement('p');
  var delEl = document.createElement('button');
  header.textContent = (subject);
  pEl.textContent = (textArea);
  secEl.id = 'test';
  secEl.appendChild(header);
  secEl.appendChild(pEl);
  pastJournals.insertBefore(secEl, pastJournals.childNodes[0]);
}

function constructJournals() {
  for (var i = NewJournal.all.length - 1; i > - 1; i--){
    buildJournals(NewJournal.all[i].subject, NewJournal.all[i].textArea);
  }
}

function submitJournal(event){
  event.preventDefault();
  var subject = event.target.subject.value;
  var entry = event.target.entry.value;
  new NewJournal(subject, entry);
  buildJournals(subject, entry);
  localStorage.journals = JSON.stringify(NewJournal.all);
  event.target.subject.value = null;
  event.target.entry.value = null;
}

function changeJournalHeader() {
  var title = document.getElementById('selectedWorkout');
  title.textContent = (JSON.parse(localStorage.workout).name);
}

// +++++++++++++++++++++++++++++++++++++++++
// +++++++ Listeners / Run on page load
// +++++++++++++++++++++++++++++++++++++++++
journal.addEventListener('submit', submitJournal);
constructJournals();
