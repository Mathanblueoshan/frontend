let plus = document.getElementsByClassName("plus");
let plus_array = Array.from(plus);
let answers = document.getElementsByClassName("answers");

//plus functions

plus_array.forEach(dropdown);

function dropdown(element) {
  element.addEventListener("click", () => {
    if (element.classList.contains('plus')) {
      element.src = "./assets/images/icon-minus.svg";

      element.classList.add("minus");
      element.classList.remove("plus");

      let select = plus_array.indexOf(element);

      answers[select].classList.add("active");

      console.log("plus element", select);
    }
    //minus
    else if (element.classList.contains('minus')) {
      element.src = "./assets/images/icon-plus.svg";

      element.classList.add("plus");
      element.classList.remove("minus");

      let select = plus_array.indexOf(element);

      answers[select].classList.remove("active");

      console.log("minus element", select);
    }


   
  });
}

