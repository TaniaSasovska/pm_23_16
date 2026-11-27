const expertise = [
    {
        name: "Adobe Photoshop",
        level: 80
    },
    {
        name: "Adobe Illustrator",
        level: 70
    },
    {
        name: "Adobe InDesign",
        level: 65
    },
    {
        name: "PowerPoint",
        level: 90
    }
];

function renderExpertise() {
    const container = document.querySelector(".expertise-list");
    container.innerHTML = "";

    expertise.forEach(item => {
        const skill = document.createElement("li");

        skill.className = "expertise-item";
        skill.style.setProperty("--level", item.level);


        skill.innerHTML = `
            ${item.name}
            <br>
            ${item.level}%
        `;

        container.appendChild(skill);
    });
}

document.addEventListener("DOMContentLoaded", renderExpertise);