import "./index.html";
import "./style.css";


// const semiCircle = document.querySelector(".career__content");
// const angleToradian = (angle) => {
//     return angle * (Math.PI / 180);
// }
// const radius = 200;
// const diameter = Number(document.querySelector(".career__content").style.width.substr().slice(0, -2)) || 500;

// const semiCircle = document.querySelector(".career__content");
// semiCircle.style.width = `${diameter}px`;
// semiCircle.style.height = `${diameter}px`;

// const text = semiCircle.innerText;
// console.log(text);
// const character = text.split("");
// console.log(character);
// semiCircle.innerText = null;

// let angle = -90;
// const deltaAngle = 360 / character.length;

// character.forEach((char, i) => {
//     let el = document.createElement("span")
//     el.innerText = char;
//     let x = radius * Math.cos(angleToradian(angle));
//     let y = radius * Math.cos(angleToradian(angle));

//     let transform = `translate(${x}px, ${y}px)`;
//     let rotate = `rotate(${i * deltaAngle}deg)`
//     el.style.transform = `${transform} ${rotate}`
//     semiCircle.append(el);
// });

let menuList = document.querySelector(".navbar__menu");
console.log(menuList);
let menu = document.querySelector("#mobile-menu");
console.log(menu)

// Event : toggle menu add .is-active & .active class to menuList & menu

menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuList.classList.toggle("active");

    console.log(menu.classList, menuList.classList);
})
















if (module.hot) {
    console.log("%chot reloading baby!!", "color: plum");
}