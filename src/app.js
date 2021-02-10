'use strict'

function toggleModal() {
    const modal = document.getElementById("modal");
    modal.style.display = 'flex'
}

function clickButton() {
console.log('click')
    toggleModal()
}

function render () {
    const showMore = document.getElementById('show-more')

    console.log(showMore)
    showMore.addEventListener('click', () => {
        console.log('click')
    });

    console.log('render')
}

render()