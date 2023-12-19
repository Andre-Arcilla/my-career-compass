// Get the modal
var modal1 = document.getElementById("modal-sports");

// Get the button that opens the modal
var btn1 = document.getElementById("btn-sports");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
