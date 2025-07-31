let boxes = document.querySelectorAll(".box")
let rest = document.getElementById("reset")
let masg = document.querySelector(".masg")
let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        console.log("i am")
        if(turn0){
           box.innerHTML = "O"
          turn0 = false
        }else{
            box.innerHTML = "X"
            turn0 = true
        }
        box.disabled = true
        heckwinner()
    })
})
const disablebox = ()=>{
for(let box of boxes){
    box.disabled = true
}
}
const winershow = (winner) =>{
  masg.innerHTML = `Congratulations ${winner} is Winner`   
  disablebox();
}
const heckwinner = ()=>{
    for( let Pattern of winPatterns){
       let pos1val1 = boxes[Pattern[0]].innerHTML
       let pos1val2 = boxes[Pattern[1]].innerHTML
       let pos1val3 = boxes[Pattern[2]].innerHTML
  if(pos1val1 != "" && pos1val2 != ""&& pos1val3 !=""){
    if(pos1val1 === pos1val2 && pos1val2 === pos1val3 ){
        winershow(pos1val1)
    }
    
}}
}