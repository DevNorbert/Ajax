'use strict';

var url = 'https://api.icndb.com/jokes/random';

// Button get joke
var button = document.getElementById('get-joke');
button.addEventListener('click', function () {
    getJoke();
});

// Get Joke
function getJoke() {
    var paragraph = document.getElementById('joke');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function () {
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}
// Onload Joke
var html = document.querySelector('html');
html.addEventListener('load', getJoke());