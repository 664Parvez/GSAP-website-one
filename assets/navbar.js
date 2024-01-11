const hamber = document.getElementById("hambar")
const cross = document.getElementById("cross")

hamber.addEventListener("click", () => {
    const dropdown = document.querySelector(".dropdown")
    dropdown.classList.add("dropdown_show")
})

cross.addEventListener("click", () => {
    const dropdown = document.querySelector(".dropdown")
    dropdown.classList.remove("dropdown_show")
})