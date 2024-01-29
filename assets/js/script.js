document.getElementById("menuButton").addEventListener("click", function() {
    let dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
    dropdownContent.classList.toggle('hide')
});