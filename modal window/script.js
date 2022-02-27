'use strict';
const modal = document.querySelector('.modal');
const modalBtn = document.querySelectorAll('.show-modal');
const modalClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// since all button are doing the same work.so we add a loop over them. otherwise we would only use onclick or specific event listener
for(let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click',() => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
document.addEventListener('keydown',(e) => {
    if(e.key === 'Escape') {
        closeModal()
    }
})

modalClose.addEventListener('click',() => {
    closeModal()
})

overlay.addEventListener('click',() => {
    closeModal()
})