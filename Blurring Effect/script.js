const load=document.querySelector(".loading")
const bg=document.querySelector(".bg")
let load1=0
let int = setInterval(blurring,30)
function blurring(){
  load1++
  if(load1>90){
    clearInterval(int)
  }
  load.innerText=`${load1}%`
  load.style.opacity=scale(load1,0,100,1,0)
  bg.style.filter=`blur(${scale(load,0,100,1,0)}px)`
}
const scale = (num , in_min , in_max , out_min , out_max)=>{
  return ((num-in_min)*(out_max-out_min))/(in_max-in_min)+out_min
}