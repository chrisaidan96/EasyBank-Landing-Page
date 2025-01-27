function toggleMobileMenu() {
  const navigationMenus = document.querySelectorAll(".Navbar__Items");
  navigationMenus.forEach(function (menu) {
    menu.classList.toggle("Navbar__ToggleShow");
  });
  console.log("Mobile menu toggled!");
}
const hamburgerButton = document.querySelector(".Navbar__Link-toggle");
hamburgerButton.addEventListener("click", function (event) {
  event.preventDefault();
  toggleMobileMenu();
});
