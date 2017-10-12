'use strict';

var welcome = document.getElementById('welcome');

if (localStorage.workout) {
  welcome.innerHTML = 'Hey ' + (JSON.parse(localStorage.workout).userName) + '! Welcome Back.';
}
