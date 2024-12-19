/*Moblie menu*/
// Select Elements
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileMenuDropdown = document.querySelector('.mobile-menu-dropdown');

// Toggle Mobile Menu Visibility
function toggleMenu(show) {
  mobileMenuDropdown.classList.toggle('show', show);
  hamburgerIcon.style.display = show ? 'none' : 'block';
  closeIcon.style.display = show ? 'block' : 'none';
}

// Add Event Listeners
hamburgerIcon.addEventListener('click', () => toggleMenu(true));
closeIcon.addEventListener('click', () => toggleMenu(false));

// Handle Screen Resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 740) {
    toggleMenu(false); // Ensure mobile menu is hidden on larger screens
    hamburgerIcon.style.display = 'none'; // Hide hamburger icon
    closeIcon.style.display = 'none'; // Hide close icon
  } else {
    hamburgerIcon.style.display = 'block'; // Show hamburger icon
  }
});

// products listing




