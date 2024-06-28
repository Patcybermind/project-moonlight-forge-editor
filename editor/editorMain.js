// contains code for buttons and controls everything

import openscadMain from 'openscadMain.js';

function renderFunction() {
    console.log("Render function is called");
    
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('renderBtn').addEventListener('click', renderFunction);
});