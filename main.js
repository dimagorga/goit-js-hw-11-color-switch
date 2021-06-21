const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
    isActive: false,
} 
let swithColorID = null;   
refs.start.addEventListener('click', onStartButton)
refs.stop.addEventListener('click', onStopButton)

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };  

function onStartButton() {
    if(refs.isActive){
        return
    }
    refs.isActive = true;
    refs.start.setAttribute('disabled', 'disabled')
    swithColorID = setInterval(() => {   
        refs.body.style.backgroundColor = colors[randomColorMaker()]
    }, 1000)
}
function onStopButton(){ 
    refs.isActive = false
    clearInterval(swithColorID)    
    refs.start.removeAttribute('disabled', 'disabled')
}
function randomColorMaker(){
    return randomIntegerFromInterval(0, colors.length-1)
}



  