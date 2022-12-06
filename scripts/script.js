
const btnPlay = document.querySelector("#play");
const btnCatch = document.querySelector("#catch");
const btnWalk = document.querySelector("#walk");
const dogCanvas = document.getElementById("dogyCanvas");
const loaderCanvas = document.getElementById("loaderCanvas");

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

if(vw < 568 ){
    console.log("small")
    dogCanvas.width = window.innerWidth;
    dogCanvas.height = window.innerWidth;
}else if(vw >= 568 && vw < 992){
    console.log("medium")
    dogCanvas.width = window.innerWidth;
    dogCanvas.height = window.innerWidth;
}else if(vw >= 992){
    console.log("large")
    dogCanvas.width = 900;
    dogCanvas.height = 900;
}


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
            console.log("sadas")
            e.preventDefault();
            triggerWalk.fire()
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