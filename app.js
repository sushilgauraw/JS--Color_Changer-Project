let btn = document.querySelector("#button");
const randomColor = ()=>{
    let val = "123456789ABCDEF";
    let cons = "#";
    for(let i = 0; i<6;i++){
      cons = cons + val[Math.floor(Math.random()*16)];
}
return cons;
};

function ChangeColor(){
    document.getElementById("canvas").style.backgroundColor = randomColor();

}
btn.addEventListener("click",ChangeColor);