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
    audioElem.dataset.fullbpm = '' + Number(bpmInputElem.value) // sets full bpm as attritube
    audioElem.playbackRate = bpmElem.value / audioElem.dataset.fullbpm // sets bpm after submit
})

// increase / decrease buttons

bpmIncElem = document.querySelector("#Inc5")
bpmDecElem = document.querySelector("#Dec5")

bpmIncElem.addEventListener('click', () => {
    bpmElem.value = '' + (Number(bpmElem.value) + 5)
    audioElem.playbackRate = bpmElem.value / audioElem.dataset.fullbpm 
})

bpmDecElem.addEventListener('click', () => {
    bpmElem.value = '' + (Number(bpmElem.value) - 5)
    audioElem.playbackRate = bpmElem.value / audioElem.dataset.fullbpm 
})

//set bpm even after pressing enter on input element

bpmElem.addEventListener('change', () => {
    audioElem.playbackRate = bpmElem.value / audioElem.dataset.fullbpm 
})

let setTimeA = document.querySelector("#set-time-a")
let setTimeB = document.querySelector("#set-time-b")

let timeA = document.querySelector("#time-a")
let timeB = document.querySelector("#time-b")

setTimeA.addEventListener('click', () => {
    timeA.value = '' + Number(audioElem.currentTime)
})

setTimeB.addEventListener('click', () => {
    timeB.value = '' + Number(audioElem.currentTime)
})

//loop functionality

let setLoop = (start,end) => {
    audioElem.addEventListener('timeupdate', () => {
        cTime = Number(audioElem.currentTime)
        if (Math.round(cTime) == Math.round(end)){
            audioElem.currentTime = '' + start
        }
    })
}

document.querySelector("#set-loop").addEventListener('click', () => {
    setLoop(Number(timeA.value), Number(timeB.value))
})

audioElem.addEventListener('timeupdate', () => {
    console.log(Math.round(Number(audioElem.currentTime)))
})