/*
File: app.js
Author: Szinyei Mikes
Copyright: 2023, Szinyei Mikes
Group: Szoft I-2 N
Date: 2023-03-31
Github: https://github.com/MikesSzinyei/
Licenc: GNU GPL 
*/

const plotAIn = document.querySelector('#plotA')
const plotBIn = document.querySelector('#plotB')
const calcButton = document.querySelector('#calcButton')
const area = document.querySelector('#area')

calcButton.addEventListener('click', ()=>{
    work();
});

function work() {
    let plotAGood = regex(plotAIn.value)
    let plotBGood = regex(plotBIn.value)
    

    if(plotAGood && plotBGood) {
        let a = Number(plotAIn.value)
        let b = Number(plotBIn.value)
        
        area.value = calculate(a,b)


    } else {
        alert('Hiba!')
    }
    
}

function calculate(a,b) {
    return ( (3/2)*Math.pow(a,2)*Math.sqrt(3) ) + ( ((3/2)*Math.pow(b,2)*Math.sqrt(3))/2 )

}


function regex(input) {
    let result = input.match(/^[0-9]+$/)
    return result
}