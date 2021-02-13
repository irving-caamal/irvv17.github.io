
function toggleModal() {
    const modal = document.getElementById("modal");
    modal.style.display = 'flex'
}

function clickButton() {
console.log('click')
    toggleModal()
}

const showMoreButton = document.querySelector('#show-more').addEventListener('click', function() {
    console.log('click')
});