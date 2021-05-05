window.addEventListener('load', () => {
  document.querySelector('#googleLogIn').style.display = 'block';
});

// eslint-disable-next-line no-unused-vars
function onSignIn(googleUser) {
  document.querySelector('#homePage').style.display = 'block';
  document.querySelector('#googleLogIn').style.display = 'none';
  console.log(googleUser);
  const profile = googleUser.getBasicProfile();
  document.querySelector('#name').textContent = profile.getName();
  document.querySelector('#email').textContent = profile.getEmail();
  document.querySelector('#URL').src = profile.getImageUrl();
}

// eslint-disable-next-line no-unused-vars
function signOut() {
  // eslint-disable-next-line no-undef
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
  document.querySelector('#drop-zone').style.border = '4px solid #009578';
});

document.querySelector('#drop-zone').addEventListener('dragleave', () => {
  document.querySelector('#drop-zone').style.border = '4px dashed #009578';
});

// eslint-disable-next-line no-unused-vars
function onDrop(event) {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  console.log(file);
  const reader = new FileReader();
  reader.addEventListener('load', (e) => {
    const readCont = e.target.result;
    console.log('File Content: ', readCont);
  });
  reader.readAsText(file);
}

// eslint-disable-next-line no-unused-vars
function loadFile() {
  const fileToLoad = document.querySelector('#drop-zone-input').files[0];
  const fileReader = new FileReader();
  fileReader.addEventListener('load', (e) => {
    const readCont = e.target.result;
    console.log('File Content: ', readCont);
  });
  fileReader.readAsText(fileToLoad);
}
