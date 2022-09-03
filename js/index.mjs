// import svgHeaderAutorizeIcon from'../assets/icons/svg-header-autorize-icon.mjs'
// import { data } from'../data/data.mjs'

// const headerAutorizeIcon = document.querySelector('.header-autorize-icon')
// headerAutorizeIcon.append(svgHeaderAutorizeIcon)

const fingerSensitiveZone = document.querySelector("#finger-sensitive-zone")
const phoneNrHeaderMobile = document.querySelector(".phoneNr__header-mobile")
const headerLogoMobile = document.querySelector(".header-logo-mobile")
const burgerMenu = document.querySelector(".burger-menu")
const burger = document.querySelector(".burger")

fingerSensitiveZone.addEventListener('click', fingerSensitiveZoneHandler)

function fingerSensitiveZoneHandler(e) {
  e.preventDefault();
  if(burgerMenu.style.display === "none") {
      fingerSensitiveZone.classList.toggle("active")
      phoneNrHeaderMobile.style.display = "none"
      headerLogoMobile.style.display = "none"
      burgerMenu.style.display = "block"
      burger.style.marginLeft = "auto"
    } else {
      burgerMenu.style.display = "none"
      phoneNrHeaderMobile.style.display = "flex"
      headerLogoMobile.style.display = "block"
      burger.style.marginLeft = "unset"
    }
  // burgerMenu.style.display = "none" ? burgerMenu.style.display = "block" : burgerMenu.style.display = "none"
  
  // switch (burgerMenu.style.display = "none") {
  //   case 'Oranges':
  //     console.log('Oranges are $0.59 a pound.');
  //     break;
  //   case 'Mangoes':
  //   case 'Papayas':
  //     console.log('Mangoes and papayas are $2.79 a pound.');
  //     // expected output: "Mangoes and papayas are $2.79 a pound."
  //     break;
  //   default:
  //     console.log(`Sorry, we are out of ${expr}.`);
  // }


}
