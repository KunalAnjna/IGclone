
  (function () {
    const form = document.getElementById('login-form');
    const usernameInput = form.username;
    const passwordInput = form.password;
    const loginBtn = document.getElementById('login-btn');
    

    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    function validateUsername(value) {
      return value.trim().length >= 1;
    }

    function validatePassword(value) {z
      return value.length >= 6;
    }

    function updateFieldError(input, errorElem, valid, message) {
      if (!valid) {
        input.classList.add('error');
        input.setAttribute('aria-invalid', 'true');
        errorElem.textContent = message;
      } else {
        input.classList.remove('error');
        input.setAttribute('aria-invalid', 'false');
        errorElem.textContent = '';
      }
    }

    function validateForm() {
      const usernameVal = usernameInput.value;
      const passVal = passwordInput.value;
      const usernameValid = validateUsername(usernameVal);
      const passwordValid = validatePassword(passVal);

      updateFieldError(usernameInput, usernameError, usernameValid || usernameVal.trim() === '', 'Please enter your username.');
      updateFieldError(passwordInput, passwordError, passwordValid || passVal === '', 'Password must be at least 6 characters.');

      const formValid = usernameValid && passwordValid;
      loginBtn.disabled = !formValid;
      loginBtn.setAttribute('aria-disabled', String(!formValid));
      return formValid;
    }

    usernameInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      loginBtn.disabled = true;
      loginBtn.textContent = 'Logging in...';
      setTimeout(() => {
        alert('Login successful! (simulated)');
        loginBtn.textContent = 'Log In';
        loginBtn.disabled = false;
      }, 1500);
    });
  })();
