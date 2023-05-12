upload = document.querySelector('input')
audioElem = document.querySelector('audio')

pload.addEventListener('change', () => {
  audioElem.src = URL.createObjectURL(upload.files[0]);
})
