// Get the modal
var modal1 = document.getElementById("modal-about-us");
var modal2 = document.getElementById("modal-contact");

// Get the button that opens the modal
var btn1 = document.getElementById("about-us");
var btn2 = document.getElementById("contact");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}