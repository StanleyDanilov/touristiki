let headerProfile = document.querySelector('.header__profile');
let checkDropMenu = false;
let dropMenuLinks = document.querySelectorAll('.header__profile-dropmenu__link');

headerProfile.addEventListener('click', toggleDropMenu);

function toggleDropMenu() {
  let dropMenu = document.querySelector('.header__profile-dropmenu');
  dropMenu.classList.toggle('header__profile-dropmenu-active');
  return checkDropMenu = !checkDropMenu
};

if (checkDropMenu) {
  window.addEventListener('click', e => {
    for (let key of dropMenuLinks) {
      if (!(e.target == key)) {
        dropMenu.classList.remove('header__profile-dropmenu-active');
        console.log('123123');
      }
    }
  });
};