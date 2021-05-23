const CIRCLECLASS = 'circle'
const XCLASS = 'x'
const cellElement = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circleturn

start()


function start(){
    circleturn=false
    cellElement.forEach(cell =>{
        cell.addEventListener('click',handleClick,{ once:true})
    })
    setBoardHoverClass()

}

function handleClick(e){
   const cell =e.target
   currentclass = circleturn ? CIRCLECLASS : XCLASS
   placemark(cell,currentclass)


   switchturn()
   setBoardHoverClass()


}

function placemark(cell,currentclass){
    cell.classList.add(currentclass)
}

function switchturn(){
    circleturn = !circleturn
}

function setBoardHoverClass(){
    board.classList.remove(CIRCLECLASS)
    board.classList.remove(XCLASS)
    if(circleturn){
        board.classList.add(CIRCLECLASS)
    }else{
        board.classList.add(XCLASS)
    }

}