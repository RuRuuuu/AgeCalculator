    
      window.onload = page;
      window.onresize = page;
   
       function page(){
       myWidth = window.innerWidth;//the width of the page
   }



    let label1 = document.querySelector("#label1");
    let label2 = document.querySelector("#label2");
    let label3 = document.querySelector("#label3");
    let  para1 = document.querySelector("#para1");
    let  btn = document.querySelector(".btn");
    let  error1 = document.querySelector(".error1");
    let  error2 = document.querySelector(".error2");
    let  error3= document.querySelector(".error3");
    let  d1 = document.querySelector("#day")
    let  m1 = document.querySelector("#month")
    let y1 = document.querySelector("#year")

          btn.addEventListener("click", function(){
              // validation for empty field
            if (d1.value === "") {
                d1.style.borderColor = "red";
                m1.style.borderColor = "red";
                y1.style.borderColor = "red";
                label1.style.color = "red";
                label2.style.color = "red";
                label3.style.color = "red";
                error1.innerText = "This field is required";;
                error2.innerText = "This field is required";
                error3.innerText = "This field is required";
                
                
            } 
            //for empty month input
            else if (m1.value === "") {
                d1.style.borderColor = "red";
                m1.style.borderColor = "red";
                y1.style.borderColor = "red";
                label1.style.color = "red";
                label2.style.color = "red";
                label3.style.color = "red";
                error1.innerText = " ";;
                error2.innerText = "This field cant be empty";
                error3.innerText = " ";   
            } 
             //validation for empty year input
                 else if (y1.value === "") {
                d1.style.borderColor = "red";
                m1.style.borderColor = "red";
                y1.style.borderColor = "red";
                label1.style.color = "red";
                label2.style.color = "red";
                label3.style.color = "red";
                error1.innerText = "";
                error2.innerText = "";
                error3.innerText = "This field cant be empty"; 
               
            } 
               //validation for a correct day input
            else if (d1.value > 31) {
                d1.style.borderColor = "red";
                m1.style.borderColor = "red";
                y1.style.borderColor = "red";
                label1.style.color = "red";
                label2.style.color = "red";
                label3.style.color = "red";
                error1.innerText = "Must be a valid date";;
                error2.innerText = "";
                error3.innerText = "";
                
            }

            //validation for correct month
            else if (m1.value > 12) {
                d1.style.borderColor = "red";
                m1.style.borderColor = "red";
                y1.style.borderColor = "red";
                label1.style.color = "red";
                label2.style.color = "red";
                label3.style.color = "red";
                error1.innerText = "";
                error2.innerText = "Must be a valid month";
                error3.innerText = "";
                
            }
                  //validation for a correct year input
                  else if (y1.value > 2023) {
                    d1.style.borderColor = "red";
                    m1.style.borderColor = "red";
                    y1.style.borderColor = "red";
                    label1.style.color = "red";
                    label2.style.color = "red";
                    label3.style.color = "red";
                    error1.innerText = "";;
                    error2.innerText = "";
                    error3.innerText = "Must be a valid year";
                }   
            
                  
                
                 else{   

                    d1.style.borderColor = "black";
                    m1.style.borderColor = "black";
                    y1.style.borderColor = "black";
                    label1.style.color = "black";
                    label2.style.color = "black";
                    label3.style.color = "black";
                    error1.innerText = "";;
                    error2.innerText = "";
                    error3.innerText = "";
                   
                let d3 = d1.value;
                let m3 = m1.value;
                let y3 = y1.value;
                 
                let date = new Date();
                 let d2 = date.getDate();
                 let  m2 = 1 + date.getMonth();
                 let  y2 = date.getFullYear();
                 let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


                 if (d3 > d2){

                    d2 = d2 + months[ m2 - 1 ];
                    m2 = m2 -1;
                 }
                   
                 if (m3 > m2) {
                    m2 = m2 + 12;
                    y2 = y2 -1;
                    
                 }
                  let  d = d2 - d3;
                  let  m = m2 - m3;
                  let y = y2 - y3;

                  para1.classList.add("para");
                  para1.innerHTML = `${y} years <br> ${m} months <br> ${d} days`

                
                }
            
                    
          })


             

            
    
        
