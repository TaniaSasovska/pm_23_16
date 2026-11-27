const education = [
    {
        specialty: "Applied Mathematics",
        university: "Lviv Polytecnic National University",
        years: "2017-2019"
    },
    {
        specialty: "Computer Science",
        university: "National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute",
        years: "2010-2013"
    },
    {
        specialty: "System analysis",
        university: "Taras Shevchenko National University of Kyiv",
        years: "2007-2009"
    }
];
function renderEducation() {
    const container = document.querySelector("#educationContent");

    container.innerHTML = "";

    education.forEach(item => {
        const article = document.createElement("article");

        article.innerHTML = `
            <h3>${item.specialty}</h3>
            <p>${item.university}</p>
            <p class="date">${item.years}</p>
        `;

        container.appendChild(article);
    });
}
renderEducation();