import { toggleModal } from "../components/modal.js";
import { actionsSkills } from "./actionsSkills.js";


function buttonsActions() {
    const buttons = document.querySelectorAll('.button:not([type=submit])');

    buttons.forEach(button => {
        let title = button.dataset.id;
        button.addEventListener('click', function() {
            toggleModal(title);
        });
        return;
    });

    const form = document.getElementById( "contact-form" );
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const elements = this.elements
        for(let i=0; i< elements.length; i++) {
            if(['submit'].includes(elements[i].type)) {
                return false;
            }

            let formData = new FormData(form);
            console.log({ fd: formData})
            console.log(elements[i].value)
        }
    });

}
function renderActions() {
    actionsSkills()
    buttonsActions()
}

export {
    renderActions
};
