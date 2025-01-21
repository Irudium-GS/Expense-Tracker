const signInBtn = document.getElementById("Login");  
const signUpBtn = document.getElementById("Register");  
const fistForm = document.getElementById("form1");  
const secondForm = document.getElementById("form2");  
const container = document.querySelector(".container");  
signInBtn.addEventListener("click", () => {  
    container.classList.remove("right-panel-active");  
});  
signUpBtn.addEventListener("click", () => {  
    container.classList.add("right-panel-active");  
});  
// fistForm.addEventListener("submit", (e) => e.preventDefault());  
// secondForm.addEventListener("submit", (e) => e.preventDefault()); 


document.getElementById("form1").addEventListener("submit", (e) => {
//e.preventDefault();

  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("ConfirmPassword");

  const email = emailField.value.trim();
  const password = passwordField.value.trim();
  const confirmPassword = confirmPasswordField.value.trim();

  let isValid = true;

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      showError(emailField, "Please enter a valid email address.");
      isValid = false;
  } else {
      clearError(emailField);
  }

  // Password Validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  if (!passwordRegex.test(password)) {
      showError(passwordField, "Password must be 8-16 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.");
      isValid = false;
  } else {
      clearError(passwordField);
  }

  // Confirm Password Validation
  if (password !== confirmPassword) {
      showError(confirmPasswordField, "Passwords do not match.");
      isValid = false;
  } else {
      clearError(confirmPasswordField);
  }

  // If all validations pass, you can proceed
  if (isValid) {
      alert("Registration successful!");
      document.getElementById("form1").reset(); // Reset the form
  }
});

// Helper Functions
function showError(input, message) {
  const parent = input.parentElement;
  clearError(input); // Clear any existing errors
  const error = document.createElement("small");
  error.textContent = message;
  error.style.color = "red";
  error.style.fontSize = "0.85rem";
  parent.appendChild(error);
}

function clearError(input) {
  const parent = input.parentElement;
  const existingError = parent.querySelector("small");
  if (existingError) {
      parent.removeChild(existingError);
  }
}
