const hobby = [
    {
        name: "Travel",
        image: "imgs/world.png"
    },
    {
        name: "Music",
        image: "imgs/music.png"
    },
    {
        name: "Writing",
        image: "imgs/copywriting.png"
    },
    {
        name: "Chess",
        image: "imgs/chess.png"
    }
];
function renderHobby() {
    const container = document.querySelector(".hobbies-list");

    container.innerHTML = "";

    hobby.forEach(item => {
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        `;

        container.appendChild(li);
    });
}
document.addEventListener("DOMContentLoaded", renderHobby);