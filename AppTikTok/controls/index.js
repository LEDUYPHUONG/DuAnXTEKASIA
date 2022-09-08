// backtotop của index.html
// Get the button
let mybutton = document.getElementById("myBtn");
let myobject = document.getElementById("main-right")

// When the user scrolls down 20px from the top of the document, show the button
        
function scrollFunction() {
    if (myobject.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    myobject.scrollTop = 0;
    
}
