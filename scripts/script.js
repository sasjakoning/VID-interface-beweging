// JavaScript Document
console.log("hi");

const btnPlay = document.querySelector("#play");
const btnCatch = document.querySelector("#catch");
const dogCanvas = document.getElementById("dogyCanvas");
const loaderCanvas = document.getElementById("loaderCanvas");

const dogyRive = new rive.Rive({
    src: "./images/dogy.riv",
    canvas: dogyCanvas,
    autoplay: true,
    stateMachines: 'dogy-states',
    artboard: "Dogy",
    fit: rive.Fit.cover,
    onLoad: (_) => {
        const inputs = dogyRive.stateMachineInputs("dogy-states")
        const triggerPlay = inputs.find(i => i.name === "Play")
        btnPlay.onclick = (e) => {
            e.preventDefault();
            console.log("hellooo")
            triggerPlay.fire()
        }

        const triggerCatch = inputs.find(i => i.name === "Catch")
        btnCatch.onclick = (e) => {
            e.preventDefault();
            console.log("hellooo")
            triggerCatch.fire()
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