const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const userName = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();
    const teller_id = document.querySelector('#tellerId').value.trim();

    console.log(userName),
    console.log(password),
    console.log(teller_id)
  
    if (userName && password) {
      const response = await fetch('/api/tellers/login', {
        method: 'POST',
        body: JSON.stringify({ userName, password, teller_id }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Response', response);
      if (response.ok) {
        console.log('Good job you can log in');
        document.location.replace(`/homepage/`);
      } else {
        alert(response.statusText);
        console.log('Oh no you cannot login');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name-signup').value.trim();
    const userName = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && userName && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, userName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);