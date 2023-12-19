// Get the modal
var modal1 = document.getElementById("modal-theater");
var modal2 = document.getElementById("modal-film");
var modal3 = document.getElementById("modal-music");
var modal4 = document.getElementById("modal-vama");

// Get the button that opens the modal
var btn1 = document.getElementById("btn-theater");
var btn2 = document.getElementById("btn-film");
var btn3 = document.getElementById("btn-music");
var btn4 = document.getElementById("btn-vama");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}
