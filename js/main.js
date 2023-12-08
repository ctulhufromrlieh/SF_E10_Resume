let collapsators = document.getElementsByClassName("collapsator");

for (let currCollapsatorIndex = 0; currCollapsatorIndex < collapsators.length; currCollapsatorIndex++) {
    collapsators[currCollapsatorIndex].addEventListener("click", function() {
        // this.classList.toggle("active");
        let content = this.nextElementSibling;
        // if (content.style.display === "none") {
        if (window.getComputedStyle(content, null).display === "none") {
            content.style.display = "flex";
        } else {
            content.style.display = "none";
        }
    });
}