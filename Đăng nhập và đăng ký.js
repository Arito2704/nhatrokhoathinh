document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const loginLink = document.querySelector(".Login-link");
    const registerLink = document.querySelector(".register-link");

    registerLink.addEventListener("click", () => {
        wrapper.classList.add("active");
    });

    loginLink.addEventListener("click", () => {
        wrapper.classList.remove("active");
    });
});