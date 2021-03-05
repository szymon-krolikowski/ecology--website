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


const input = document.querySelector(".newsletter__input");
input.addEventListener("input", e => {
    const inputValue = input.value;
    const regularExpression = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

    if (!regularExpression.test(inputValue)) {
        input.classList.add("field-error");
        input.classList.remove("field-accept");
    } else if(regularExpression.test(inputValue)) {
        input.classList.add("field-accept");
        input.classList.remove("field-error");
    } else {
        input.classList.add("field-error");
    }
});