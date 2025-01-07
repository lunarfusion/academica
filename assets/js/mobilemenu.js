const mobileMenuButtons = document.querySelectorAll(".menu-toggle")

if (mobileMenuButtons) {
  for (const mobileMenuButton of mobileMenuButtons) {
    mobileMenuButton.addEventListener("click", () => {
      const menu = document.querySelector("aside.offcanvas")
      if (menu) {
        menu.classList.toggle("open")
      }
    })
  }
}

const offCanvasMenu = document.querySelector(".menu[data-region='mobile']")
const offCanvasMenuItems = offCanvasMenu.querySelectorAll("li")
const backButtons = offCanvasMenu.querySelectorAll(".menu-back")

for (const backButton of backButtons) {
  backButton.addEventListener("click", () => {
    const parent = backButton.parentElement
    const parentMenu = parent.parentElement
    parentMenu.removeAttribute("data-menu-expanded")
    //parent.classList.remove("open")
  })
}

// if (submenu) {
//   for (const submenu of submenus) {
//     submenu.addEventListener("click", () => {
//       submenu.classList.toggle("open")
//     })
//   }
// }
