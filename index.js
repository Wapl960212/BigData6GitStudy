alert("안녕!!!");
//타이틀 마우스올리면 색이 바뀌는 이밴트
document.querySelector("h1").addEventListener("mouseover",(e)=>{
    e.target.style.color="red";
})