// on crée une fonction qui déclenchera l'animation au scroll
function reveal() {
    // on cible tous les reveal éléments
    var reveals = document.querySelectorAll(".reveal");
    // on itère sur tous les reveal éléments
    for (var i = 0; i < reveals.length; i++) {
        // on récupère la hauteur de la fenêtre
        var windowHeight = window.innerHeight;
        // on récupère le top de l'élément
        var elementTop = reveals[i].getBoundingClientRect().top;
        // on stocke une valeur de 150px
        var elementVisible = 150;
        // on vérifie si la position de l'élément est inférieure à la hauteur de la fenêtre - la valeur de 150px
        if (elementTop < windowHeight - elementVisible) {
            // on ajoute la classe active
            reveals[i].classList.add("active");
        } else {
            // on retire la classe active
            reveals[i].classList.remove("active");
        }
    }
}

function appearsLeft() {
    var appearsLeft = document.querySelectorAll(".appearsLeft");
    for (var i = 0; i < appearsLeft.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = appearsLeft[i].getBoundingClientRect().top;
        var elementVisible = 0;
        if (elementTop < windowHeight - elementVisible) {
            appearsLeft[i].classList.add("active");
        } else {
            appearsLeft[i].classList.remove("active");
        }
    }
}

function appearsRight() {
    // on cible tous les reveal éléments
    var appearsRight = document.querySelectorAll(".appearsRight");
    for (var i = 0; i < appearsRight.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = appearsRight[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            appearsRight[i].classList.add("active");
        } else {
            appearsRight[i].classList.remove("active");
        }
    }
}

// on check la position du scroll au chargement de la page
window.addEventListener("scroll", reveal);  
// window.addEventListener("scroll", appearsLeft);  
window.addEventListener("scroll", appearsRight);  

reveal();
appearsLeft();
appearsRight();