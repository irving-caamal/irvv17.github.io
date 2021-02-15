'use strict'

function toggleModal(title = '') {
    const modal = document.querySelector(".modal");
    console.log(modal.style['display'])
    const modalTitle = document.querySelector(".modal-title")
    modalTitle.innerHTML = title;
    if (modal.style.display === 'block') {
       return modal.style.display = 'none'
    }
   return modal.style.display = 'block'
}

function renderActions () {
    const button = document.querySelector('#show-more');
    document.querySelectorAll('.carousel-item').forEach(skill =>{
        return   skill.addEventListener('click', function() {
            console.log('skill', )
            toggleModal();
        });
    });
    const close = document.querySelector('#close-modal-button');

    button.addEventListener('click', function(e) {
        console.log(e.data,button.dataset,'button')
        const title = button.dataset.id;
        toggleModal(title);
    });

    close.addEventListener('click', function() {
        toggleModal();
    });
}

renderActions()