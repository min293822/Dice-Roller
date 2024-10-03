document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById("output");
  const numofdice = document.getElementById("numofdice");
  const decrease = document.getElementById("decrease");
  const reset = document.getElementById("reset");
  const increase = document.getElementById("increase");
  let number = 1;
  
  decrease.addEventListener('onclick',()=>{
    if(number>=1){
    number--;
   numofdice.value = number;
    }
  });
  reset.addEventListener('onclick',() => {
   numofdice.value = number;
  });
  increase.addEventListener('onclick',() => {
    number++;
   numofdice.value = number;
  });
  
});