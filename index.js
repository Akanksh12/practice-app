upload = document.querySelector('input')
audioElem = document.querySelector('audio')

upload.value = null //clears files on reload
upload.addEventListener('change', () => {
    audioElem.src = URL.createObjectURL(upload.files[0])
    console.log(audioElem.src)
})

bpmButton = document.querySelector("#full-speed-set")
bpmInputElem = document.querySelector("#full-speed")
bpmElem = document.querySelector("#bpm")

bpmButton.addEventListener('click', () => {
    audioElem.dataset.fullBpm = bpmInputElem.value // sets full bpm as attritube
    audioElem.playbackRate = bpmElem.value / audioElem.dataset.fullBpm // sets bpm after submit
})

// increase / decrease buttons

bpmIncElem = document.querySelector("#+5")
bpmDecElem = document.querySelector("#-5")

bpmIncElem.addEventListener('click', () => {
    bpmElem.value += 5
})

bpmDecElem.addEventListener('click', () => {
    bpmElem.value -= 5
})