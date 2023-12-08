function toggleCollapsible(elem){
    if (window.getComputedStyle(elem, null).display === "none") {
        elem.style.display = "flex";
    } else {
        elem.style.display = "none";
    }    
}

let collapsators = document.getElementsByClassName("collapsator");

for (let currCollapsatorIndex = 0; currCollapsatorIndex < collapsators.length; currCollapsatorIndex++) {
    collapsators[currCollapsatorIndex].addEventListener("click", function() {
        let collapsible = this.nextElementSibling;
        toggleCollapsible(collapsible);
    });
}

let collapsibles = document.getElementsByClassName("collapsible");

for (let currCollapsibleIndex = 0; currCollapsibleIndex < collapsators.length; currCollapsibleIndex++) {
    let collapsible = collapsibles[currCollapsibleIndex]
    if (getComputedStyle(collapsible).getPropertyValue('--collapse-on-start') == 'true'){
        toggleCollapsible(collapsible)
    }
}