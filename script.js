const container = document.querySelector('.container')


function createGrid(){
for(let i=0;i<256;i++){
    const div_key = document.createElement('div');
    div_key.classList.add('square')
    container.appendChild(div_key)
}}
createGrid()

const gridNo = document.querySelector('#boxes')
gridNo.addEventListener('change',updateGrid)
function updateGrid(){
    container.innerHTML = "";
    gridArea = gridNo.value**2
    console.log(gridArea)
    container.style.setProperty(
        "grid-template-columns",
        `repeat(${gridNo.value}, 2fr)`
      );
      container.style.setProperty(
        "grid-template-rows",
        `repeat(${gridNo.value}, 2fr)`
      );
    for(let i=0;i<gridArea;i++){
        const div_ke = document.createElement('div');
        div_ke.classList.add('square')
        container.appendChild(div_ke)
}}
    


function color(){
const color = document.querySelector('div')
color.addEventListener('mouseover',function(event){
    event.target.classList.replace('square', 'red')
})
}
const red = document.querySelector('#Red')
red.addEventListener('click',color)

function color2(){
const color = document.querySelector('div')
 color.addEventListener('mouseover',function(event){
    event.target.classList.replace('square', 'blue')
})
}
const blue = document.querySelector('#Blue')
blue.addEventListener('click',color2)


function color3(){
const color = document.querySelector('div')
color.addEventListener('mouseover',function(event){
    event.target.classList.replace('square', 'green')
})
    }
const green = document.querySelector('#Green')
green.addEventListener('click',color3)


function clearscreen(){
    color.classList.replace('black','square')
}
const reset = document.querySelector('#reset')
reset.addEventListener('click', function(){
    location.reload()
})
