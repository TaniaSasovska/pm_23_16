function setPersonName() {
    const fullName = "Alex";
    const surname = "Brahar";

    const element = document.getElementById("personName");
    element.textContent = fullName;

    document.getElementById("personSurname").textContent = surname;
}

document.addEventListener("DOMContentLoaded", setPersonName);