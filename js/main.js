const accordion = document.getElementsByClassName('team__contentBox');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle('teamActiveBox')
    })
}

const buttonNavigationMobile = document.querySelector(".navigationMobile__button");
const navigationMobile = document.querySelector(".navigationMobile");
const wrapper = document.querySelector(".wrapper")
const linksNavigationMobile = document.querySelectorAll(".navigationMobile__link")

buttonNavigationMobile.addEventListener("click", () => {
    navigationMobile.classList.toggle("navigationMobileActive");
    buttonNavigationMobile.classList.toggle("navigationMobileButtonActive");
});

linksNavigationMobile.forEach(element => {
    element.addEventListener("click", () => {
        navigationMobile.classList.remove("navigationMobileActive");
    });
});