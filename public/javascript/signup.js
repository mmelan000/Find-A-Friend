const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = $('#typeUsernameCreate').val().trim();
  const email = $('#typeEmailCreate').val().trim();
  const first_name = $('#typeFirstNameCreate').val().trim();
  const last_name = $('#typeLastNameCreate').val().trim();
  const age = $('#typeAgeCreate').val();
  const languages = $('#typeLanguagesCreate').val().trim();
  const city = $('#typeCityCreate').val().trim();
  const state = $('#typeStateCreate').val().trim();
  const country = $('#typeCountryCreate').val().trim();
  const password1 = $('#typePasswordCreate1').val().trim();
  const password2 = $('#typePasswordCreate2').val().trim();
  let password;

  if (password1 !== password2) {
    alert('Passwords do not match! Also, this should really be a modal.');
    return;
  } else {
    password = password1;
  }

  if (username && email && password) {
    const response = await fetch('/api/user', {
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
