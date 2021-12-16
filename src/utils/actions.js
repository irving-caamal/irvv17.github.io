import { toggleModal } from "../components/modal.js";
import { actionsSkills } from "./actionsSkills.js";


function buttonsActions() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        let title = button.dataset.id;
        return   button.addEventListener('click', function() {
            toggleModal(title);
        });
    });
}
function renderActions() {
    actionsSkills()
    buttonsActions()
}

export {
    renderActions
};
