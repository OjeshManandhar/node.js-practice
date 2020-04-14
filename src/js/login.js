console.log('Login');

function verifyLogin() {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (
    username.length > 0 &&
    username.length <= 10 &&
    password.length > 0 &&
    password.length <= 10
  ) {
    return true;
  } else {
    return false;
  }
}
