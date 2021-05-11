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
  document.querySelector('#url').src = profile.getImageUrl();
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

// // eslint-disable-next-line no-unused-vars
// function onDrop(event) {
//   event.preventDefault();
//   const file = event.dataTransfer.files[0];
//   console.log(file);
//   console.log(event.dataTransfer.files[1]);
//   const reader = new FileReader();
//   reader.addEventListener('load', (e) => {
//     const readCont = e.target.result;
//     console.log('File Content: ', readCont);
//   });
//   reader.readAsText(file);
// }

// eslint-disable-next-line no-unused-vars
function onDrop(event) {
  event.preventDefault();
  const files = event.dataTransfer.files;

  console.log('File count: ' + files.length);

  for (let i = 0; i < files.length; i++) {
    // const entry = event.dataTransfer.items.webkitRelativePath();
    // if(entry.isDirectory){
    //   alert(entry.fullPath);
    // }
    console.log('File ' + i + ':\n(' + (typeof files[i]) + ') : <' + files[i] + ' > ' + files[i].name + ' ' + files[i].webkitRelativePath + '\n');
    console.log(files[i]);
  }
}


// eslint-disable-next-line no-unused-vars
function loadFile() {
  // this function retrieves the content from the click button
  const fileToLoad = document.querySelector('#drop-zone-input').files[0];
  const fileReader = new FileReader();
  fileReader.addEventListener('load', (e) => {
    const readCont = e.target.result;
    console.log('File Content: ', readCont);
    document.querySelector('#file-content').innerHTML = readCont;
  });
  fileReader.readAsText(fileToLoad);
}
