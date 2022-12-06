
const btnPlay = document.querySelector("#play");
const btnCatch = document.querySelector("#catch");
const btnWalk = document.querySelector("#walk");
const dogCanvas = document.getElementById("dogyCanvas");
const loaderCanvas = document.getElementById("loaderCanvas");

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

// window.addEventListener("resize", ()=> {
//     if(vw < 568 ){
//         console.log("small")
//         dogyRive.resizeToCanvas()
//         dogCanvas.width = window.innerWidth;
//         dogCanvas.height = window.innerWidth;
//     }else if(vw >= 568 && vw < 992){
//         console.log("medium")
//         dogyRive.resizeToCanvas()
//         dogCanvas.width = window.innerWidth;
//         dogCanvas.height = window.innerWidth;
//     }else if(vw >= 992){
//         console.log("large")
//         // dogyRive.resizeToCanvas()
//         dogCanvas.width = 900;
//         dogCanvas.height = 900;
//     }

// })

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
        dogyRive.resizeDrawingSurfaceToCanvas();

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
            }else {
                triggerWalk.value = false
            }
        }
    }
});
 
const loaderRive = new rive.Rive({
    src: "./images/dogy.riv",
    canvas: loaderCanvas,
    autoplay: true,
    stateMachines: 'loader-states',
    artboard: "loader",
    fit: rive.Fit.cover,
});