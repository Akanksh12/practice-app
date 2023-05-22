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
    audioElem.dataset.fullbpm = '' + bpmInputElem.value // sets full bpm as attritube
    audioElem.playbackRate = bpmElem.value / audioElem.dataset.fullbpm // sets bpm after submit
    bpmElem.value = bpmInputElem.value // setting 100% speed on default
    audioElem.playbackRate = bpmElem.value / audioElem.dataset.fullbpm // fixes full speed playback
})

// increase / decrease buttons

bpmIncElem = document.querySelector("#Inc5")
bpmDecElem = document.querySelector("#Dec5")

bpmIncElem.addEventListener('click', () => {
    bpmElem.value = '' + (+bpmElem.value + 5)
    audioElem.playbackRate = bpmElem.value / audioElem.dataset.fullbpm 
})

bpmDecElem.addEventListener('click', () => {
    bpmElem.value = '' + (+bpmElem.value - 5)
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

// event listener for buttons
setTimeA.addEventListener('click', () => {
    timeA.value = '' + audioElem.currentTime
})

setTimeB.addEventListener('click', () => {
    timeB.value = '' + audioElem.currentTime
    if (looping.checked !== false) {
        setLoop(+timeA.value, +timeB.value)
    }
})

// event listener for inputs

timeB.addEventListener('change', () => {
    if (looping.checked !== false) {
        setLoop(+timeA.value, +timeB.value)
    }
})

//loop functionality

let setLoop = (start,end) => {
    audioElem.addEventListener('timeupdate', () => {
        cTime = +audioElem.currentTime
        if (+cTime.toFixed() == +end.toFixed()){
            audioElem.currentTime = '' + start
        }
    })
}

let looping = document.querySelector("#looping")
looping.addEventListener('click', () => {
    if (looping.checked !== true){
        timeA.value = Infinity
        timeB.value = Infinity
        setLoop(+timeA.value, +timeB.value)
    } else {
        setLoop(+timeA.value, +timeB.value)
    }
})