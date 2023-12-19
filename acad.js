// Get the modal
var modalstem = document.getElementById("modal-stem");
var modalhumss = document.getElementById("modal-humss");
var modalabm = document.getElementById("modal-abm");
var modalgas = document.getElementById("modal-gas");

// Get the button that opens the modal
var stem = document.getElementById("btn-stem");
var humss = document.getElementById("btn-humss");
var abm = document.getElementById("btn-abm");
var gas = document.getElementById("btn-gas");

// When the user clicks on the button, open the modal
stem.onclick = function() {
    modalstem.style.display = "block";
}
humss.onclick = function() {
    modalhumss.style.display = "block";
}
abm.onclick = function() {
    modalabm.style.display = "block";
}
gas.onclick = function() {
    modalgas.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalstem) {
        modalstem.style.display = "none";
    }
    if (event.target == modalhumss) {
        modalhumss.style.display = "none";
    }
    if (event.target == modalabm) {
        modalabm.style.display = "none";
    }
    if (event.target == modalgas) {
        modalgas.style.display = "none";
    }
}
