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

showSlides();

document.getElementById('searchButton').addEventListener('click', function(event) {
  event.preventDefault();  // Verhindert das Standard-Verhalten des Links
  
  var selectedBrand = document.getElementById('brandSelect').value;
  
  if (selectedBrand) {
      // Weiterleitung zur entsprechenden Seite
      window.location.href = selectedBrand + '.html';
  } else {
      alert("Bitte wählen Sie eine Marke aus!");
  }
});

// Parallax Effekt
window.addEventListener('scroll', function() {
  var parallax = document.querySelector('.parallax');
  var scrollPosition = window.scrollY;

  // Parallax Effekt (langsames Scrollen des Hintergrundbildes)
  parallax.style.backgroundPosition = "center " + (scrollPosition * 0.5) + "px";
});

document.getElementById('searchButton').addEventListener('click', function(event) {
  event.preventDefault();  // Verhindert das Standard-Verhalten des Links
  
  var selectedBrand = document.getElementById('brandSelect').value;
  
  if (selectedBrand) {
      // Weiterleitung zur entsprechenden Seite
      window.location.href = selectedBrand + '.html';
  } else {
      alert("Bitte wählen Sie eine Marke aus!");
  }
});
