'use strict'

function toggleModal() {
    const modal = document.querySelector(".modal");
    console.log(modal.style['display'])
    if (modal.style.display === 'block') {
       return modal.style.display = 'none'
    }
   return modal.style.display = 'block'
}

function renderActions () {
    const button = document.querySelector('#show-more');
    document.querySelectorAll('.carousel-item').forEach(skill =>{
        return   skill.addEventListener('click', function() {
            console.log('skill')
            toggleModal();
        });
    });
    const close = document.querySelector('#close-modal-button');

    button.addEventListener('click', function() {
        toggleModal();
    });

    close.addEventListener('click', function() {
        toggleModal();
    });
}

renderActions()