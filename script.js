const container = document.querySelector('.container')


/*function createGrid(){
for(let i=0;i<256;i++){
    const div_key = document.createElement('div');
    div_key.setAttribute('class','square')
    container.appendChild(div_key)
}}
createGrid()*/
let colour = "black";
const gridNo = document.querySelector('#boxes')
gridNo.addEventListener('change',updateGrid)
function updateGrid(){
    container.innerHTML = "";
    if(gridNo.value < 0){
      document.querySelector('#warning').setAttribute('class','block');
    }
    else
    {
    document.querySelector('#warning').setAttribute('class','hidden');
    let gridArea = gridNo.value**2
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
        div_ke.setAttribute('class','square bg-gray-50 border border-gray-400')
        container.appendChild(div_ke)
}
let square = document.querySelectorAll('.square');
//let colour = "black";
square.forEach((sq)=>{
  sq.addEventListener('mouseover',(event)=>{
    event.target.setAttribute('style',`background-color:${colour};`);
  } 
  );
});
}
}
const colorPicker = (color) => {
  colour = color;
  console.log(colour);
}   
const reset = document.querySelector('#reset')
reset.addEventListener('click', function(){
    location.reload()
})

let square = document.querySelectorAll('.square');

square.forEach((sq)=>{
  sq.addEventListener('mouseover',(event)=>{
    event.target.setAttribute('style',`background-color:${colour};`);
  } 
  );
});

/*const colorPicker = (color) => {
    colour = color;
    console.log(colour);
}*/