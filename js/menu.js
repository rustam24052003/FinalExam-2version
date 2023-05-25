function nav() {
    document.getElementById("overlay").classList.toggle("active");
    document.getElementById("overlay-button").classList.toggle("active");
};

const overlayButton = document.querySelector('#overlay-button')
overlayButton.addEventListener('click', nav)