function clickNav(bodyClicked) {
    let navHandle = document.querySelector("nav");
    let burgerWasClicked = navHandle.classList.contains("clicked");

    if (!bodyClicked) {
        navHandle.classList.toggle("clicked");
    } else {
        navHandle.classList.remove("clicked");
    }

    if (burgerWasClicked || bodyClicked) {
        let allMenus = document.querySelectorAll("nav > ul > li");
        for (const eachMenu of allMenus) {
            eachMenu.classList.remove("clicked");
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#navBurger").addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        clickNav(false);
    });

    let allMenus = document.querySelectorAll("nav > ul > li");

    for (const eachMenu of allMenus) {
        eachMenu.addEventListener("click", function (e) {
            let topLink = eachMenu.querySelector(":scope > a");
            let hasSubmenu = eachMenu.querySelector(":scope > ul");

            if (hasSubmenu && topLink.getAttribute("href") === "#") {
                e.preventDefault();
            }

            e.stopPropagation();

            let wasClicked = eachMenu.classList.contains("clicked");

            for (const eachMenu2 of allMenus) {
                eachMenu2.classList.remove("clicked");
            }

            if (!wasClicked) {
                eachMenu.classList.add("clicked");
            }
        });
    }

    document.documentElement.addEventListener("click", function (e) {
        if (!e.target.closest("nav")) {
            clickNav(true);
        }
    });
});