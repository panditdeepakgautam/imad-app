console.log('loaded!');

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

window.onload = initAll;

function initAll() {
    switch(this.id) {
        case "Lincoln":
            var ans = prompt("Are you ready to make me your boyfriend ?");
            if(ans) {
                alert("You said" +ans);
            }
            else {
                alert("you refused yo answer");
            }
            break;
        case "Kennedy":
            var res = prompt("Are you ready to make me your boyfriend ?","");
            if(res) {
                alert("You said" +ans);
            }
            else {
                alert("you refused yo answer");
            }    
             break;
        case "Nixon":
            var resp = prompt("Are you ready to make me your boyfriend ?","");
            if(resp) {
                alert("You said" +ans);
            }
            
            else {
                alert("you refused yo answer");
            }    
             break;
             default:
    }
}