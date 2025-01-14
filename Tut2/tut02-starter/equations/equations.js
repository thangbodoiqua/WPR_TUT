/*
 * Quadratic equation solver exercise
 *
 * TODO: implement the functionality for index.html webpage to solve quadratic equations
 * Use-case scenario: when a user enters numbers on three text fields with ids of "a",
 * "b", "c" and clicks "Solve" button, equation solution will be displayed on the <div>
 * with id "result".
 * 
 */
 "use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - write your logic here
   */
  function init() {
    let bts = document.querySelector("button")
    bts.addEventListener("click",getValue);
  }
  function getValue(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let c =document.getElementById("c").value    
    cal(a,b,c);
  }



  function cal(a,b,c){
    let delta =b * b - 4 * a * c;
    console.log(`delta = ${delta}`)
    let result = document.getElementById("result")
  if(a!=0){
    // Kiểm tra delta để xác định số nghiệm
    if (delta > 0) {
      // Phương trình có hai nghiệm phân biệt
      let x1 =(-b + Math.sqrt(delta)) / (2 * a);
      let x2 =(-b - Math.sqrt(delta)) / (2 * a) ;
      result.innerText= `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
      return;
    } else if (delta === 0) {
      // Phương trình có nghiệm kép
      let x =-b / (2 * a) ;
      result.innerText= `Phương trình có nghiệm kép: x = ${x}`;
      return;
    } else {
      // Phương trình vô nghiệm (delta < 0)
      result.innerText= 'Phương trình vô nghiệm';
      return;
    }
  }else if(a==0){
    if(b==0&&c==0){
      result.innerText= 'Phương trình luôn đúng';
      return;
    }else if(b==0){
        result.innerText= 'Phương trình vô lý';
        return;

    }else{
      let  x = -b/c;
      result.innerText= `Phương trình có nghiệm: x= ${x}`;
      return;
    };
    }
  }

})();