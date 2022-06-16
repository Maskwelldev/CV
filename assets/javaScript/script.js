// on crée une fonction qui déclenchera l'animation au scroll
function reveal() {
    // on cible tous les reveal éléments
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

// on check la position du scroll au chargement de la page
window.addEventListener("scroll", reveal);

reveal();