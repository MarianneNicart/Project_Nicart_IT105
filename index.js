// Dropdown Functionality
const dropdownIcon = document.querySelector('.dropdownIcon');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownIcon.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});