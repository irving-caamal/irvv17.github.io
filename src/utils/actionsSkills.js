import {toggleModal} from "../components/modal.js";
import skillSet from "../data/skills.js";

function arrayAsMap(newList, oldList = new Map()) {
    return newList.reduce((list,skill) => {
        list.set(skill.id, skill)
        return list;
    }, oldList)
}

function actionsSkills() {
    const skills = document.querySelectorAll('.carousel-item')
    const backendSkillsAdMap = arrayAsMap(skillSet.backend)
    const frontendSkillsAdMap = arrayAsMap(skillSet.frontend)
    /**
     *
     */
    skills.forEach(skill => {
        let title = skill.dataset.id;
        let type = skill.dataset.type;

        return skill.addEventListener('click', function() {

            toggleModal(title);
        });
    });
}

export {
    actionsSkills
}
