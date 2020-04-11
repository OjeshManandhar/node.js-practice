console.log('Login');

function verifyLogin() {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (
    (username === 'tom' && password === 'jerry') ||
    (username === 'jerry' && password === 'tom')
  ) {
    console.log('Login Sucess');
    window.location.href = `./profile.html?username=${username}`;
  } else {
    console.log('Login Failed');
  }
}
