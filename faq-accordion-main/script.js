let plus_icons = document.querySelectorAll(".icons");
let ans = document.getElementsByClassName("answers");


for(let i =0; i < plus_icons.length;i++){

plus_icons[i].addEventListener("click",()=>{
      //all plus
    for(let i = 0; i < plus_icons.length;i++){

        plus_icons[i].src = "./assets/images/icon-plus.svg";
      plus_icons[i].classList.add("minus");
t
      }
     //change minus
     plus_icons[i].src = "./assets/images/icon-minus.svg";

    //all display none
    for(let i = 0; i < ans.length;i++){
        ans[i].style.display = "none";
      }

      //display
    ans[i].style.display = "block";

    //minus function
    plus_icons[i].addEventListener("click",()=>{
        
        
        //hide
        ans[i].style.display = "none";

         //change plus
     plus_icons[i].src = "./assets/images/icon-plus.svg";
    
    });
    
});
}


//try

for(btn of plus_icons){

  btn.addEventListener("click",()=>{
        //all plus
      for(let i = 0; i < plus_icons.length;i++){
  
          plus_icons[i].src = "./assets/images/icon-plus.svg";
        plus_icons[i].classList.add("minus");
  
        }
       //change minus
       plus_icons[i].src = "./assets/images/icon-minus.svg";
  
      //all display none
      for(let i = 0; i < ans.length;i++){
          ans[i].style.display = "none";
        }
  
        //display
      ans[i].style.display = "block";
  
      //minus function
      plus_icons[i].addEventListener("click",()=>{
          
          
          //hide
          ans[i].style.display = "none";
  
           //change plus
       plus_icons[i].src = "./assets/images/icon-plus.svg";
      
      });
      
  });
  }