
const audio = document.querySelector("#audio");
const audioBark = document.querySelector("#audio-bark");
const audioSqueak = document.querySelector("#audio-squeak");
const audioWalk = document.querySelector("#audio-walk");
const audioControl = document.querySelector(".audioControl");
let audioState = false;

audioControl.addEventListener("click", () => {

    if(audio.paused){
        console.log("playing")
        audio.play()
        audioState = true;
        audioControl.style.backgroundImage = `url("../images/audio-on.svg")`
    }else {
        console.log("pausing")
        audio.pause()
        audioState = false;
        audioControl.style.backgroundImage = `url("../images/audio-off.svg")`
    }
})





const btnPlay = document.querySelector("#play");
const btnCatch = document.querySelector("#catch");
const btnWalk = document.querySelector("#walk");
const dogCanvas = document.getElementById("dogyCanvas");
const animContainer = document.querySelector(".animContainer")


const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)


window.addEventListener("resize", () => {
    dogyRive.resizeDrawingSurfaceToCanvas();
})


const dogyRive = new rive.Rive({
    src: "./images/dogy.riv",
    canvas: dogyCanvas,
    autoplay: true,
    stateMachines: 'dogy-states',
    artboard: "dogy",
    fit: rive.Fit.cover,
    onLoad: (_) => {

        const inputs = dogyRive.stateMachineInputs("dogy-states")
        const triggerPlay = inputs.find(i => i.name === "play")
        btnPlay.onclick = (e) => {
            e.preventDefault();
            triggerPlay.fire()

            if(audioState == true){
                setTimeout(() => {
                    audioBark.play();
                }, 2100);
            }
        }

        const triggerCatch = inputs.find(i => i.name === "catch")
        btnCatch.onclick = (e) => {
            e.preventDefault();
            triggerCatch.fire()

            if(audioState == true){
                setTimeout(() => {
                    audioSqueak.volume = 0.5
                    audioSqueak.play();
                }, 200);
            }
        }

        const triggerWalk = inputs.find(i => i.name === "walk")
        btnWalk.onclick = (e) => {
            e.preventDefault();

            if(triggerWalk.value == false) {
                triggerWalk.value = true
                animContainer.classList.add("backgroundAnim")
                btnPlay.classList.add("disabled");
                btnCatch.classList.add("disabled");
                if(audioState == true){
                    setTimeout(() => {
                        audioWalk.volume = 0.5
                        audioWalk.play();
                    }, 200);
                }
            }else {
                triggerWalk.value = false
                animContainer.classList.remove("backgroundAnim")
                btnPlay.classList.remove("disabled");
                btnCatch.classList.remove("disabled");
                if(audioState == true){
                    setTimeout(() => {
                        audioWalk.volume = 0.5
                        audioWalk.pause();
                    }, 200);
                }
            }
        }
    }
});


const loaderCanvas = document.getElementById("loaderCanvas");
const btnPlayCanvas = document.getElementById("btnPlayCanvas");
const BtnCatchCanvas = document.getElementById("btnCatchCanvas");
const BtnWalkCanvas = document.getElementById("btnWalkCanvas");

const loaderRive = new rive.Rive({
    src: "./images/dogy.riv",
    canvas: loaderCanvas,
    autoplay: true,
    stateMachines: 'loader-states',
    artboard: "loader",
    fit: rive.Fit.cover,
});


const btnPlayRive = new rive.Rive({
    src: "./images/dogy.riv",
    canvas: btnPlayCanvas,
    autoplay: true,
    stateMachines: 'icon-play-states',
    artboard: "icon-play",
    fit: rive.Fit.cover,
    onLoad: (_) => {

        btnPlayRive.resizeDrawingSurfaceToCanvas();
    }
});

const btnCatchRive = new rive.Rive({
    src: "./images/dogy.riv",
    canvas: BtnCatchCanvas,
    autoplay: true,
    stateMachines: 'icon-catch-states',
    artboard: "icon-catch",
    fit: rive.Fit.cover,
    onLoad: (_) => {

        btnCatchRive.resizeDrawingSurfaceToCanvas();
    }
});

const btnWalkRive = new rive.Rive({
    src: "./images/dogy.riv",
    canvas: BtnWalkCanvas,
    autoplay: true,
    stateMachines: 'icon-walk-states',
    artboard: "icon-walk",
    fit: rive.Fit.cover,
    onLoad: (_) => {

        btnWalkRive.resizeDrawingSurfaceToCanvas();
    }
});