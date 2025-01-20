// Get elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginPopup = document.getElementById('loginPopup');
const registerPopup = document.getElementById('registerPopup');
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');

// Show login popup
loginBtn.addEventListener('click', () => {
  loginPopup.style.display = 'flex';
});

// Show register popup
registerBtn.addEventListener('click', () => {
  registerPopup.style.display = 'flex';
});

// Close login popup
closeLogin.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});

// Close register popup
closeRegister.addEventListener('click', () => {
  registerPopup.style.display = 'none';
});

// Close popup when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === loginPopup) {
    loginPopup.style.display = 'none';
  }
  if (e.target === registerPopup) {
    registerPopup.style.display = 'none';
  }
});