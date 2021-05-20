/* eslint-disable no-unused-vars */

async function displayReport() {
  const response = await fetch('/fileConts');
  let obj;
  if (response.ok) {
    obj = await response.json();
  } else {
    console.log('Error');
  }
  const getTable = document.querySelector('#tableCont');
  for (let i = 0; i < obj.length; i++) {
    const data = obj[i];
    const row = getTable.insertRow(i + 1);
    row.insertCell(0).textContent = data.file_name;
    row.insertCell(1).textContent = data.file_similarity;
  }
}

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

function onDrop(event) {
  event.preventDefault();
  uploadFile(event.dataTransfer.files);
}

window.addEventListener('load', () => {
  const input = document.querySelector('#drop-zone');
  input.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  input.addEventListener('drop', (e) => {
    onDrop(e);
  });
  displayReport();
});
