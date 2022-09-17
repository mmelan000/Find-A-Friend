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
    $('#myModal').modal('show');
    return;
  } else {
    password = password1;
  }

  if (username && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        email: email,
        first_name: first_name,
        last_name: last_name,
        age: age,
        languages: languages,
        city: city,
        state: state,
        country: country,
        password: password,
        hashed_email: email,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(
      username,
      email,
      first_name,
      last_name,
      age,
      languages,
      city,
      state,
      country,
      password1,
      password2
    );

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
