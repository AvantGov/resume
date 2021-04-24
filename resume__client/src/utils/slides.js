var slideIndex = 1;

export function changeSlide(n) {
    showSlide(slideIndex+= n);
}

showSlide(slideIndex)

export function showSlide(n) {
    var indx;
    var slides = document.getElementsByClassName("imgContainer")
    console.log("current selection of slides:",slides)

    // if we are at the end, reset to the beginning
    if (n > slides.length) { slideIndex = 1};

    // if we are at the beginning, go to the end 
    if (n < 1) {slideIndex = slides.length};

    // change every other item to not displaying 
    for (i = 0; i < slides.length;i++) {
        slides[i].style.display = "none"
    };
    
    // change the one item currently focused to be showing.
    slides[slideIndex-1].style.display = "block"
}

// * this is a loosely based handler that will change the slides but I am too tired to try to figure it out now. 