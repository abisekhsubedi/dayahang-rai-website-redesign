import "./index.html";
import "./style.css";

// For DOM manipulation. Navigation menu logic.
let menuList = document.querySelector(".navbar__menu");
// console.log(menuList);
let menu = document.querySelector("#mobile-menu");
// console.log(menu)

// Event : toggle menu add .is-active & .active class to menuList & menu

menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuList.classList.toggle("active");

    // console.log(menu.classList, menuList.classList);
})

// make nav menu disappear ot go back to previous state when navbar menu items are clicked.

let toggleMenu = document.querySelectorAll(".js-toggle-section");
// console.log(toggleMenu)
toggleMenu.forEach((el, i) => {
    el.addEventListener('click', () => {
        menuList.classList.remove("active")
        menu.classList.remove("is-active");
        // console.log(menu)
    })

})
// toggleMenu.addEventListener('click', () => {
//     menuList.classList.remove("active");
//     menu.classList.remove("is-active");
// })












if (module.hot) {
    console.log("%chot reloading baby!!", "color: plum");
}