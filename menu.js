let menu = document.querySelector(`#menu`);
let navigation = document.querySelector(`#nav`);

let menuSwitch = true;

menu.addEventListener("click", () => {
  menuSwitch == true ? (menuSwitch = false) : (menuSwitch = true);
  navigation.classList.toggle(`unvisible`);

  if (menuSwitch == false) {
    menu.src = "./images/icon-close.svg";
  } else {
    menu.src = "./images/icon-hamburger.svg";
  }
});
