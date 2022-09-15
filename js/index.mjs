const fingerSensitiveZone = document.querySelector("#finger-sensitive-zone")
const phoneNrHeaderMobile = document.querySelector(".phoneNr__header-mobile")
const headerLogoMobile = document.querySelector(".header-logo-mobile")
const burgerMenu = document.querySelector(".burger-menu")

fingerSensitiveZone.addEventListener('click', fingerSensitiveZoneHandler)

function fingerSensitiveZoneHandler(e) {
  e.preventDefault();
  fingerSensitiveZone.classList.toggle("active")
  phoneNrHeaderMobile.classList.toggle("active")
  headerLogoMobile.classList.toggle("active")
  burgerMenu.classList.toggle("active")
}
