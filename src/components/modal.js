function toggleModal(title = '') {
    const modal = document.querySelector(".modal");
    const modalTitle = document.querySelector(".modal-title")
    modalTitle.innerHTML = title;
    if (modal.style.display === 'block') {
        return modal.style.display = 'none'
    }
    return modal.style.display = 'block'
}

const close = document.querySelector('#close-modal-button');
close.addEventListener('click', function() {
    toggleModal();
});


export {
    toggleModal
}
