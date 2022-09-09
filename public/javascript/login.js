console.log('login-.js');

const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log('the button is working');

  const username = document.querySelector('#typeUsername').value.trim();
  const password = document.querySelector('#typePassword').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const first_name = document.querySelector('#first-name-signup').value.trim();
  const last_name = document.querySelector('#last-name-signup').value.trim();
  const age = document.querySelector('#age-signup').value.trim();
  const languages = document.querySelector('#languages-signup').value.trim();
  const city = document.querySelector('#city-signup').value.trim();
  const state = document.querySelector('#state-signup').value.trim();
  const country = document.querySelector('#contry-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        first_name,
        last_name,
        age,
        languages,
        city,
        state,
        county,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
