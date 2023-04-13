function checkAll() {
  const input = document.querySelector('#check');
  input.checked = false;
}
window.onload = function () {
  window.addEventListener('resize', checkAll, false);
};

window.addEventListener('click', function () {
  var checkbox = document.querySelector('#check');
  checkbox.checked = !checkbox.checked;
});

const date = new Date();
const year = date.getFullYear();
let copyRight = document.querySelector('.copyright');
copyRight.innerHTML = `Copyright ${year} David Copestakes`;

const navbar = document.querySelector('.navigation');
const navHeight = navbar.getBoundingClientRect().height;
