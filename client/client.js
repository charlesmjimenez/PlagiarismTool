/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

window.addEventListener('load', () => {
  document.querySelector('#googleLogIn').style.display = 'block';
});

function onSignIn(googleUser) {
  document.querySelector('#homePage').style.display = 'block';
  document.querySelector('#googleLogIn').style.display = 'none';
  console.log(googleUser);
  const profile = googleUser.getBasicProfile();
  document.querySelector('#name').textContent = profile.getName();
  document.querySelector('#email').textContent = profile.getEmail();
  document.querySelector('#url').src = profile.getImageUrl();
}

function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  console.log('Signed Out');
  document.querySelector('#homePage').style.display = 'none';
  document.querySelector('#googleLogIn').style.display = 'block';
}

document.querySelector('#drop-zone').addEventListener('dragover', (e) => {
  e.preventDefault();
  console.log('drag over');
  document.querySelector('#drop-zone').style.border = '4px solid #800080';
});

document.querySelector('#drop-zone').addEventListener('dragleave', () => {
  document.querySelector('#drop-zone').style.border = '4px dashed #800080';
});

document.querySelector('#drop-zone').addEventListener('drop', () => {
  document.querySelector('#drop-zone').style.border = '4px dashed #800080';
});

function btnClickReport() {
  document.querySelector('#tableCont').style.display = 'block';
  document.querySelector('#drop-zone').style.display = 'none';
  document.querySelector('#btnReport').style.display = 'none';
  document.querySelector('#btnBack').style.display = 'block';
  document.querySelector('#userText').style.display = 'none';
  document.querySelector('#btnRefresh').style.display = 'none';
}

const input = document.querySelector('#btnReport');
input.addEventListener('click', btnClickReport);

function customOnChange() {
  const customInp = document.querySelector('#drop-zone-input');
  const fileChosen = document.querySelector('#file-content');
  customInp.addEventListener('change', function () {
    fileChosen.textContent = this.files[0].name;
  });
}

function customOnClick() {
  const customInp = document.querySelector('#btnupload');
  customInp.addEventListener('click', customOnChange);
}

customOnClick();

function btnBack() {
  location.reload();
}

document.querySelector('#btnBack').addEventListener('click', btnBack);

function refreshBtn() {
  location.reload();
}
document.querySelector('#btnRefresh').addEventListener('click', refreshBtn);
