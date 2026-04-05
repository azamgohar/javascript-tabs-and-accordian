const question1 = document.querySelector(".question.one");
const question2 = document.querySelector(".question.two");
const question3 = document.querySelector(".question.three");



question1.addEventListener("click", () => {
    question1.parentElement.classList.toggle("active");
    question2.parentElement.classList.remove("active");
    question3.parentElement.classList.remove("active");
})
question2.addEventListener("click", () => {
    question2.parentElement.classList.toggle("active");
    question1.parentElement.classList.remove("active");
    question3.parentElement.classList.remove("active");
})
question3.addEventListener("click", () => {
    question3.parentElement.classList.toggle("active");
    question1.parentElement.classList.remove("active");
    question2.parentElement.classList.remove("active");
})