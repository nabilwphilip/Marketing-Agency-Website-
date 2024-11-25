// Add event to muliple elements ...
const addEventOnElement = function(elements, evetType, callback){
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(evetType, callback);
    }
}
    // Set up the function to run when the request finishes
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (xhr.responseText === 'success') {
                alert('Thank you for reaching out! We will contact you soon.');
            } else {
                alert('Sorry, there was an error sending your message.');
            }
        }
    };

// Navbar Toggle for phone ...

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overLay = document.querySelector("[data-overlay]");

const toggleNavbar = function(){
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overLay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement([navToggleBtn, overLay], "click", toggleNavbar)


// Parallax effect ...

const parallaxElement = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", event =>{
    for(let i = 0, len = parallaxElement.length; i < len ; i++){

        const movementX = (event.clientX / window.innerWidth) * Number (parallaxElement[i].dataset.parallaxSpeed);
        const movementY = (event.clientY / window.innerHeight) * Number (parallaxElement[i].dataset.parallaxSpeed);

        parallaxElement[i].animate({
            transform: `translate(${movementX}px, ${movementY}px)`
        }, {duration: 500, fill: "forwards"})
    }
})