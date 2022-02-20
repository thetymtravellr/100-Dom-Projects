/**
* * hello
* ? heelo
* ! hello
*/
'use strict';



const noteAddBtn = document.getElementById('note-add-btn');

noteAddBtn.addEventListener('click',() => {
    const noteHolder = document.getElementById('holder');
    const noteInput = document.getElementById('note-input');
    const noteInputValue = noteInput.value;
    if(noteInput.value != '') {
        const li = document.createElement('li');
        li.classList.add('items');
        li.innerText = noteInputValue;
        noteHolder.appendChild(li);
    
        // clear input
        noteInput.value = '';
    }
})