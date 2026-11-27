const experience = [
    {
        position: "Frontend Developer",
        period: "Present",
        company: "Company Name / Location",
        description: "Website development and interface design"
    },
    {
        position: "Web Designer",
        period: "2017-2019",
        company: "Company Name / Location",
        description: "Creating website designs and working with layouts."
    },
    {
        position: "Junior Developer",
        period: "2015-2017",
        company: "Company Name / Location",
        description: "Working on web development projects."
    }
];
function readerExperience() {
    const container = document.getElementById("experienceContent");
    container.innerHTML = "";
    experience.forEach(item => {
        const article = document.createElement("article");

        article.innerHTML = `
        <h3>${item.position}</h3>
        <div class="job-meta">
            <span class="date-badge">${item.period}</span>
            <span class="company">${item.company}</span>
        </div>
        <p>${item.description}</p>
        `;
        container.appendChild(article);
    })
}
readerExperience();