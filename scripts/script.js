// JavaScript Document
console.log("hi");

const btnPlay = document.querySelector("button");
const canvas = document.getElementById("canvas");

const r = new rive.Rive({
    src: "./images/dogy.riv",
    canvas: canvas,
    autoplay: true,
    stateMachines: 'State Machine 1',
    fit: rive.Fit.cover,
    onLoad: (_) => {
        const inputs = r.stateMachineInputs("State Machine 1")
        const trigger = inputs.find(i => i.name === "Play")
        btnPlay.onclick = (e) => {
            e.preventDefault();
            trigger.fire()
        }
    }
});
 