
function getData() {
    const toggleButton = document.getElementById('toggle-button');
    const courseContent = document.getElementById('course-content');

    toggleButton.addEventListener('click', function() {
        // if (courseContent.style.display == "none" || courseContent.style.display === "") {
        if (courseContent.style.display == "none") {
            courseContent.style.display = "block";
        } else {
            courseContent.style.display = "none";
        }
    });
}
document.addEventListener('DOMContentLoaded', getData);

function mobGetData() {
    const mobToggleButton = document.getElementById('mobile-toggle-button');
    const mobContent = document.getElementById('mobile-content');

    mobToggleButton.addEventListener('click', function() {
        
        if (mobContent.style.display == "none") {
            mobContent.style.display = "block";
        } else {
            mobContent.style.display = "none";
        }
    });
}
document.addEventListener('DOMContentLoaded', mobGetData);

function hamGetData() {
    const hamBurgerDiv = document.getElementById('hamburger-div');
    const mobContent = document.getElementById('content-mobile');

    hamBurgerDiv.addEventListener('click', function() {
        
        if (mobContent.style.display == "none") {
            mobContent.style.display = "block";
        } else {
            mobContent.style.display = "none";
        }
    });
}
document.addEventListener('DOMContentLoaded', hamGetData);

function expandButton(value){
    const expand = document.getElementById(`accordion-button-expand-${value}`)
    console.log(value)
    // console.log(toggle)

    // toggle.addEventListener('click', function(){
        if(expand.style.display=='none'){
            expand.style.display='block';
        }
        else{
            expand.style.display='none';
        }
}

