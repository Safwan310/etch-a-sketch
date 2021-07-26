const container = document.querySelector('.container')


function createGrid(){
for(let i=0;i<256;i++){
    const div_key = document.createElement('div');
    div_key.setAttribute('class','square hover:bg-black')
    container.appendChild(div_key)
}}
createGrid()

const gridNo = document.querySelector('#boxes')
gridNo.addEventListener('change',updateGrid)
function updateGrid(){
    container.innerHTML = "";
    let gridArea = gridNo.value**2
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
        div_ke.setAttribute('class','square hover:bg-black')
        container.appendChild(div_ke)
}}
    
const reset = document.querySelector('#reset')
reset.addEventListener('click', function(){
    location.reload()
})
