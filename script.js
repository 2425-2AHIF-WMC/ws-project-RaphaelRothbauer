// Slideshow-Funktionalität
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Bildwechsel alle 2 Sekunden
}

showSlides(); // Startet die Slideshow

// Suchfunktion für die Automarken
document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    
    var selectedBrand = document.getElementById('brandSelect').value;
    
    if (selectedBrand) {
        // Weiterleitung zur entsprechenden Seite im Unterordner
        window.location.href = selectedBrand + '/' + selectedBrand + '.html';
    } else {
        alert("Bitte wählen Sie eine Marke aus!");
    }
});

// Parallax-Effekt
window.addEventListener('scroll', function() {
    var parallax = document.querySelector('.parallax');
    var scrollPosition = window.scrollY;

    // Parallax-Effekt (langsames Scrollen des Hintergrundbildes)
    if (parallax) { // Sicherstellen, dass das Element existiert
        parallax.style.backgroundPosition = "center " + (scrollPosition * 0.5) + "px";
    }
});
