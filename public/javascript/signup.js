const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#typeUsernameCreate').value.trim();
  const email = document.querySelector('#typeEmailCreate').value.trim();
  const first_name = document
    .querySelector('#typeFirstNameCreate')
    .value.trim();
  const last_name = document.querySelector('#typeLastNameCreate').value.trim();
  const age = document.querySelector('#typeAgeCreate').value.trim();
  const languages = document.querySelector('#typeLanguagesCreate').value.trim();
  const city = document.querySelector('#typeCityCreate').value.trim();
  const state = document.querySelector('#typeStateCreate').value.trim();
  const country = document.querySelector('#typeCountryCreate').value.trim();
  const password = document.querySelector('#typePasswordCreate').value.trim();

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
        country,
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
  .querySelector('#signup-form')
  .addEventListener('click', signupFormHandler);
