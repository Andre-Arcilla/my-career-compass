// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var stem = document.getElementById("stem");
var abm = document.getElementById("abm");

// When the user clicks on the button, open the modal
stem.onclick = function() {
    modal.style.display = "block";
}
abm.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}