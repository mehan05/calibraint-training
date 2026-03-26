const hamBurgerLogo = document.getElementById("ham-burger-logo");
if(hamBurgerLogo){
    hamBurgerLogo.addEventListener("click",()=>{
        const hamBurger = document.querySelector(".ham-burger");
        hamBurger.classList.toggle("none");
        const adDivSection = document.querySelector(".ad-div");
        adDivSection.classList.toggle("none")
    })
}


const slides = document.querySelector(".slides");
const allSlides = document.querySelectorAll(".slide");
const progress = document.querySelector(".progress-bar");
const slider = document.querySelector(".slider");

let index = 0;
let total = allSlides.length;
// let busy = false;

    function update(){
      console.log("test",total);
      
      const percent = ((index + 1) / total) * 100;
      console.log("percentage",percent);
      
      progress.style.width = percent + "%";
    }
    
    function next(){
      if(index < total-1){
        index++;
        update();
      }
    }
    
    function prev(){
      if(index > 0){
        index--;
        update();
      }
    }
    
   
    
    slider.addEventListener("scroll",(e)=>{
      if(slider.scrollLeft>50){
        let sl = e.target
        const isSCrollRight = Math.ceil(sl.scrollLeft + sl.clientWidth) >= sl.scrollWidth;
        
        console.log("scroll event triggered",isSCrollRight);
        if(isSCrollRight){
                    next();
                }
                else{
                    prev();
                }
      }
    })












