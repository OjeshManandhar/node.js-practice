console.log('Profile');

const profilePic = document.querySelector('#profile-pic');
const profileName = document.querySelector('#profile-name');

console.log('query:', window.location.search);

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('username')) {
  const username = urlParams.get('username');

  if (username === 'tom') {
    profileName.innerHTML = 'Tom';
    profilePic.src = './../images/tom-profile.jpg';
  } else if (username === 'jerry') {
    profileName.innerHTML = 'Jerry';
    profilePic.src = './../images/jerry-profile.jpg';
  } else {
    profileName.innerHTML = 'Locked';
    profilePic.src = './../images/lock-profile.jpeg';
  }
} else {
  window.location.href = './login.html';
}
