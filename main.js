// Typing Animation for Home Page
// A bunch of thanks goes to Matt,
// Check out his website: www.mattboldt.com
// -----------------------------------------
// Dark and Light Theme Handle
// -----------------------------------------

const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
const body = document.querySelector('body');

sun.addEventListener('click', function() {
    moon.classList.remove('selected-theme');
    sun.classList.add('selected-theme');
    body.classList.remove('theme-dark');
});

moon.addEventListener('click', function() {
    sun.classList.remove('selected-theme');
    moon.classList.add('selected-theme');
    body.classList.add('theme-dark');
});

// -----------------------------------------
// Sliding Effects of About-Page
// -----------------------------------------
const yellowLine = document.getElementsByClassName('yellow-line-one');
const userIcon = document.querySelector('.fa-user');
const userTitle = document.querySelector('.user-title');
const userText = document.querySelector('.user-text');

let waypoint = new Waypoint({
    element: document.getElementById('about-page'),
    handler: function(direction) {
        direction === "down" && garbageCollector();
    }
});

function garbageCollector() {
    fadeIn();
    slideLeft()
};

function fadeIn() {
    userIcon.style.opacity = 1;
    userTitle.style.opacity = 1;
    userText.style.opacity = 1;
};

function slideLeft() {
    yellowLine[0].style.marginLeft = "-600px";
    yellowLine[1].style.marginLeft = "-600px";
}