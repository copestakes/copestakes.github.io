const input = document.querySelector('#check');
const nav = document.querySelector('nav ul');
const anchors = document.querySelectorAll('a');

function checkAll() {
  input.checked = false;
}
window.onload = function () {
  window.addEventListener('resize', checkAll, false);
  nav.addEventListener('click', checkAll, false);
};

anchors.forEach((e) => {
  e.addEventListener('click', checkAll, false);
});

// window.addEventListener('click', function () {
//   const checkbox = document.querySelector('#check');
//   checkbox.checked = !checkbox.checked;
// });

// const menu_btn = document.querySelector('#check');
// const menu_btn_ham = document.querySelector('.hamburger');
// const hamburger_menu = document.querySelector('.nav');
// const anchors = document.querySelectorAll('a');

// function openMenu() {
//   menu_btn_ham.classList.toggle('is-active');
//   hamburger_menu.classList.toggle('is-active');
// }

// menu_btn.addEventListener('click', openMenu);

// anchors.forEach((e) => {
//   e.addEventListener('click', openMenu);
// });

const date = new Date();
const year = date.getFullYear();
let copyRight = document.querySelector('.copyright');
copyRight.innerHTML = `Copyright &copy; ${year} David Copestakes`;

const navbar = document.querySelector('.navigation');
const navHeight = navbar.getBoundingClientRect().height;
