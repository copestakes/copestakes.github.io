function checkAll() {
  const input = document.querySelector('#check');
  input.checked = false;
}
window.onload = function () {
  window.addEventListener('resize', checkAll, false);
};

const date = new Date();
const year = date.getFullYear();
let copyRight = document.querySelector('.copyright');
copyRight.innerHTML = `Copyright ${year} David Copestakes`;

const navbar = document.querySelector('.navigation');
const navHeight = navbar.getBoundingClientRect().height;
