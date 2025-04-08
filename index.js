
const navbar = document.querySelector('.navbar');
const logoText = document.querySelector('.logo');

navbar.addEventListener('mouseover', () => {
    // Remove the animation
    logoText.style.animation = 'none';
    // Reset animated properties to their default values
    logoText.style.transform = 'scale(1)';
    logoText.style.color = 'black';
});

navbar.addEventListener('mouseout', () => {
    // Reapply the animation
    logoText.style.animation = 'pumpkins 4s infinite';
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ ' : '🌙';
});

document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  alert('Form submitted! (This is a demo-form, doesn\'t actually send.)');
});
