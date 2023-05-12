upload = document.querySelector('input')
audioElem = document.querySelector('audio')

upload.value = null //clears files on reload
upload.addEventListener('change', () => {
    audioElem.src = URL.createObjectURL(upload.files[0])
    console.log(audioElem.src)
})
