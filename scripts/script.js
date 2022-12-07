
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
        }

        const triggerCatch = inputs.find(i => i.name === "catch")
        btnCatch.onclick = (e) => {
            e.preventDefault();
            triggerCatch.fire()
        }

        const triggerWalk = inputs.find(i => i.name === "walk")
        btnWalk.onclick = (e) => {
            e.preventDefault();

            if(triggerWalk.value == false) {
                triggerWalk.value = true
                animContainer.classList.add("backgroundAnim")
            }else {
                triggerWalk.value = false
                animContainer.classList.remove("backgroundAnim")
            }
        }
    }
});


const loaderCanvas = document.getElementById("loaderCanvas");
const btnPlayCanvas = document.getElementById("btnPlayCanvas");
const BtnCatchCanvas = document.getElementById("btnCatchCanvas");
const BtnWalkCanvas = document.getElementById("btnWalkCanvas");

// const loaderRive = new rive.Rive({
//     src: "./images/dogy.riv",
//     canvas: loaderCanvas,
//     autoplay: true,
//     stateMachines: 'loader-states',
//     artboard: "loader",
//     fit: rive.Fit.cover,
// });


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