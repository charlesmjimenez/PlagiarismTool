/* eslint-disable no-unused-vars */

async function displayData() {
  try {
    const response = await fetch('/fileConts');
    if (response.ok) {
      const obj = await response.json();
      console.log(obj);
    } else {
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
}

function onDrop(event) {
  event.preventDefault();
  uploadFile(event.dataTransfer.files);
  // document.querySelector('#drop-zone').
  // CHANGE TEXT WHEN U DROP FILE
}

function btnOnClick() {
  document.querySelector('#drop-zone-input').click();
}

// function onClick(event) {
//   event.preventDefault();
//   uploadFile();
// uploadFile(event.dataTransfer.files);
// this function retrieves the content from the click button
// const fileToLoad = document.querySelector('#drop-zone-input').files[0];
// const fileToLoad = event.target.files[0];
// const fileReader = new FileReader();
// const text = document.querySelector('#file-content');
// fileReader.onload = function (event) {
//   text.innerHTML = event.target.result;
// };

// fileReader.readAsText(fileToLoad);
// fileReader.addEventListener('load', (e) => {
//   const readCont = e.target.result;
//   console.log('File Content: ', readCont);
//   // document.querySelector('#file-content').innerHTML = readCont;
//   const x = document.querySelector('#drop-zone-input').value;
//   document.querySelector('#file-content').innerHTML = x;
// });
// fileReader.readAsText(fileToLoad);
// FIX ISSUE WHEN U CLICK ON (MULTIPLE) FILE(S)
// }

async function uploadFile(files) {
  for (let i = 0; i < files.length; i++) {
    const opts = {
      method: 'post',
      body: new FormData(),
    };
    console.log(files[i], files[i].name);
    opts.body.append('fileID', files[i], files[i].name);

    try {
      const response = await fetch('/upload', opts);
      console.log(response);
      if (response.ok) {
        const obj = await response.json();
        console.log(obj);
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  }
}
