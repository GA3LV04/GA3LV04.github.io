function closeAllDropdowns() {
    const allMenus = document.querySelectorAll(".main-nav > ul > li");
    allMenus.forEach(menu => menu.classList.remove("clicked"));
}

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".main-nav");
    const burger = document.querySelector("#navBurger");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    burger.addEventListener("click", function (e) {
        e.stopPropagation();
        nav.classList.toggle("clicked");

        if (!nav.classList.contains("clicked")) {
            closeAllDropdowns();
        }
    });

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.stopPropagation();

            const parentLi = button.parentElement;
            const wasClicked = parentLi.classList.contains("clicked");

            closeAllDropdowns();

            if (!wasClicked) {
                parentLi.classList.add("clicked");
            }
        });
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".main-nav")) {
            nav.classList.remove("clicked");
            closeAllDropdowns();
        }
    });
});