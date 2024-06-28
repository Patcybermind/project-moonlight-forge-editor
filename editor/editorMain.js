// contains code for buttons and controls everything

import { exportSTL } from './openscadMain.js';
//import getEditorContent from './monacoEditorMain.js';

console.log("Editor Main is loaded");
function renderFunction() {
    console.log("Render function is called");
    const code = window.getEditorContent();
    console.log(code);
    exportSTL(code);
    
    
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('renderBtn').addEventListener('click', renderFunction);
});